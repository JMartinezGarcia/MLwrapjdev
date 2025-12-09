
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"run","type":"Action","title":"Run"},{"name":"seed","title":"Random Seed: ","type":"Integer","default":42},{"name":"data","type":"Data","description":{"R":"the data as a data frame"}},{"name":"dep","type":"Variable","title":"Dependent Variable","required":true,"suggested":["continuous"],"permitted":["numeric"],"description":{"R":"the dependent variable from `data`, variable must be numeric\n"}},{"name":"covs","title":"Covariates","type":"Variables","suggested":["continuous"],"permitted":["numeric"],"default":null,"description":{"R":"the covariates from `data`"}},{"name":"factors","title":"Factors","type":"Variables","rejectUnusedLevels":true,"suggested":["nominal"],"permitted":["factor"],"default":null,"description":{"R":"the fixed factors from `data`"}},{"name":"stdCovs","title":"Covariate Scaling","type":"Variables","default":null},{"name":"encCat","title":"One-Hot Encoding","type":"Variables","default":null},{"name":"mode","title":"","type":"List","options":[{"name":"neural_network","title":"Neural Network"},{"name":"random_forest","title":"Random Forest"},{"name":"xgboost","title":"XGBOOST"},{"name":"svm","title":"Support Vector Machine"}],"default":"neural_network"},{"name":"hidden_neurons_tune","type":"List","title":"Select Hyperparameters","options":[{"name":"range_neurons","title":"Range"},{"name":"fix_neurons","title":"Fixed Value"}],"default":"range_neurons"},{"name":"penalty_tune","type":"List","title":"Fix Value or Range","options":[{"name":"range_penalty","title":"Range"},{"name":"fix_penalty","title":"Fixed Value"}],"default":"range_penalty"},{"name":"fix_n_neurons","title":"Number of Hidden Neurons:","type":"Integer","default":10},{"name":"fix_penalty","title":"Penalty:  (linear scale)","type":"Number","default":0.1},{"name":"min_n_neurons","title":"Min Number of Neurons: ","type":"Integer","min":1,"max":100,"default":5,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"max_n_neurons","title":"Max Number of Neurons:","type":"Integer","min":5,"max":100,"default":20,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"min_penalty","title":"Minimum Penalty:  (log10 scale)","type":"Number","min":-5,"max":0,"default":-3,"description":{"R":"log10()\n"}},{"name":"max_penalty","title":"Maximum Penalty:  (log10 scale)","type":"Number","min":0,"max":5,"default":3,"description":{"R":"log10()\n"}},{"name":"mtry_tune","type":"List","title":"Select Hyperparameters","options":[{"name":"fix_mtry","title":"Fixed Value"},{"name":"range_mtry","title":"Range"}],"default":"range_mtry"},{"name":"trees_tune","type":"List","title":"Fix Value or Range","options":[{"name":"fix_trees","title":"Fixed Value"},{"name":"range_trees","title":"Range"}],"default":"range_trees"},{"name":"min_n_tune","type":"List","title":"Fix Value or Range","options":[{"name":"fix_min_n","title":"Fixed Value"},{"name":"range_min_n","title":"Range"}],"default":"range_min_n"},{"name":"fix_mtry","title":"Number of Randomly Selected Predictors:","type":"Integer","default":3},{"name":"fix_trees","title":"Number of Trees:","type":"Number","default":100},{"name":"fix_min_n","title":"Number of Minimal Node Size:","type":"Integer","default":20},{"name":"min_mtry","title":"Minimum Number of Randomly Selected Predictors:","type":"Integer","min":2,"max":12,"default":3,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"max_mtry","title":"Maximum Number of Random Selected Predictors:","type":"Integer","min":2,"max":12,"default":8,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"min_trees","title":"Minimum Number of Trees:","type":"Integer","min":50,"max":300,"default":100,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"max_trees","title":"Maximum Number of Trees:","type":"Integer","min":100,"max":500,"default":300,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"min_min_n","title":"Minimum Minimal Node Size:","type":"Integer","min":2,"max":150,"default":5,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"max_min_n","title":"Maximum Minimal Node Size:","type":"Integer","min":2,"max":150,"default":25,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"mtryx_tune","type":"List","title":"Select Hyperparameters","options":[{"name":"fix_mtryx","title":"Fixed Value"},{"name":"range_mtryx","title":"Range"}],"default":"range_mtryx"},{"name":"treesx_tune","type":"List","title":"Fix Value or Range","options":[{"name":"fix_treesx","title":"Fixed Value"},{"name":"range_treesx","title":"Range"}],"default":"range_treesx"},{"name":"min_nx_tune","type":"List","title":"Fix Value or Range","options":[{"name":"fix_min_nx","title":"Fixed Value"},{"name":"range_min_nx","title":"Range"}],"default":"range_min_nx"},{"name":"tree_depth_tune","type":"List","title":"Fix Value or Range","options":[{"name":"fix_tree_depth","title":"Fixed Value"},{"name":"range_tree_depth","title":"Range"}],"default":"range_tree_depth"},{"name":"learn_ratex_tune","type":"List","title":"Fix Value or Range","options":[{"name":"fix_learn_ratex","title":"Fixed Value"},{"name":"range_learn_ratex","title":"Range"}],"default":"range_learn_ratex"},{"name":"loss_reduction_tune","type":"List","title":"Fix Value or Range","options":[{"name":"fix_loss_reduction","title":"Fixed Value"},{"name":"range_loss_reduction","title":"Range"}],"default":"range_loss_reduction"},{"name":"fix_mtryx","title":"Number of Randomly Selected Predictors:","type":"Integer","default":5},{"name":"fix_treesx","title":"Number of Trees","type":"Number","default":100},{"name":"fix_min_nx","title":"Number of Minimal Node Size:","type":"Integer","default":20},{"name":"fix_tree_depth","title":"Maximum Tree Depth:","type":"Integer","default":5},{"name":"fix_learn_ratex","title":"Learning Rate:  (linear scale)","type":"Number","default":0.1},{"name":"fix_loss_reduction","title":"Loss Reduction:  (linear scale)","type":"Number","default":0.1},{"name":"min_mtryx","title":"Minimum Number of Randomly Selected Predictors:","type":"Integer","min":2,"max":12,"default":3,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"max_mtryx","title":"Maximum Number of Random Selected Predictors:","type":"Integer","min":2,"max":12,"default":8,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"min_treesx","title":"Minimum Number of Trees:","type":"Integer","min":10,"max":500,"default":100,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"max_treesx","title":"Maximum Number of Trees:","type":"Integer","min":10,"max":500,"default":300,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"min_min_nx","title":"Minimum Minimal Node Size:","type":"Integer","min":2,"max":150,"default":5,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"max_min_nx","title":"Maximum Minimal Node Size:","type":"Integer","min":2,"max":150,"default":25,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"min_tree_depth","title":"Minimum Maximal Tree Depth:","type":"Integer","min":2,"max":50,"default":3,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"max_tree_depth","title":"Maximum Maximal Tree Depth:","type":"Integer","min":2,"max":50,"default":8,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"min_learn_ratex","title":"Minimum Learning Rate:  (log10 scale)","type":"Number","min":-5,"max":-0.5,"default":-3,"description":{"R":"log10()\n"}},{"name":"max_learn_ratex","title":"Minimum Learning Rate:  (log10 scale)","type":"Number","min":-5,"max":-0.5,"default":-1,"description":{"R":"log10()\n"}},{"name":"min_loss_reduction","title":"Minimum Loss Reduction:  (log10 scale)","type":"Number","min":-5,"max":5,"default":-3,"description":{"R":"log10()\n"}},{"name":"max_loss_reduction","title":"Maximum Loss Reduction:  (log10 scale)","type":"Number","min":-5,"max":5,"default":1.5,"description":{"R":"log10()\n"}},{"name":"kernels","type":"List","title":"Select Kernel","options":[{"name":"linear","title":"Linear"},{"name":"rbf","title":"Radial Basis Function (RBF)"},{"name":"polynom¡al","title":"Polynomial"}]},{"name":"cost_tune","type":"List","title":"Select Hyperparameters","options":[{"name":"fix_cost","title":"Fixed Value"},{"name":"range_cost","title":"Range"}],"default":"range_cost"},{"name":"margin_tune","type":"List","title":"Select Hyperparameters","options":[{"name":"fix_margin","title":"Fixed Value"},{"name":"range_margin","title":"Range"}],"default":"range_margin"},{"name":"rbf_sigma_tune","type":"List","title":"Select Hyperparameters","options":[{"name":"fix_rbf_sigma","title":"Fixed Value"},{"name":"range_rbf_sigma","title":"Range"}],"default":"range_rbf_sigma"},{"name":"degree_tune","type":"List","title":"Select Hyperparameters","options":[{"name":"fix_degree","title":"Fixed Value"},{"name":"range_degree","title":"Range"}],"default":"range_degree"},{"name":"scale_factor_tune","type":"List","title":"Select Hyperparameters","options":[{"name":"fix_scale_factor","title":"Fixed Value"},{"name":"range_scale_factor","title":"Range"}],"default":"range_scale_factor"},{"name":"fix_cost","title":"Cost:  (linear scale) ","type":"Number","default":1},{"name":"fix_margin","title":"Margin: ","type":"Number","default":0.1},{"name":"fix_rbf_sigma","title":"RBF Variance:  (linear scale) ","type":"Number","default":0.01},{"name":"fix_degree","title":"Polynomial Degree: ","type":"Number","default":2},{"name":"fix_scale_factor","title":"Scale Factor:  (linear scale) ","type":"Number","default":0.1},{"name":"min_cost","title":"Minimum Cost:  (log2 scale)","type":"Number","min":-10,"max":10,"default":-3,"description":{"R":"log2()\n"}},{"name":"max_cost","title":"Maximum Cost:  (log2 scale)","type":"Number","min":-10,"max":10,"default":3,"description":{"R":"log2()\n"}},{"name":"min_margin","title":"Minimum Margin: ","type":"Number","min":0,"max":0.5,"default":0,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"max_margin","title":"Maximum Margin: ","type":"Number","min":0,"max":0.5,"default":0.2,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"min_rbf_sigma","title":"Minimum RBF variance:  (log10 scale)","type":"Number","min":-6,"max":0,"default":-5,"description":{"R":"log10()\n"}},{"name":"max_rbf_sigma","title":"Maximum RBF variance:  (log10 scale)","type":"Number","min":-6,"max":0,"default":0,"description":{"R":"log10()\n"}},{"name":"min_degree","title":"Minimum Polynomial Degree: ","type":"Integer","min":1,"max":5,"default":1,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"max_degree","title":"Maximum Polynomial Degree: ","type":"Integer","min":2,"max":5,"default":3,"description":{"R":"a number between 50 and 99.9 (default: 95) specifying the confidence interval width\n"}},{"name":"min_scale_factor","title":"Minimum Scale Factor:  (log10 scale) ","type":"Number","min":-6,"max":-1,"default":-5,"description":{"R":"log10()\n"}},{"name":"max_scale_factor","title":"Maximum Scale Factor:  (log10 scale) ","type":"Number","min":-6,"max":-1,"default":-1,"description":{"R":"log10()\n"}},{"name":"tuners","type":"List","title":"Select Tuner","options":[{"name":"none","title":"Bayesian Optimization"},{"name":"grid_search_cv","title":"Grid Search CV"}],"default":"none"},{"name":"metrics","type":"List","title":"Select Metric","options":[{"name":"rmse","title":"RMSE"},{"name":"mae","title":"MAE"},{"name":"mpe","title":"MPE"},{"name":"mape","title":"MAPE"},{"name":"smape","title":"SMAPE"},{"name":"ccc","title":"CCC"},{"name":"rpiq","title":"RPIQ"},{"name":"rsq","title":"RSQ"}],"default":"rmse"},{"name":"plot_tuner_results","title":"Plot Tuner Results","type":"Bool","default":false},{"name":"rmse","title":"RMSE","type":"Bool","default":false},{"name":"mae","title":"MAE","type":"Bool","default":false},{"name":"mpe","title":"MPE","type":"Bool","default":false},{"name":"mape","title":"MAPE","type":"Bool","default":false},{"name":"smape","title":"SMAPE","type":"Bool","default":false},{"name":"ccc","title":"CCC","type":"Bool","default":false},{"name":"rpiq","title":"RPIQ","type":"Bool","default":false},{"name":"rsq","title":"RSQ","type":"Bool","default":false},{"name":"plot_residuals_v_predictions","title":"Plot Residuals vs Predictions","type":"Bool","default":false},{"name":"plot_residuals_dist","title":"Plot Residuals Distribution","type":"Bool","default":false},{"name":"plot_observed_v_predictions","title":"Plot Observed vs Predictions","type":"Bool","default":false},{"name":"pfi","title":"Permutation Feature Importance","type":"Bool","default":false},{"name":"shap_mean","title":"Mean Absolute Value","type":"Bool","default":false},{"name":"shap_dir","title":"Directional Sensitivity","type":"Bool","default":false},{"name":"shap_box","title":"Boxplot","type":"Bool","default":false},{"name":"shap_swarm","title":"Swarmplot","type":"Bool","default":false},{"name":"olden","title":"Olden's Method","type":"Bool","default":false},{"name":"sobol","title":"Sobol-Jansen Method","type":"Bool","default":false},{"name":"show_shap","type":"Bool","hidden":true,"default":true},{"name":"show_olden","type":"Bool","hidden":true,"default":true},{"name":"show_sobol","type":"Bool","hidden":true,"default":true},{"name":"new_data_SA","type":"List","title":"Select Dataset","options":[{"name":"train","title":"Train Data"},{"name":"test","title":"Test Data"}],"default":"train"},{"name":"h2_total","title":"Friedman's H-statistic","type":"Bool","default":false},{"name":"h2_pair_norm","title":"Pairwise Normalized","type":"Bool","default":false},{"name":"h2_pair_raw","title":"Pairwise Unnormalized","type":"Bool","default":false},{"name":"mode2","title":"","type":"List","options":[{"name":"pdp_mode","title":"Partial Dependence Plot"},{"name":"ale_mode","title":"Accumulated Local Effects Plot"}],"default":"pdp_mode"},{"name":"show_ice","title":"Show ICE curves","type":"Bool","default":true},{"name":"pdp_terms","title":"Terms","type":"Array","default":[],"template":{"type":"Variables"}},{"name":"ale_terms","title":"Terms","type":"Array","default":[],"template":{"type":"Variables"}},{"name":"new_data_FI","type":"List","title":"Select Dataset","options":[{"name":"train","title":"Train Data"},{"name":"test","title":"Test Data"}],"default":"train"},{"name":"residuals","title":"Residuals","type":"Output"},{"name":"predictions","title":"Predictions","type":"Output"},{"name":"dataset_id","title":"Dataset Label","type":"Output"}];

const view = function() {
    
    this.handlers = require('./regression')

    View.extend({
        jus: "3.0",

        events: [

	]

    }).call(this);
}

view.layout = ui.extend({

    label: "Regression",
    jus: "3.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.ActionButton,
					typeName: 'ActionButton',
					name: "run"
				},
				{
					type: DefaultControls.VariableSupplier,
					typeName: 'VariableSupplier',
					persistentItems: false,
					stretchFactor: 1,
					controls: [
						{
							type: DefaultControls.TargetLayoutBox,
							typeName: 'TargetLayoutBox',
							label: "Dependent Variable",
							controls: [
								{
									type: DefaultControls.VariablesListBox,
									typeName: 'VariablesListBox',
									name: "dep",
									maxItemCount: 1,
									isTarget: true
								}
							]
						},
						{
							type: DefaultControls.TargetLayoutBox,
							typeName: 'TargetLayoutBox',
							label: "Covariates",
							controls: [
								{
									type: DefaultControls.VariablesListBox,
									typeName: 'VariablesListBox',
									name: "covs",
									isTarget: true
								}
							]
						},
						{
							type: DefaultControls.TargetLayoutBox,
							typeName: 'TargetLayoutBox',
							label: "Factors",
							controls: [
								{
									type: DefaultControls.VariablesListBox,
									typeName: 'VariablesListBox',
									name: "factors",
									isTarget: true
								}
							]
						},
						{
							type: DefaultControls.TextBox,
							typeName: 'TextBox',
							name: "seed",
							format: FormatDef.number
						}
					]
				},
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					collapsed: true,
					label: "Preprocessing",
					style: "list",
					controls: [
						{
							type: DefaultControls.Supplier,
							typeName: 'Supplier',
							name: "covsSupplier",
							label: "Components",
							persistentItems: false,
							stretchFactor: 1,
							format: FormatDef.variables,
							controls: [
								{
									type: DefaultControls.TargetLayoutBox,
									typeName: 'TargetLayoutBox',
									controls: [
										{
											type: DefaultControls.ListBox,
											typeName: 'ListBox',
											name: "stdCovs",
											valueFilter: "unique",
											isTarget: true,
											itemDropBehaviour: "emptyspace",
											template:
											{
												type: DefaultControls.VariableLabel,
												typeName: 'VariableLabel'
											}											
										}
									]
								}
							]
						},
						{
							type: DefaultControls.Supplier,
							typeName: 'Supplier',
							name: "factorsSupplier",
							label: "Components",
							persistentItems: false,
							stretchFactor: 1,
							format: FormatDef.variables,
							controls: [
								{
									type: DefaultControls.TargetLayoutBox,
									typeName: 'TargetLayoutBox',
									controls: [
										{
											type: DefaultControls.ListBox,
											typeName: 'ListBox',
											name: "encCat",
											valueFilter: "unique",
											isTarget: true,
											itemDropBehaviour: "emptyspace",
											template:
											{
												type: DefaultControls.VariableLabel,
												typeName: 'VariableLabel'
											}											
										}
									]
								}
							]
						}
					]
				},
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					collapsed: true,
					label: "Model Selection",
					style: "list",
					controls: [
						{
							type: DefaultControls.ModeSelector,
							typeName: 'ModeSelector',
							name: "mode",
							stretchFactor: 1,
							controls: [
								{
									type: DefaultControls.Content,
									typeName: 'Content',
									name: "neural_network",
									controls: [
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b>Hidden Neurons</b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											style: "list",
											margin: "large",
											controls: [
												{
													name: "hidden_neurons_tune_fix_neurons",
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													optionName: "hidden_neurons_tune",
													optionPart: "fix_neurons",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															margin: "large",
															controls: [
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "fix_n_neurons",
																	format: FormatDef.number
																}
															]
														}
													]
												},
												{
													name: "hidden_neurons_tune_range_neurons",
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													optionName: "hidden_neurons_tune",
													optionPart: "range_neurons",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															margin: "large",
															controls: [
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "min_n_neurons",
																	format: FormatDef.number
																},
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "max_n_neurons",
																	format: FormatDef.number
																}
															]
														}
													]
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b>Penalty</b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											style: "list",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "penalty_fix",
													optionName: "penalty_tune",
													optionPart: "fix_penalty",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "fix_penalty",
															format: FormatDef.number
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "penalty_range",
													optionName: "penalty_tune",
													optionPart: "range_penalty",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "min_penalty",
															format: FormatDef.number
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "max_penalty",
															format: FormatDef.number
														}
													]
												}
											]
										}
									]
								},
								{
									type: DefaultControls.Content,
									typeName: 'Content',
									name: "random_forest",
									controls: [
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b> Number of Randomly Selected Predictors </b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "mtry_fix",
													optionName: "mtry_tune",
													optionPart: "fix_mtry",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "fix_mtry",
															format: FormatDef.number
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "mtry_range",
													optionName: "mtry_tune",
													optionPart: "range_mtry",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "min_mtry",
															format: FormatDef.number
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "max_mtry",
															format: FormatDef.number
														}
													]
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b> Number of Trees </b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "trees_fix",
													optionName: "trees_tune",
													optionPart: "fix_trees",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															margin: "large",
															controls: [
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "fix_trees",
																	format: FormatDef.number
																}
															]
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "trees_range",
													optionName: "trees_tune",
													optionPart: "range_trees",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															margin: "large",
															controls: [
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "min_trees",
																	format: FormatDef.number
																},
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "max_trees",
																	format: FormatDef.number
																}
															]
														}
													]
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b> Minimal Node Size </b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "min_n_fix",
													optionName: "min_n_tune",
													optionPart: "fix_min_n",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															margin: "large",
															controls: [
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "fix_min_n",
																	format: FormatDef.number
																}
															]
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "min_n_range",
													optionName: "min_n_tune",
													optionPart: "range_min_n",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															margin: "large",
															controls: [
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "min_min_n",
																	format: FormatDef.number
																},
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "max_min_n",
																	format: FormatDef.number
																}
															]
														}
													]
												}
											]
										}
									]
								},
								{
									type: DefaultControls.Content,
									typeName: 'Content',
									name: "xgboost",
									controls: [
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b> Number of Randomly Selected Predictors </b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "mtryx_fix",
													optionName: "mtryx_tune",
													optionPart: "fix_mtryx",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "fix_mtryx",
															format: FormatDef.number
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "mtryx_range",
													optionName: "mtryx_tune",
													optionPart: "range_mtryx",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "min_mtryx",
															format: FormatDef.number
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "max_mtryx",
															format: FormatDef.number
														}
													]
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b> Number of Trees </b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "treesx_fix",
													optionName: "treesx_tune",
													optionPart: "fix_treesx",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															margin: "large",
															controls: [
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "fix_treesx",
																	format: FormatDef.number
																}
															]
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "treesx_range",
													optionName: "treesx_tune",
													optionPart: "range_treesx",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															margin: "large",
															controls: [
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "min_treesx",
																	format: FormatDef.number
																},
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "max_treesx",
																	format: FormatDef.number
																}
															]
														}
													]
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b> Minimal Node Size </b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "min_nx_fix",
													optionName: "min_nx_tune",
													optionPart: "fix_min_nx",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															margin: "large",
															controls: [
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "fix_min_nx",
																	format: FormatDef.number
																}
															]
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "min_nx_range",
													optionName: "min_nx_tune",
													optionPart: "range_min_nx",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															margin: "large",
															controls: [
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "min_min_nx",
																	format: FormatDef.number
																},
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "max_min_nx",
																	format: FormatDef.number
																}
															]
														}
													]
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b> Maximal Tree Depth </b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "tree_depth_fix",
													optionName: "tree_depth_tune",
													optionPart: "fix_tree_depth",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															margin: "large",
															controls: [
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "fix_tree_depth",
																	format: FormatDef.number
																}
															]
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "tree_depth_range",
													optionName: "tree_depth_tune",
													optionPart: "range_tree_depth",
													controls: [
														{
															type: DefaultControls.LayoutBox,
															typeName: 'LayoutBox',
															margin: "large",
															controls: [
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "min_tree_depth",
																	format: FormatDef.number
																},
																{
																	type: DefaultControls.TextBox,
																	typeName: 'TextBox',
																	name: "max_tree_depth",
																	format: FormatDef.number
																}
															]
														}
													]
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b>Learning Rate</b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "learn_ratex_fix",
													optionName: "learn_ratex_tune",
													optionPart: "fix_learn_ratex",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "fix_learn_ratex",
															format: FormatDef.number
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "learn_ratex_range",
													optionName: "learn_ratex_tune",
													optionPart: "range_learn_ratex",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "min_learn_ratex",
															format: FormatDef.number
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "max_learn_ratex",
															format: FormatDef.number
														}
													]
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b>Loss Reduction</b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "loss_reduction_fix",
													optionName: "loss_reduction_tune",
													optionPart: "fix_loss_reduction",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "fix_loss_reduction",
															format: FormatDef.number
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "loss_reduction_range",
													optionName: "loss_reduction_tune",
													optionPart: "range_loss_reduction",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "min_loss_reduction",
															format: FormatDef.number
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "max_loss_reduction",
															format: FormatDef.number
														}
													]
												}
											]
										}
									]
								},
								{
									type: DefaultControls.Content,
									typeName: 'Content',
									name: "svm",
									controls: [
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b> Kernel </b>"
												},
												{
													type: DefaultControls.LayoutBox,
													typeName: 'LayoutBox',
													margin: "large",
													controls: [
														{
															type: DefaultControls.ComboBox,
															typeName: 'ComboBox',
															name: "kernels"
														}
													]
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b> Cost </b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "cost_fix",
													optionName: "cost_tune",
													optionPart: "fix_cost",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "fix_cost",
															format: FormatDef.number
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "cost_range",
													optionName: "cost_tune",
													optionPart: "range_cost",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "min_cost",
															format: FormatDef.number
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "max_cost",
															format: FormatDef.number
														}
													]
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b> Margin </b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "margin_fix",
													optionName: "margin_tune",
													optionPart: "fix_margin",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "fix_margin",
															format: FormatDef.number
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "margin_range",
													optionName: "margin_tune",
													optionPart: "range_margin",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "min_margin",
															format: FormatDef.number
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "max_margin",
															format: FormatDef.number
														}
													]
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b> RBF Variance (RBF Kernel Only) </b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "rbf_sigma_fix",
													optionName: "rbf_sigma_tune",
													optionPart: "fix_rbf_sigma",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "fix_rbf_sigma",
															format: FormatDef.number
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "rbf_sigma_range",
													optionName: "rbf_sigma_tune",
													optionPart: "range_rbf_sigma",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "min_rbf_sigma",
															format: FormatDef.number
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "max_rbf_sigma",
															format: FormatDef.number
														}
													]
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b> Polynomial Degree (Polynomial Kernel Only) </b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "degree_fix",
													optionName: "degree_tune",
													optionPart: "fix_degree",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "fix_degree",
															format: FormatDef.number
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "degree_range",
													optionName: "degree_tune",
													optionPart: "range_degree",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "min_degree",
															format: FormatDef.number
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "max_degree",
															format: FormatDef.number
														}
													]
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.Label,
													typeName: 'Label',
													label: "<b> Scale Factor (Polynomial Kernel Only) </b>"
												}
											]
										},
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											controls: [
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "scale_factor_fix",
													optionName: "scale_factor_tune",
													optionPart: "fix_scale_factor",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "fix_scale_factor",
															format: FormatDef.number
														}
													]
												},
												{
													type: DefaultControls.RadioButton,
													typeName: 'RadioButton',
													name: "scale_factor_range",
													optionName: "scale_factor_tune",
													optionPart: "range_scale_factor",
													controls: [
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "min_scale_factor",
															format: FormatDef.number
														},
														{
															type: DefaultControls.TextBox,
															typeName: 'TextBox',
															name: "max_scale_factor",
															format: FormatDef.number
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					collapsed: true,
					label: "Hyperparameter Optimization",
					style: "list",
					controls: [
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							margin: "large",
							controls: [
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "tuners"
								}
							]
						},
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							margin: "large",
							controls: [
								{
									type: DefaultControls.ComboBox,
									typeName: 'ComboBox',
									name: "metrics"
								}
							]
						},
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							margin: "large",
							controls: [
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "plot_tuner_results"
								}
							]
						}
					]
				},
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					collapsed: true,
					label: "Evaluation Results",
					style: "inline",
					stretchFactor: 1,
					controls: [
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							margin: "large",
							controls: [
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "<b> Summary Metrics </b>"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "rmse"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "mae"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "mpe"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "mape"
								}
							]
						},
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							margin: "large",
							controls: [
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "&nbsp;"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "smape"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "ccc"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "rpiq"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "rsq"
								}
							]
						},
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							margin: "large",
							controls: [
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "<b> Summary Plots </b>"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "plot_residuals_dist"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "plot_residuals_v_predictions"
								},
								{
									type: DefaultControls.CheckBox,
									typeName: 'CheckBox',
									name: "plot_observed_v_predictions"
								}
							]
						}
					]
				},
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					collapsed: true,
					label: "Sensitivity Analysis",
					style: "list",
					stretchFactor: 1,
					controls: [
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							style: "list",
							margin: "large",
							controls: [
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "<b> Select Dataset </b>"
								},
								{
									type: DefaultControls.RadioButton,
									typeName: 'RadioButton',
									name: "data_label_SA",
									optionName: "new_data_SA",
									optionPart: "train"
								},
								{
									name: "new_data_SA_test",
									type: DefaultControls.RadioButton,
									typeName: 'RadioButton',
									optionName: "new_data_SA",
									optionPart: "test"
								}
							]
						},
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							style: "list",
							margin: "large",
							controls: [
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "<b> Feature Importance </b>"
								}
							]
						},
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							margin: "large",
							controls: [
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "Permutation Feature Importance"
								},
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									style: "list",
									margin: "large",
									controls: [
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "pfi"
										}
									]
								},
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "SHAP Values"
								},
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									style: "inline",
									margin: "large",
									controls: [
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "shap_mean",
											enable: "(show_shap)"
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "shap_dir",
											enable: "(show_shap)"
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "shap_box",
											enable: "(show_shap)"
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "shap_swarm",
											enable: "(show_shap)"
										}
									]
								},
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "Olden's Method &nbsp; &nbsp; &nbsp;"
								},
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									style: "list",
									margin: "large",
									controls: [
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "olden",
											enable: "(show_olden)"
										}
									]
								},
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "Sobol-Jansen Method"
								},
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									style: "list",
									margin: "large",
									controls: [
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "sobol",
											enable: "(show_sobol)"
										}
									]
								}
							]
						},
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							style: "list",
							margin: "large",
							controls: [
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "<b> Feature Interaction </b>"
								}
							]
						},
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							style: "list",
							margin: "large",
							controls: [
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "Friedman's H-statistic"
								},
								{
									type: DefaultControls.LayoutBox,
									typeName: 'LayoutBox',
									style: "inline",
									margin: "large",
									controls: [
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "h2_total"
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "h2_pair_norm"
										},
										{
											type: DefaultControls.CheckBox,
											typeName: 'CheckBox',
											name: "h2_pair_raw"
										}
									]
								}
							]
						}
					]
				},
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					collapsed: true,
					label: "Functional Dependence Plots",
					style: "list",
					stretchFactor: 1,
					controls: [
						{
							type: DefaultControls.LayoutBox,
							typeName: 'LayoutBox',
							style: "list",
							margin: "large",
							controls: [
								{
									type: DefaultControls.Label,
									typeName: 'Label',
									label: "<b> Select Dataset </b>"
								},
								{
									type: DefaultControls.RadioButton,
									typeName: 'RadioButton',
									name: "data_label_FI",
									optionName: "new_data_FI",
									optionPart: "train"
								},
								{
									name: "new_data_FI_test",
									type: DefaultControls.RadioButton,
									typeName: 'RadioButton',
									optionName: "new_data_FI",
									optionPart: "test"
								}
							]
						},
						{
							type: DefaultControls.ModeSelector,
							typeName: 'ModeSelector',
							name: "mode2",
							stretchFactor: 1,
							controls: [
								{
									type: DefaultControls.Content,
									typeName: 'Content',
									name: "pdp_mode",
									controls: [
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											stretchFactor: 1,
											controls: [
												{
													type: DefaultControls.VariableSupplier,
													typeName: 'VariableSupplier',
													name: "PDPSupplier",
													label: "Features",
													populate: "manual",
													stretchFactor: 1,
													persistentItems: true,
													events: [
														{ onEvent: 'update', execute: require('./regression').onUpdate_PDPSupplier }
													],
													controls: [
														{
															type: DefaultControls.TargetLayoutBox,
															typeName: 'TargetLayoutBox',
															stretchFactor: 1,
															controls: [
																{
																	type: DefaultControls.ListBox,
																	typeName: 'ListBox',
																	name: "pdp_terms",
																	height: "large",
																	addButton: "Add New Plot",
																	selectable: true,
																	events: [
																		{ onEvent: 'listItemAdded', execute: require('./regression').onChange_pdp_terms },
																		{ onEvent: 'listItemRemoved', execute: require('./regression').onChange_pdp_terms },
																		{ execute: require('./regression').onChange_pdp_terms }
																	],
																	template:
																	{
																		type: DefaultControls.LayoutBox,
																		typeName: 'LayoutBox',
																		margin: "normal",
																		targetArea: true,
																		controls: [
																			{
																				type: DefaultControls.VariablesListBox,
																				typeName: 'VariablesListBox',
																				name: "pdpList",
																				isTarget: true,
																				valueFilter: "unique",
																				height: "auto",
																				ghostText: "drag variables here"
																			}
																		]
																	}																	
																}
															]
														}
													]
												},
												{
													type: DefaultControls.CheckBox,
													typeName: 'CheckBox',
													name: "show_ice"
												}
											]
										}
									]
								},
								{
									type: DefaultControls.Content,
									typeName: 'Content',
									name: "ale_mode",
									controls: [
										{
											type: DefaultControls.LayoutBox,
											typeName: 'LayoutBox',
											margin: "large",
											stretchFactor: 1,
											controls: [
												{
													type: DefaultControls.VariableSupplier,
													typeName: 'VariableSupplier',
													name: "ALESupplier",
													populate: "manual",
													label: "Features",
													stretchFactor: 1,
													persistentItems: true,
													events: [
														{ onEvent: 'update', execute: require('./regression').onUpdate_ALESupplier }
													],
													controls: [
														{
															type: DefaultControls.TargetLayoutBox,
															typeName: 'TargetLayoutBox',
															stretchFactor: 1,
															controls: [
																{
																	type: DefaultControls.ListBox,
																	typeName: 'ListBox',
																	name: "ale_terms",
																	height: "large",
																	addButton: "Add New Plot",
																	selectable: true,
																	events: [
																		{ onEvent: 'listItemAdded', execute: require('./regression').onChange_ale_terms },
																		{ onEvent: 'listItemRemoved', execute: require('./regression').onChange_ale_terms },
																		{ execute: require('./regression').onChange_ale_terms }
																	],
																	template:
																	{
																		type: DefaultControls.LayoutBox,
																		typeName: 'LayoutBox',
																		margin: "normal",
																		targetArea: true,
																		controls: [
																			{
																				type: DefaultControls.VariablesListBox,
																				typeName: 'VariablesListBox',
																				name: "aleList",
																				isTarget: true,
																				valueFilter: "unique",
																				height: "auto",
																				ghostText: "drag variables here"
																			}
																		]
																	}																	
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				{
					type: DefaultControls.CollapseBox,
					typeName: 'CollapseBox',
					collapsed: true,
					label: "Save",
					style: "list",
					stretchFactor: 1,
					controls: [
						{
							type: DefaultControls.Output,
							typeName: 'Output',
							name: "residuals"
						},
						{
							type: DefaultControls.Output,
							typeName: 'Output',
							name: "predictions"
						},
						{
							type: DefaultControls.Output,
							typeName: 'Output',
							name: "dataset_id"
						}
					]
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
