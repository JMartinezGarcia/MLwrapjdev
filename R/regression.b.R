RegressionClass <- R6::R6Class(
    "RegressionClass",
    inherit = RegressionBase,
    private = list(

        ## Member Variables?

        .dat = NA,
        .form = NA,
        .sobol_jansen = NA,
        .feature_names = NA,

        ## Init

        .init = function(){

            private$.dat <- NULL
            private$.form <- NULL
            private$.sobol_jansen <- FALSE
            private$.feature_names <- NULL

            private$.initSummaryTable()
            private$.initResultsPlots()
            private$.initSensitivityPlots()

        },

        .initSummaryTable = function(){

            metrics_set <- private$.getSummaryMetrics(self$options)

            table_summary <- self$results$summary

            for (metric in metrics_set){

                table_summary$addColumn(name = metric)

            }
        },

        .initResultsPlots = function(){

            if (self$options$plot_residuals_dist == TRUE){

                key = 'Residuals Distribution'

                self$results$plots_results$addItem(key = key)

            }

            if (self$options$plot_residuals_v_predictions == TRUE){

                key = "Residuals vs Predictions"

                self$results$plots_results$addItem(key = key)

            }

            if (self$options$plot_observed_v_predictions == TRUE){

                key = "Observed vs Predictions"

                self$results$plots_results$addItem(key = key)

            }

        },

        .initSensitivityPlots = function(){

            if (self$options$pfi == TRUE){

                key = 'Permutation Feature Importance'

                self$results$plots_sensitivity$addItem(key = key)

            }

            if (self$options$shap_mean == TRUE){

                key = 'Mean Absolute SHAP'

                self$results$plots_sensitivity$addItem(key = key)

            }

            if (self$options$shap_dir){

                key = "Directional SHAP"

                self$results$plots_sensitivity$addItem(key = key)

            }

            if (self$options$shap_box){

                key = "SHAP Boxplot"

                self$results$plots_sensitivity$addItem(key = key)


            }

            if (self$options$shap_swarm){

                key = 'SHAP Swarm Plot'

                self$results$plots_sensitivity$addItem(key = key)
            }


            if (self$options$olden == TRUE){

                key = "Olden Importance"

                self$results$plots_sensitivity$addItem(key = key)

            }

            if (self$options$sobol == TRUE){

                key = "Sobol Importance"

                self$results$plots_sensitivity$addItem(key = key)

            }

        },

        .getSummaryMetrics = function(options, add_dataset = FALSE){

            if (add_dataset){

                metrics_set <- c("Dataset")

            } else {metrics_set = c()}

            if (options$rmse){metrics_set = c(metrics_set, "RMSE")}

            if (options$mae){metrics_set = c(metrics_set, "MAE")}

            if (options$mpe){metrics_set = c(metrics_set, "MPE")}

            if (options$mape){metrics_set = c(metrics_set, "MAPE")}

            if (options$smape){metrics_set = c(metrics_set, "SMAPE")}

            if (options$ccc){metrics_set = c(metrics_set, "CCC")}

            if (options$rpiq){metrics_set = c(metrics_set, "RPIQ")}

            if (options$rsq){metrics_set = c(metrics_set, "RSQ")}

            return(metrics_set)

        },

        .setInfo = function(){

            if (self$options$mode == "neural_network"){

                model_name = "Neural Network"

            }

            else if (self$options$mode == "random_forest"){

                model_name = "Random Forest"

            }

            else if (self$options$mode == "xgboost"){

                model_name = "XGBoost"
            }

            else {

                if (self$options$kernels == "linear"){

                    model_name = "Support Vector Machine (Linear Kernel)"

                } else if (self$options$kernels == "rbf"){

                    model_name = "Support Vector Machine (RBF Kernel)"

                } else{

                    model_name = "Support Vector Machine (Polynomial Kernel)"

                }

            }

            content = glue::glue("

                                    Model: {model_name}

                                    Random Seed: {self$options$seed}"
                                 )

            self$results$text$setContent(content)

        },

        ## Run

        .run = function(){

            private$.setInfo()

            if (!self$options$run) {
                return()
            }

            private$.checkArguments()

            set.seed(self$options$seed)

            private$.finalData()

            if (private$.compare_hash()){

                    model_path <- file.path(tempdir(), "analysis_object.rds")

                    analysis_object <- readRDS(model_path)

                    self$results$.setModel(analysis_object)

                }

            else{

                    private$.compute()

                }

                private$.feature_names <- self$results$model$feature_names



            ## populate

            private$.populateSummaryMetrics()

            private$.checkpoint()

            if (self$results$model$hyperparameters$tuning){

                private$.populateHyperparametersTable(self$results$model)

                if (self$options$plot_tuner_results){

                    private$.populateTunerPlots()

                }

            }

            private$.populateResultsPlots()
            private$.checkpoint()
            private$.populateSensitivityPlots()
            private$.populateSensitivityTables()
            private$.checkpoint()
            private$.populateFeatureInteracionPlots()
            private$.populateFeatureInteractionTables()
            private$.checkpoint()
            private$.populateFunctionalDependencePlots()
            private$.populateOutputs()

        },

        .compute = function(){

            # Preprocessing

            analysis_object <- MLwrap::preprocessing(private$.dat,
                                                     private$.form,
                                                     num_vars = self$options$covs,
                                                     cat_vars = self$options$factors,
                                                     norm_num_vars = self$options$stdCovs,
                                                     encode_cat_vars = self$options$encCat,
                                                     task = "regression"
                                                    )

            # Build Model

            private$.feature_names <- analysis_object$feature_names

            names_and_hyperparameters <- private$.getHyperparameters()

            model_name <- names_and_hyperparameters$model_name

            hyperparameters <- names_and_hyperparameters$hyp_list

            if (model_name == "Neural Network"){

                # A bit of a hack

                analysis_object <- private$.createNN(analysis_object, hyp_list = hyperparameters)

            } else {

                analysis_object <- MLwrap::build_model(analysis_object, model_name,
                                                       hyperparameters = hyperparameters)

            }

            # Fine Tuning

            private$.checkpoint()

            tuner <- private$.getTuner()

            analysis_object <- MLwrap::fine_tuning(analysis_object, tuner = tuner,
                                                   metrics = self$options$metrics)

            # Sensitivity Analysis

            private$.checkpoint()

            if (self$options$new_data_SA == "test"){

                use_test = TRUE

            } else {

                use_test = FALSE

            }

            sensitivity_methods <- private$.getSensitivityMethods(model_name)

            analysis_object <- MLwrap::sensitivity_analysis(analysis_object,
                                                            methods = sensitivity_methods,
                                                            use_test = use_test)

            # Calculate Olden for Neural Networks

            if (model_name == "Neural Network"){

                olden_results <- private$.calculateOlden(analysis_object$final_model)

                sensitivity_results <- analysis_object$sensitivity_analysis

                sensitivity_results$Olden <- olden_results

                analysis_object$modify("sensitivity_analysis", sensitivity_results)

            }

            # Save Analysis Object

            self$results$.setModel(analysis_object)

            hash_list <- c(self$options$seed, self$options$dep, self$options$covs, self$options$factors,
                           self$options$stdCovs, self$options$encCat, self$options$metrics,
                              model_name, hyperparameters, tuner)

            new_hash <- digest::digest(hash_list, serialize = TRUE, seed = 0)

            # Crear ruta del archivo donde guardar el hash
            hash_file <- file.path(tempdir(), "hash.txt")

            # Guardar el hash en el archivo
            writeLines(new_hash, hash_file)

            model_file <- file.path(tempdir(), "analysis_object.rds")

            saveRDS(analysis_object, model_file)

        },

        .compare_hash = function(){

            hash_file <- file.path(tempdir(), "hash.txt")

            if (!file.exists(hash_file)){return(FALSE)}

            model_name_and_hyp <- private$.getHyperparameters()

            model_name <- model_name_and_hyp$model_name

            hyperparameters <- model_name_and_hyp$hyp_list

            tuner <- private$.getTuner()

            new_hash <- digest::digest(c(self$options$seed, self$options$dep, self$options$covs, self$options$factors,
                                         self$options$stdCovs, self$options$encCat,self$options$metrics,
                                         model_name, hyperparameters, tuner))

            old_hash <- readLines(hash_file)

            return(old_hash == new_hash)

        },

        .getHyperparameters = function(){

            if (self$options$mode == "neural_network"){

                model_name = "Neural Network" # A bit of a hack


                ######### hidden_units ###########

                if (self$options$hidden_neurons_tune == "fix_neurons"){

                    hidden_units = self$options$fix_n_neurons

                } else {

                    hidden_units = c(self$options$min_n_neurons, self$options$max_n_neurons)

                }

                ######### penalty ###########

                if (self$options$penalty_tune == "fix_penalty"){

                    penalty = self$options$fix_penalty

                } else {

                    penalty = c(self$options$min_penalty, self$options$max_penalty)

                }

                hyp_list = list(
                    hidden_units = hidden_units,
                    penalty = penalty
                )


            } else if (self$options$mode == "random_forest"){

                model_name = "Random Forest"

                ##### mtry ######

                if (self$options$mtry_tune == "fix_mtry"){

                    mtry = self$options$fix_mtry

                } else {

                    mtry = c(self$options$min_mtry, self$options$max_mtry)

                }

                ##### trees ######

                if (self$options$trees_tune == "fix_trees"){

                    trees = self$options$fix_trees

                } else {

                    trees = c(self$options$min_trees, self$options$max_trees)

                }

                ##### min_n ######

                if (self$options$min_n_tune == "fix_min_n"){

                    min_n = self$options$fix_min_n

                } else {

                    min_n = c(self$options$min_min_n, self$options$max_min_n)

                }

                hyp_list = list(
                    trees = trees,
                    mtry = mtry,
                    min_n = min_n
                )


            } else if (self$options$mode == "xgboost"){

                model_name = "XGBOOST"

                ##### mtry ######

                if (self$options$mtryx_tune == "fix_mtryx"){

                    mtry = self$options$fix_mtryx

                } else {

                    mtry = c(self$options$min_mtryx, self$options$max_mtryx)

                }

                ##### trees ######

                if (self$options$treesx_tune == "fix_treesx"){

                    trees = self$options$fix_treesx

                } else {

                    trees = c(self$options$min_treesx, self$options$max_treesx)

                }

                ##### min_n ######

                if (self$options$min_nx_tune == "fix_min_nx"){

                    min_n = self$options$fix_min_nx

                } else {

                    min_n = c(self$options$min_min_nx, self$options$max_min_nx)

                }

                ##### tree_depth #######

                if (self$options$tree_depth_tune == "fix_tree_depth"){

                    tree_depth = self$options$fix_tree_depth

                } else {

                    tree_depth = c(self$options$min_tree_depth, self$options$max_tree_depth)

                }

                ##### learn_rate #######

                if (self$options$learn_ratex_tune == "fix_learn_ratex"){

                    learn_rate = self$options$fix_learn_ratex

                } else {

                    learn_rate = c(self$options$min_learn_ratex, self$options$max_learn_ratex)

                }

                ##### loss_reduction ######

                if (self$options$loss_reduction_tune == "fix_loss_reduction"){

                    loss_reduction = self$options$fix_loss_reduction

                } else {

                    loss_reduction = c(self$options$min_loss_reduction, self$options$max_loss_reduction)

                }

                hyp_list = list(
                    trees = trees,
                    mtry = mtry,
                    min_n = min_n,
                    tree_depth = tree_depth,
                    learn_rate = learn_rate,
                    loss_reduction = loss_reduction
                )


            } else {

                model_name = "SVM"

                ##### cost #####

                if (self$options$cost_tune == "fix_cost"){

                    cost = self$options$fix_cost

                } else {

                    cost = c(self$options$min_cost, self$options$max_cost)

                }

                #### margin #####

                if (self$options$margin_tune == "fix_margin"){

                    margin = self$options$fix_margin

                } else {

                    margin = c(self$options$min_margin, self$options$max_margin)

                }

                #### rbf_sigma #####

                if (self$options$rbf_sigma_tune == "fix_rbf_sigma"){

                    rbf_sigma = self$options$fix_rbf_sigma

                } else {

                    rbf_sigma = c(self$options$min_rbf_sigma, self$options$max_rbf_sigma)

                }

                #### degree ######

                if (self$options$degree_tune == "fix_degree"){

                    degree = self$options$fix_degree

                } else {

                    degree = c(as.numeric(self$options$min_degree),
                               as.numeric(self$options$max_degree)
                               )

                }

                #### scale_factor #####

                if (self$options$scale_factor_tune == "fix_scale_factor"){

                    scale_factor = self$options$fix_scale_factor

                } else {

                    scale_factor = c(self$options$min_scale_factor, self$options$max_scale_factor)

                }

                ##### kernel #####

                if (self$options$kernels == "linear"){

                    type = "linear"

                    hyp_list = list(
                        type = type,
                        cost = cost,
                        margin = margin
                    )

                } else if (self$options$kernels == "rbf"){

                    type = "rbf"

                    hyp_list = list(
                        type = type,
                        cost = cost,
                        margin = margin,
                        rbf_sigma = rbf_sigma
                    )

                } else {

                    type = "poly"

                    hyp_list = list(
                        type = type,
                        cost = cost,
                        margin = margin,
                        degree = degree,
                        scale_factor = scale_factor
                    )

                }

            }

            return(list(model_name = model_name, hyp_list = hyp_list))

        },

        .createNN = function(analysis_object, hyp_list){

            analysis_object <- MLwrap::build_model(analysis_object,"SVM")

            hyp_nn <- HyperparamsNN_nnet$new(hyp_list)

            hidden_units <- if (hyp_nn$hidden_units_tune) tune::tune() else as.integer(hyp_nn$hyperparams_constant$hidden_units)
            penalty <- if (hyp_nn$penalty_tune) tune::tune() else hyp_nn$hyperparams_constant$penalty

            nn_model <- parsnip::mlp(
                hidden_units = !!hidden_units,
                epochs = 500,
                penalty = !!penalty
            )

            nn_model <- parsnip::set_engine(nn_model, "nnet")

            nn_model <- parsnip::set_mode(nn_model, "regression")

            analysis_object$modify("model", nn_model)

            analysis_object$modify("hyperparameters", hyp_nn)

            analysis_object$modify("model_name", "Neural Network")

            return(analysis_object)
        },

        .getTuner = function(){

            if (self$options$tuners == "none"){

                tuner = "Bayesian Optimization"

            } else{

                tuner = "Grid Search CV"

            }

            return(tuner)
        },

        .getSensitivityMethods = function(model_name){

            if (model_name == "SVM" && self$options$kernels != "linear"){

                methods = c("PFI")

            } else{

                methods = c("PFI", "SHAP")

            }

            if (private$.sobol_jansen){

                methods = c(methods, "Sobol_Jansen")

            }

            methods = c(methods, "Friedman H-stat")

            return(methods)

        },

        .calculateOlden = function(final_model){

                n_in = final_model$fit$fit$fit$n[1]

                n_hidd = final_model$fit$fit$fit$n[2]

                wts = final_model$fit$fit$fit$wts

                w_in = matrix(,nrow = n_in, ncol = n_hidd)

                off_set = 0

                for (h in 1:n_hidd){

                    idx <- off_set + 2:(n_in + 1)

                    w_in[, h] <- wts[idx]

                    off_set <- off_set + n_in + 1
                }

                w_out <- wts[off_set + 2:(n_hidd + 1)]

                olden_imp <- as.data.frame(t(w_in %*% w_out))

                colnames(olden_imp) <- private$.feature_names

                return (olden_imp)

            },


        .finalData = function(){

            dat <- self$data

            formula <- jmvcore::constructFormula(self$options$dep,
                                                 c(self$options$covs, self$options$factors))
            formula <- as.formula(formula)

            private$.form = formula

            ################ Preprocessing #####################

            for (cov in self$options$covs){

                dat[[cov]] <- base::as.numeric(dat[[cov]])

            }

            for (fac in self$options$factors){

                dat[[fac]] <- base::as.factor(dat[[fac]])

            }

            private$.dat = dat

            if (length(self$options$factors) == 0){

                private$.sobol_jansen = TRUE

            }

        },

        .populateSummaryMetrics = function(){

            table <- self$results$summary

            table_res <- MLwrap::table_evaluation_results(self$results$model)

            metrics_set <- private$.getSummaryMetrics(self$options, add_dataset = TRUE)

            table$setRow(rowNo = 1, values = as.list(table_res[metrics_set][1,]))

            table$setRow(rowNo = 2, values = as.list(table_res[metrics_set][2,]))

        },

        .populateHyperparametersTable = function(analysis_object){

            table <- self$results$tuner_table

            table$setVisible(TRUE)

            hyp_names_tune <- names(analysis_object$hyperparameters$hyperparams_ranges)

            best_hyp <- analysis_object$hyperparameters$hyperparams_constant

            best_hyp <- c(best_hyp, as.list(tune::show_best(analysis_object$tuner_fit, n = 1))[hyp_names_tune])

            mean_best_hyp <- tune::show_best(analysis_object$tuner_fit, n = 1)$mean

            std_best_hyp <- tune::show_best(analysis_object$tuner_fit, n = 1)$std_err

            for (name in names(best_hyp)){

                table$addColumn(name = name)

            }

            best_hyp$metric <- self$options$metrics

            best_hyp$estimate <- mean_best_hyp

            best_hyp$std <- std_best_hyp

            if (is.na(best_hyp$std)){best_hyp$std <- 0}

            table$setRow(rowNo = 1, values = best_hyp)

        },

        .populateTunerPlots = function(){

            self$results$plot_tuner$setVisible(TRUE)

            self$results$plot_tuner$setState("tuner_search_results")

        },

        .populateResultsPlots = function(){

            if (self$options$plot_residuals_dist == TRUE){

                self$results$plots_results[["\"Residuals Distribution\""]]$setState("residuals_dist")

            }

            if (self$options$plot_residuals_v_predictions == TRUE){

                self$results$plots_results[["\"Residuals vs Predictions\""]]$setState("scatter_residuals")

            }

            if (self$options$plot_observed_v_predictions == TRUE){

                self$results$plots_results[["\"Observed vs Predictions\""]]$setState("scatter_predictions")

            }

        },

        .populateSensitivityPlots = function(){

            if (self$options$pfi){

                self$results$plots_sensitivity[["\"Permutation Feature Importance\""]]$setState("PFI_barplot")

            }

            if (self$options$shap_mean){

                self$results$plots_sensitivity[["\"Mean Absolute SHAP\""]]$setState("SHAP_barplot")

            }

            if (self$options$shap_dir){

                self$results$plots_sensitivity[["\"Directional SHAP\""]]$setState("SHAP_directional")

            }

            if (self$options$shap_box){

                self$results$plots_sensitivity[["\"SHAP Boxplot\""]]$setState("SHAP_boxplot")

            }

            if (self$options$shap_swarm){

                self$results$plots_sensitivity[["\"SHAP Swarm Plot\""]]$setState("SHAP_swarmplot")
            }

            if (self$options$olden){

                self$results$plots_sensitivity[["\"Olden Importance\""]]$setState("Olden_barplot")

            }

            if (self$options$sobol){

                self$results$plots_sensitivity[["\"Sobol Importance\""]]$setState("Sobol_Jansen")

            }

        },

        .populateFeatureInteracionPlots = function(){

          if (self$options$h2_total){

              self$results$h2_total_plot$setState(TRUE)

          }

          if (self$options$h2_pair_norm){

                self$results$h2_pair_norm_plot$setState(TRUE)

          }

          if (self$options$h2_pair_raw){

                self$results$h2_pair_raw_plot$setState(TRUE)

            }

        },

        .populateSensitivityTables = function(){

          if (self$options$pfi){

              pfi_res <- self$results$model$sensitivity_analysis$PFI

              table <- self$results$table_pfi

              for (i in 1:length(private$.feature_names)){

                  var_name = pfi_res$Feature[[i]]

                  table$addRow(rowKey = i)

                  table$setRow(rowNo = i, values = list(

                      var = var_name,
                      feature_importance = pfi_res$Importance[[i]],
                      std = pfi_res$StDev[[i]]

                  ))

              }

          }

        if (any(self$options$shap_mean, self$options$shap_dir, self$options$shap_box, self$options$shap_swarm)){

                shap_res <- MLwrap::table_shap_results(self$results$model)

                table <- self$results$table_shap

                for (i in 1:length(private$.feature_names)){

                    var_name = shap_res$Feature[[i]]

                    table$addRow(rowKey = i)

                    table$setRow(rowNo = i, values = list(

                        var = var_name,
                        feature_importance = shap_res$Mean_Abs_Importance[[i]],
                        std = shap_res$StDev[[i]],
                        dir_shap = shap_res$Directional_Importance[[i]]

                    ))

                }
        }

        if (self$options$olden){

            olden_imp <- self$results$model$sensitivity_analysis$Olden

            table <- self$results$table_olden

            for (i in 1:length(private$.feature_names)){

                var_name = colnames(olden_imp)[[i]]

                table$addRow(rowKey = i)

                table$setRow(rowNo = i, values = list(

                    var = var_name,
                    feature_importance = olden_imp[[var_name]]

                ))

            }

        }

        if (self$options$sobol){

            sobol_res <- MLwrap::table_sobol_jansen_results(self$results$model)

            table <- self$results$table_sobol

            for (i in 1:length(private$.feature_names)){

                table$addRow(rowKey = i)

                table$setRow(rowNo = i, values = list(

                    var = sobol_res$Feature[[i]],
                    first_order = sobol_res$`First Order (S)`[[i]],
                    first_order_std = sobol_res$`S StErr`[[i]],
                    first_order_min = sobol_res$`S Min CI`[[i]],
                    first_order_max = sobol_res$`S Max CI`[[i]],
                    total_order = sobol_res$`Total Order (T)`[[i]],
                    total_order_std = sobol_res$`T StErr`[[i]],
                    total_order_min = sobol_res$`T Min CI`[[i]],
                    total_order_max = sobol_res$`T Max CI`[[i]]

                ))

            }

        }

        },

        .populateFeatureInteractionTables = function(){

            if (self$options$h2_total){

                h2_table <- self$results$model$tables[["H^2 Total"]]

                table_res <- self$results$friedman_hstat

                for (i in 1:nrow(h2_table)){

                    table_res$addRow(rowKey = i)

                    table_res$setRow(rowNo = i, values = list(

                        Feature = h2_table$Feature[[i]],
                        H2_stat = h2_table[["H^2 Normalized"]][[i]]

                    ))

                }

            }

            if (self$options$h2_pair_norm || self$options$h2_pair_raw){

                h2_pair_norm <- self$results$model$tables[["H^2 Pairwise Normalized"]]

                h2_pair_raw <- self$results$model$tables[["H^2 Pairwise Raw"]]

                h2_joined <- h2_pair_norm |>
                    dplyr::left_join(h2_pair_raw, by = "Pairwise Interaction")

                table_res <- self$results$pairwise_hstat

                for (i in 1:nrow(h2_joined)){

                    table_res$addRow(rowKey = i)

                    table_res$setRow(rowNo = i, values = list(

                        Feature = h2_joined[["Pairwise Interaction"]][[i]],
                        H2_stat_norm = h2_joined[["H^2 Normalized"]][[i]],
                        H2_stat_raw = h2_joined[["H^2 Raw"]][[i]]

                    ))

                }

            }

        },

        .populateFunctionalDependencePlots = function(){

            if (self$options$mode2 == "pdp_mode"){

                plot_terms <- self$options$pdp_terms
                results_group <- self$results$pdp_plots

                for (i in seq_along(plot_terms)) {

                        block = plot_terms[[i]]

                        if (is.null(block) || length(block) == 0)
                            next  # skip empty blocks

                        if (length(block) == 1) {
                            feature <- block[1]
                            groupby <- NULL
                            key <- glue::glue("Partial Dependence Plot of {feature}")
                        } else if (length(block) == 2) {
                            feature <- block[1]
                            groupby <- block[2]
                            key <- glue::glue("Partial Dependence Plot of {feature} by {groupby}")
                        } else {
                            stop("Each PDP term block must contain 1 or 2 variables.")
                        }


                    img <- results_group$addItem(key = key)
                    img$setState(list(
                        feature = feature,
                        groupby = groupby
                    ))

                }
            } else {

                plot_terms <- self$options$ale_terms
                results_group <- self$results$ale_plots

                for (i in seq_along(plot_terms)) {

                    block = plot_terms[[i]]

                    if (is.null(block) || length(block) == 0)
                        next  # skip empty blocks

                    if (length(block) == 1) {
                        feature <- block[1]
                        groupby <- NULL
                        key <- glue::glue("ALE Plot of {feature}")
                    } else if (length(block) == 2) {
                        feature <- block[1]
                        groupby <- block[2]
                        key <- glue::glue("ALE Plot of {feature} by {groupby}")
                    } else {
                        stop("Each ALE term block must contain 1 or 2 variables.")
                    }


                    img <- results_group$addItem(key = key)
                    img$setState(list(
                        feature = feature,
                        groupby = groupby
                    ))

                }

            }
        },

        .populateOutputs = function() {

            # Output Predicitions

            if (self$options$predictions && self$results$predictions$isNotFilled()) {

                predictions <- private$.make_predictions()

                self$results$predictions$setRowNums(rownames(self$data))
                self$results$predictions$setValues(predictions)


            }

            if (self$options$residuals && self$results$residuals$isNotFilled()){

                predictions <- private$.make_predictions()

                residuals <- private$.dat[[self$options$dep]] - predictions

                self$results$residuals$setRowNums(rownames(self$data))
                self$results$residuals$setValues(residuals)

            }

            if (self$options$dataset_id && self$results$dataset_id$isNotFilled()){

                test_id <- self$results$model$data_id$test_data_id

                dataset_id <- rep("Train", nrow(self$data))

                dataset_id[test_id] <- "Test"

                self$results$dataset_id$setRowNums(rownames(self$data))
                self$results$dataset_id$setValues(dataset_id)


            }
        },

        ### Plots

        .plot_tuner = function(image, ...){

            plot_key <- image$state

            if (is.null(plot_key)){return(FALSE)}

            p <- self$results$model$plots[[plot_key]]

            print(p)

        },


        .plot_results = function(image, ...){

            plot_key <- image$state

            if (is.null(plot_key)){return(FALSE)}

            plot_train <- self$results$model$plots[[paste0(plot_key, "_train")]]

            plot_test <- self$results$model$plots[[paste0(plot_key, "_test")]]

            if (plot_key == "scatter_predictions"){

                p <- patchwork::wrap_plots(plot_train, plot_test, ncol = 2)

            } else {

                p <- patchwork::wrap_plots(plot_train, plot_test, nrow = 2)

            }

            print(p)

        },

        .plot_sensitivity = function(image, ...){

            plot_key <- image$state

            if (is.null(plot_key)){return(FALSE)}

            if (plot_key == "Olden_barplot"){

                olden_imp <- self$results$model$sensitivity_analysis$Olden

                    df <- data.frame(
                        variable   = colnames(olden_imp),
                        importance = as.numeric(olden_imp)
                    )


                    # Order decreasing
                    df$variable <- factor(df$variable, levels = df$variable[order(df$importance, decreasing = T)])

                    # Plot
                    p <- ggplot2::ggplot(df, ggplot2::aes(x = variable, y = importance, fill = importance > 0)) +
                        ggplot2::geom_col(show.legend = FALSE) +
                        ggplot2::geom_text(ggplot2::aes(label = round(importance, 3)),
                                           vjust = ifelse(df$importance >= 0, -0.5, 1.2)) +
                        ggplot2::scale_fill_manual(values = c("TRUE" = "steelblue", "FALSE" = "firebrick")) +
                        ggplot2::geom_hline(yintercept = 0, linetype = "dashed") +
                        ggplot2::labs(
                            title = "Olden Feature Importance",
                            x = "Feature",
                            y = "Olden Feature Importance"
                        ) +
                        ggplot2::theme_grey() +
                        ggplot2::theme(axis.text.x = ggplot2::element_text(angle = 45, hjust = 1))

            }

            else {

                p <- self$results$model$plots[[plot_key]]

                }

            print(p)

            },

        .plot_h2_total = function(image, ...){

            plot_key <- image$state

            if (is.null(plot_key)){return(FALSE)}

            p <- self$results$model$plots[["H^2 Total"]]

            print(p)

        },

        .plot_h2_pair_norm = function(image, ...){

            plot_key <- image$state

            if (is.null(plot_key)){return(FALSE)}

            p <- self$results$model$plots[["H^2 Pairwise Normalized"]]

            print(p)

        },

        .plot_h2_pair_raw = function(image, ...){

            plot_key <- image$state

            if (is.null(plot_key)){return(FALSE)}

            p <- self$results$model$plots[["H^2 Pairwise Raw"]]

            print(p)

        },

        .plot_pdp = function(image, ...){

            state <- image$state
            if (is.null(state)){return(FALSE)}

            feature <- state[[1]]
            group_by <- state[[2]]

            if (self$options$new_data_FI == "test"){

                use_test = TRUE

            } else {

                use_test = FALSE

            }


            p <- MLwrap::plot_pdp(self$results$model, feature = feature,
                                                      group_by = group_by,
                                                      show_ice = self$options$show_ice,
                                                      use_test = use_test,
                                                      plot = F)
            print(p)

        },

        .plot_ale = function(image, ...){

            state <- image$state
            if (is.null(state)){return(FALSE)}

            feature <- state[[1]]
            group_by <- state[[2]]

            if (self$options$new_data_FI == "test"){

                use_test = TRUE

            } else {

                use_test = FALSE

            }


            p <- MLwrap::plot_ale(self$results$model, feature = feature,
                                                      group = group_by,
                                                      use_test = use_test,
                                                      plot = F)
            print(p)

        },


        # Utilities

        .validate_ale_terms = function() {

            ale_terms <- self$options$ale_terms
            factors   <- self$options$factors

            # skip if empty, NULL, or NA
            if (is.null(ale_terms) || identical(ale_terms, NA))
                return()

            # Convert to data.frame if jamovi gives list(list())
            if (!is.data.frame(ale_terms)) {
                ale_terms <- as.data.frame(ale_terms, stringsAsFactors = FALSE)
            }

            if (ncol(ale_terms) == 0)
                return()

            # For each BLOCK (each column)
            for (block_i in seq_len(ncol(ale_terms))) {

                block <- ale_terms[[block_i]]

                # Clean empty values
                block <- block[!is.na(block) & block != ""]

                if (length(block) == 0)
                    next

                # FIRST variable in the block
                first_var <- block[1]

                if (first_var %in% factors) {
                    stop(sprintf(
                        "Error in ALE term %d: the first variable ('%s') must be continuous.",
                        block_i, first_var
                    ))
                }
            }
        },

        .validate_pdp_terms = function(){

            pdp_terms <- self$options$pdp_terms
            factors   <- self$options$factors

            # skip if empty, NULL, or NA
            if (is.null(pdp_terms) || identical(pdp_terms, NA))
                return()

            # Convert to data.frame if jamovi gives list(list())
            if (!is.data.frame(pdp_terms)) {
                pdp_terms <- as.data.frame(pdp_terms, stringsAsFactors = FALSE)
            }

            if (ncol(pdp_terms) == 0)
                return()

            # For each BLOCK (each column)
            for (block_i in seq_len(ncol(pdp_terms))) {

                block <- pdp_terms[[block_i]]

                # Clean empty values
                block <- block[!is.na(block) & block != ""]

                if (length(block) == 0)
                    next

                # FIRST variable in the block
                first_var <- block[1]

                if (first_var %in% factors) {
                    stop(sprintf(
                        "Error in PDP term %d: the first variable ('%s') must be continuous.",
                        block_i, first_var
                    ))
                }
            }
        },

        .checkArguments = function(){

            if (self$options$sobol){

                if (length(self$options$factors) > 0){

                    stop("Sobol-Jansen does not allow categorical variables!")

                }

            }

            if ((self$options$mode == "svm") && (self$options$kernels != "linear") &&
                any(self$options$shap_mean, self$options$shap_dir, self$options$shap_box, self$options$shap_swarm)){

                stop("SHAP values for Support Vector Machines are only implemented for the linear kernel!")

            }

            if ((self$options$mode != "neural_network") && (self$options$olden)){

                stop("Olden's method is only implemented for Neural Networks!")

            }

            # Check all stdCovs are in covs and all encCat are in factors

            missing_covs <- setdiff(self$options$stdCovs, self$options$covs)

            missing_factors <- setdiff(self$options$encCat, self$options$factors)

            if (length(missing_covs) > 0) {
                stop(sprintf("Covariate(s) %s is/are not being used. Add it to covariates or remove it from scaling.", paste(missing_covs, collapse = ", ")))
            }

            if (length(missing_factors) > 0) {
                stop(sprintf("Factor(s) %s is/are not being used. Add it to factors or remove it from factor encoding.", paste(missing_factors, collapse = ", ")))
            }

            # Check non-encoded factors are binary

            for (factor in self$options$factors){

                    x <- self$data[[factor]]

                    lev <- as.character(levels(x))

                    if ((length(levels(x))) > 2 && !(factor %in% self$options$encCat)){

                        stop("All non-binary factors should be One Hot Encoded during Preprocessing!")

                    }

                    else if ((!setequal(lev, c("0", "1"))) && !(factor %in% self$options$encCat)) {

                        stop("All binary factors should be binarized to (0,1) or One Hot Encoded during Preprocessing!")
                    }
            }

            # check pdp and ale terms

            private$.validate_ale_terms()
            private$.validate_pdp_terms()

        },

        .make_predictions = function(){

            # Extract final model, training data and recipe (transformer)

            final_model <- self$results$model$final_model

            # Make prediction

            predictions <- predict(final_model, private$.dat)

            return(predictions$.pred)

        }

    )

)

