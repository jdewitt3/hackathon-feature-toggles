const businessEntityConfiguration = {
	meta: {
		status_code: 200,
		code: 200,
		statusCode: 200,
	},
	result: {
		warnings: null,
		errors: null,
		pagination: null,
		payload: [{
			uuid: '89947c81-ed14-48d8-b91f-be76ebf6eacc',
			createdOn: null,
			updatedOn: null,
			deletedOn: null,
			businessEntity: {
				uuid: 'c598d91a-dacc-4b61-87a0-0be9a9231b63',
				createdOn: null,
				updatedOn: null,
				deletedOn: null,
				name: 'Task',
				coreEntity: {
					uuid: 'fabe2338-2ff8-4d79-b6bd-2d3af4da287e',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					name: 'Task',
					implementation: 'com.workmarket.api.v3.module.CoreEntityTask',
					actions: [],
				},
				actions: [],
			},
			fields: [{
				uuid: '2b494d71-df55-4832-bd2e-eaea2cc8a059',
				createdOn: null,
				updatedOn: null,
				deletedOn: null,
				name: 'sequence',
				displayName: 'ID',
				description: 'Primary ID of a task',
				customFieldType: {
					uuid: 'd1e9a4f4-3cde-461a-917a-a17d22cd1daa',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					name: 'sequence',
					coreValidators: [],
					formatter: {
						uuid: 'c4dc9d0f-af46-4989-86ab-df21deb477df',
						createdOn: null,
						updatedOn: null,
						deletedOn: null,
						description: 'Default String Formatter',
						worktronFunctionType: 'FORMAT',
						type: 'String',
						name: 'format',
						args: '%s',
						implementation: null,
					},
					autoCompleteTarget: null,
				},
				validators: [{
					uuid: 'bf8c85a2-fa92-4239-9b07-b37ba7cf5ce6',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					description: 'This field is required',
					worktronFunctionType: 'VALIDATE',
					type: 'String',
					name: 'notEmpty',
					args: null,
					implementation: null,
				}],
				options: null,
				defaults: null,
				formatter: {
					uuid: 'c4dc9d0f-af46-4989-86ab-df21deb477df',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					description: 'Default String Formatter',
					worktronFunctionType: 'FORMAT',
					type: 'String',
					name: 'format',
					args: '%s',
					implementation: null,
				},
				autoCompleteTarget: null,
			}, {
				uuid: '98254402-6a4e-4247-a5c6-de8bad04d9b2',
				createdOn: null,
				updatedOn: null,
				deletedOn: null,
				name: 'title',
				displayName: 'Title',
				description: 'Title of a task',
				customFieldType: {
					uuid: '44f6306a-a787-4b19-b35d-58a5fee716e8',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					name: 'string',
					coreValidators: [],
					formatter: {
						uuid: 'c4dc9d0f-af46-4989-86ab-df21deb477df',
						createdOn: null,
						updatedOn: null,
						deletedOn: null,
						description: 'Default String Formatter',
						worktronFunctionType: 'FORMAT',
						type: 'String',
						name: 'format',
						args: '%s',
						implementation: null,
					},
					autoCompleteTarget: null,
				},
				validators: [{
					uuid: 'bf8c85a2-fa92-4239-9b07-b37ba7cf5ce6',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					description: 'This field is required',
					worktronFunctionType: 'VALIDATE',
					type: 'String',
					name: 'notEmpty',
					args: null,
					implementation: null,
				}],
				options: null,
				defaults: null,
				formatter: {
					uuid: 'c4dc9d0f-af46-4989-86ab-df21deb477df',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					description: 'Default String Formatter',
					worktronFunctionType: 'FORMAT',
					type: 'String',
					name: 'format',
					args: '%s',
					implementation: null,
				},
				autoCompleteTarget: null,
			}, {
				uuid: '6aceec14-8d60-47db-b037-dca51eb9a479',
				createdOn: null,
				updatedOn: null,
				deletedOn: null,
				name: 'description',
				displayName: 'Description',
				description: 'Description of a task',
				customFieldType: {
					uuid: '44f6306a-a787-4b19-b35d-58a5fee716e8',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					name: 'string',
					coreValidators: [],
					formatter: {
						uuid: 'c4dc9d0f-af46-4989-86ab-df21deb477df',
						createdOn: null,
						updatedOn: null,
						deletedOn: null,
						description: 'Default String Formatter',
						worktronFunctionType: 'FORMAT',
						type: 'String',
						name: 'format',
						args: '%s',
						implementation: null,
					},
					autoCompleteTarget: null,
				},
				validators: [],
				options: null,
				defaults: null,
				formatter: {
					uuid: 'c4dc9d0f-af46-4989-86ab-df21deb477df',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					description: 'Default String Formatter',
					worktronFunctionType: 'FORMAT',
					type: 'String',
					name: 'format',
					args: '%s',
					implementation: null,
				},
				autoCompleteTarget: null,
			}],
			flow: {
				uuid: '4548037f-3267-4faf-ae9a-42226c152ff8',
				createdOn: null,
				updatedOn: null,
				deletedOn: null,
				name: 'Default Task Flow',
				flowStatuses: [{
					uuid: 'f7091bd3-e68c-4e31-b642-c4e30a1f1078',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					name: 'Draft',
					workflowStatusType: 'TODO',
					flowStatusTransitions: [{
						uuid: '576f5e61-0255-4fda-87ca-3a5eb7452d3d',
						createdOn: null,
						updatedOn: null,
						deletedOn: null,
						name: 'Cancel',
						fromFlowStatusUuid: 'f7091bd3-e68c-4e31-b642-c4e30a1f1078',
						toFlowStatusUuid: '71f5646e-f96b-4d92-8b36-2a0e6bcbff0e',
						screenConfigurationUuid: 'ada825a4-f54b-408e-8495-f861520457e5',
						screenConfiguration: {
							uuid: 'ada825a4-f54b-408e-8495-f861520457e5',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							name: 'Default Task Screen Configuration',
							screen: {
								uuid: 'b8c28b1d-9089-4bf5-a910-2cbd43c591f6',
								createdOn: null,
								updatedOn: null,
								deletedOn: null,
								name: 'Default Task Screen',
							},
							fieldConfigurationUuids: ['2b494d71-df55-4832-bd2e-eaea2cc8a059', '98254402-6a4e-4247-a5c6-de8bad04d9b2', '6aceec14-8d60-47db-b037-dca51eb9a479'],
						},
						availabilityValidatorUuids: ['ee65d9b5-f034-4ff7-b5f1-d179f4a93418'],
						availabilityValidators: [{
							uuid: 'ee65d9b5-f034-4ff7-b5f1-d179f4a93418',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							description: 'Acting user must be a Buyer',
							worktronFunctionType: 'VALIDATE',
							type: 'User',
							name: 'buyer',
							args: null,
							implementation: null,
						}],
						transitionValidatorUuids: [],
						transitionValidators: [],
						actionUuids: ['016f2daa-e392-4008-809e-9edde4e5e723'],
						actions: [{
							uuid: '016f2daa-e392-4008-809e-9edde4e5e723',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							description: 'Updates the Flow Status of a Business Entity',
							worktronFunctionType: 'WRITE',
							type: 'Task',
							name: 'updateStatus',
							args: null,
							implementation: null,
							availabilityValidator: {
								uuid: 'cd538820-29cc-4ce2-b5ea-da3c8fea0a59',
								createdOn: null,
								updatedOn: null,
								deletedOn: null,
								description: 'Always Allowed',
								worktronFunctionType: 'VALIDATE',
								type: 'Boolean',
								name: 'valueOf',
								args: 'true',
								implementation: null,
							},
							executionValidator: {
								uuid: 'cd538820-29cc-4ce2-b5ea-da3c8fea0a59',
								createdOn: null,
								updatedOn: null,
								deletedOn: null,
								description: 'Always Allowed',
								worktronFunctionType: 'VALIDATE',
								type: 'Boolean',
								name: 'valueOf',
								args: 'true',
								implementation: null,
							},
						}],
						hookUuids: [],
						hooks: [],
					}, {
						uuid: '450c1556-bed9-46cb-a018-9fcf7f095cd1',
						createdOn: null,
						updatedOn: null,
						deletedOn: null,
						name: 'Route',
						fromFlowStatusUuid: 'f7091bd3-e68c-4e31-b642-c4e30a1f1078',
						toFlowStatusUuid: '148368cc-b94e-476e-90e8-9c027ef07f14',
						screenConfigurationUuid: 'ada825a4-f54b-408e-8495-f861520457e5',
						screenConfiguration: {
							uuid: 'ada825a4-f54b-408e-8495-f861520457e5',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							name: 'Default Task Screen Configuration',
							screen: {
								uuid: 'b8c28b1d-9089-4bf5-a910-2cbd43c591f6',
								createdOn: null,
								updatedOn: null,
								deletedOn: null,
								name: 'Default Task Screen',
							},
							fieldConfigurationUuids: ['2b494d71-df55-4832-bd2e-eaea2cc8a059', '98254402-6a4e-4247-a5c6-de8bad04d9b2', '6aceec14-8d60-47db-b037-dca51eb9a479'],
						},
						availabilityValidatorUuids: ['ee65d9b5-f034-4ff7-b5f1-d179f4a93418'],
						availabilityValidators: [{
							uuid: 'ee65d9b5-f034-4ff7-b5f1-d179f4a93418',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							description: 'Acting user must be a Buyer',
							worktronFunctionType: 'VALIDATE',
							type: 'User',
							name: 'buyer',
							args: null,
							implementation: null,
						}],
						transitionValidatorUuids: ['8ac0fa7c-b9f9-4c27-b086-eebcc22faf4f'],
						transitionValidators: [{
							uuid: '8ac0fa7c-b9f9-4c27-b086-eebcc22faf4f',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							description: 'Validates each field in an entity',
							worktronFunctionType: 'VALIDATE',
							type: 'WorktronValidation',
							name: 'entity',
							args: null,
							implementation: null,
						}],
						actionUuids: ['016f2daa-e392-4008-809e-9edde4e5e723'],
						actions: [{
							uuid: '016f2daa-e392-4008-809e-9edde4e5e723',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							description: 'Updates the Flow Status of a Business Entity',
							worktronFunctionType: 'WRITE',
							type: 'Task',
							name: 'updateStatus',
							args: null,
							implementation: null,
							availabilityValidator: {
								uuid: 'cd538820-29cc-4ce2-b5ea-da3c8fea0a59',
								createdOn: null,
								updatedOn: null,
								deletedOn: null,
								description: 'Always Allowed',
								worktronFunctionType: 'VALIDATE',
								type: 'Boolean',
								name: 'valueOf',
								args: 'true',
								implementation: null,
							},
							executionValidator: {
								uuid: 'cd538820-29cc-4ce2-b5ea-da3c8fea0a59',
								createdOn: null,
								updatedOn: null,
								deletedOn: null,
								description: 'Always Allowed',
								worktronFunctionType: 'VALIDATE',
								type: 'Boolean',
								name: 'valueOf',
								args: 'true',
								implementation: null,
							},
						}],
						hookUuids: [],
						hooks: [],
					}],
				}, {
					uuid: '148368cc-b94e-476e-90e8-9c027ef07f14',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					name: 'Sent',
					workflowStatusType: 'IN_PROGRESS',
					flowStatusTransitions: [{
						uuid: '3186b881-19e8-435c-a7aa-d4c31d321c13',
						createdOn: null,
						updatedOn: null,
						deletedOn: null,
						name: 'Accept',
						fromFlowStatusUuid: 'f7091bd3-e68c-4e31-b642-c4e30a1f1078',
						toFlowStatusUuid: '148368cc-b94e-476e-90e8-9c027ef07f14',
						screenConfigurationUuid: 'ada825a4-f54b-408e-8495-f861520457e5',
						screenConfiguration: {
							uuid: 'ada825a4-f54b-408e-8495-f861520457e5',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							name: 'Default Task Screen Configuration',
							screen: {
								uuid: 'b8c28b1d-9089-4bf5-a910-2cbd43c591f6',
								createdOn: null,
								updatedOn: null,
								deletedOn: null,
								name: 'Default Task Screen',
							},
							fieldConfigurationUuids: ['2b494d71-df55-4832-bd2e-eaea2cc8a059', '98254402-6a4e-4247-a5c6-de8bad04d9b2', '6aceec14-8d60-47db-b037-dca51eb9a479'],
						},
						availabilityValidatorUuids: ['992ae740-f065-480d-8ca8-145b7a38436c'],
						availabilityValidators: [{
							uuid: '992ae740-f065-480d-8ca8-145b7a38436c',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							description: 'Acting user must be a Worker',
							worktronFunctionType: 'VALIDATE',
							type: 'User',
							name: 'worker',
							args: null,
							implementation: null,
						}],
						transitionValidatorUuids: ['b9d1f901-b3a6-48ab-a08b-3348b3686135'],
						transitionValidators: [{
							uuid: 'b9d1f901-b3a6-48ab-a08b-3348b3686135',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							description: 'Acting user must have the given qualification',
							worktronFunctionType: 'VALIDATE',
							type: 'User',
							name: 'hasQualification',
							args: null,
							implementation: null,
						}],
						actionUuids: ['016f2daa-e392-4008-809e-9edde4e5e723'],
						actions: [{
							uuid: '016f2daa-e392-4008-809e-9edde4e5e723',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							description: 'Updates the Flow Status of a Business Entity',
							worktronFunctionType: 'WRITE',
							type: 'Task',
							name: 'updateStatus',
							args: null,
							implementation: null,
							availabilityValidator: {
								uuid: 'cd538820-29cc-4ce2-b5ea-da3c8fea0a59',
								createdOn: null,
								updatedOn: null,
								deletedOn: null,
								description: 'Always Allowed',
								worktronFunctionType: 'VALIDATE',
								type: 'Boolean',
								name: 'valueOf',
								args: 'true',
								implementation: null,
							},
							executionValidator: {
								uuid: 'cd538820-29cc-4ce2-b5ea-da3c8fea0a59',
								createdOn: null,
								updatedOn: null,
								deletedOn: null,
								description: 'Always Allowed',
								worktronFunctionType: 'VALIDATE',
								type: 'Boolean',
								name: 'valueOf',
								args: 'true',
								implementation: null,
							},
						}],
						hookUuids: [],
						hooks: [],
					}],
				}, {
					uuid: '5a083df7-57f2-46ae-bf75-a8c5288070a1',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					name: 'Active',
					workflowStatusType: 'IN_PROGRESS',
					flowStatusTransitions: [{
						uuid: 'a89beedf-e1fd-443d-bf29-429ae2776f80',
						createdOn: null,
						updatedOn: null,
						deletedOn: null,
						name: 'Complete',
						fromFlowStatusUuid: 'f7091bd3-e68c-4e31-b642-c4e30a1f1078',
						toFlowStatusUuid: '148368cc-b94e-476e-90e8-9c027ef07f14',
						screenConfigurationUuid: 'ada825a4-f54b-408e-8495-f861520457e5',
						screenConfiguration: {
							uuid: 'ada825a4-f54b-408e-8495-f861520457e5',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							name: 'Default Task Screen Configuration',
							screen: {
								uuid: 'b8c28b1d-9089-4bf5-a910-2cbd43c591f6',
								createdOn: null,
								updatedOn: null,
								deletedOn: null,
								name: 'Default Task Screen',
							},
							fieldConfigurationUuids: ['2b494d71-df55-4832-bd2e-eaea2cc8a059', '98254402-6a4e-4247-a5c6-de8bad04d9b2', '6aceec14-8d60-47db-b037-dca51eb9a479'],
						},
						availabilityValidatorUuids: ['992ae740-f065-480d-8ca8-145b7a38436c'],
						availabilityValidators: [{
							uuid: '992ae740-f065-480d-8ca8-145b7a38436c',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							description: 'Acting user must be a Worker',
							worktronFunctionType: 'VALIDATE',
							type: 'User',
							name: 'worker',
							args: null,
							implementation: null,
						}],
						transitionValidatorUuids: ['baae392f-26f1-44c2-a9f4-27ff9e682636'],
						transitionValidators: [{
							uuid: 'baae392f-26f1-44c2-a9f4-27ff9e682636',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							description: 'Acting user must have the given qualification',
							worktronFunctionType: 'VALIDATE',
							type: 'Deliverable',
							name: 'isComplete',
							args: null,
							implementation: null,
						}],
						actionUuids: ['016f2daa-e392-4008-809e-9edde4e5e723'],
						actions: [{
							uuid: '016f2daa-e392-4008-809e-9edde4e5e723',
							createdOn: null,
							updatedOn: null,
							deletedOn: null,
							description: 'Updates the Flow Status of a Business Entity',
							worktronFunctionType: 'WRITE',
							type: 'Task',
							name: 'updateStatus',
							args: null,
							implementation: null,
							availabilityValidator: {
								uuid: 'cd538820-29cc-4ce2-b5ea-da3c8fea0a59',
								createdOn: null,
								updatedOn: null,
								deletedOn: null,
								description: 'Always Allowed',
								worktronFunctionType: 'VALIDATE',
								type: 'Boolean',
								name: 'valueOf',
								args: 'true',
								implementation: null,
							},
							executionValidator: {
								uuid: 'cd538820-29cc-4ce2-b5ea-da3c8fea0a59',
								createdOn: null,
								updatedOn: null,
								deletedOn: null,
								description: 'Always Allowed',
								worktronFunctionType: 'VALIDATE',
								type: 'Boolean',
								name: 'valueOf',
								args: 'true',
								implementation: null,
							},
						}],
						hookUuids: [],
						hooks: [],
					}],
				}, {
					uuid: '3e2cf9af-4353-45df-969f-6fe16b9a174c',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					name: 'Complete',
					workflowStatusType: 'DONE',
					flowStatusTransitions: [],
				}, {
					uuid: '71f5646e-f96b-4d92-8b36-2a0e6bcbff0e',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					name: 'Cancelled',
					workflowStatusType: 'DONE',
					flowStatusTransitions: [],
				}],
			},
			screenConfigurations: {
				CREATE: {
					uuid: 'ada825a4-f54b-408e-8495-f861520457e5',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					name: 'Default Task Screen Configuration',
					screen: {
						uuid: 'b8c28b1d-9089-4bf5-a910-2cbd43c591f6',
						createdOn: null,
						updatedOn: null,
						deletedOn: null,
						name: 'Default Task Screen',
					},
					fieldConfigurationUuids: ['2b494d71-df55-4832-bd2e-eaea2cc8a059', '98254402-6a4e-4247-a5c6-de8bad04d9b2', '6aceec14-8d60-47db-b037-dca51eb9a479'],
				},
				MANAGE: {
					uuid: 'ada825a4-f54b-408e-8495-f861520457e5',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					name: 'Default Task Screen Configuration',
					screen: {
						uuid: 'b8c28b1d-9089-4bf5-a910-2cbd43c591f6',
						createdOn: null,
						updatedOn: null,
						deletedOn: null,
						name: 'Default Task Screen',
					},
					fieldConfigurationUuids: ['2b494d71-df55-4832-bd2e-eaea2cc8a059', '98254402-6a4e-4247-a5c6-de8bad04d9b2', '6aceec14-8d60-47db-b037-dca51eb9a479'],
				},
				VIEW: {
					uuid: 'ada825a4-f54b-408e-8495-f861520457e5',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					name: 'Default Task Screen Configuration',
					screen: {
						uuid: 'b8c28b1d-9089-4bf5-a910-2cbd43c591f6',
						createdOn: null,
						updatedOn: null,
						deletedOn: null,
						name: 'Default Task Screen',
					},
					fieldConfigurationUuids: ['2b494d71-df55-4832-bd2e-eaea2cc8a059', '98254402-6a4e-4247-a5c6-de8bad04d9b2', '6aceec14-8d60-47db-b037-dca51eb9a479'],
				},
			},
			dashboards: [{
				uuid: '0a1c5811-927a-4dfa-8f23-4f6d538fc9e5',
				createdOn: null,
				updatedOn: null,
				deletedOn: null,
				name: 'Default',
				screen: {
					uuid: 'screen-uuid-1',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					name: "Josh's Dashboard",
				},
				fieldConfigurationUuids: ['2b494d71-df55-4832-bd2e-eaea2cc8a059', '98254402-6a4e-4247-a5c6-de8bad04d9b2', '6aceec14-8d60-47db-b037-dca51eb9a479'],
				businessEntityConfigurationUuid: '89947c81-ed14-48d8-b91f-be76ebf6eacc',
				keyFields: ['title', 'description'],
				actions: [{
					uuid: 'f3ead97a-cd24-4151-adb8-fe9385e68913',
					createdOn: null,
					updatedOn: null,
					deletedOn: null,
					description: 'Create Task',
					worktronFunctionType: 'WRITE',
					type: 'Task',
					name: 'create',
					args: null,
					implementation: null,
					availabilityValidator: {
						uuid: 'ee65d9b5-f034-4ff7-b5f1-d179f4a93418',
						createdOn: null,
						updatedOn: null,
						deletedOn: null,
						description: 'Acting user must be a Buyer',
						worktronFunctionType: 'VALIDATE',
						type: 'User',
						name: 'buyer',
						args: null,
						implementation: null,
					},
					executionValidator: {
						uuid: 'ee65d9b5-f034-4ff7-b5f1-d179f4a93418',
						createdOn: null,
						updatedOn: null,
						deletedOn: null,
						description: 'Acting user must be a Buyer',
						worktronFunctionType: 'VALIDATE',
						type: 'User',
						name: 'buyer',
						args: null,
						implementation: null,
					},
				}],
				sortField: 'title',
				sortDirection: 'asc',
				perPage: 25,
			}],
		}],
	},
};


export default businessEntityConfiguration;