import styles from '../styles';
import {
	transformPayload,
} from '../../helpers';

const PayeeLabel = {
	uuid: 'payee-label',
	type: 'WMText',
	children: [
		{
			uuid: 'payee-label-text',
			type: 'span',
			children: 'Payable to',
		},
		{
			uuid: 'payee-label-asterix',
			type: 'span',
			props: {
				style: styles.asterix,
			},
			children: ' *',
		},
	],
};

const PayeeAutocomplete = {
	uuid: 'payee-autocomplete',
	type: 'WMAutocomplete',
	props: {
		dataSourceConfig: { text: 'text', value: 'value' },
		fullWidth: true,
		style: styles.payeeAutocomplete,
		hintText: 'Search or Select Talent ...',
		textFieldStyle: {
			fontSize: '14px',
		},
	},
	selectors: [
		{
			propName: 'dataSource',
			data: {
				$$WM__resolve: {
					type: 'state',
					path: ['CREATE', 'payee', 'payeeDataSource'],
				},
			},
			toJS: true,
			defaultValue: [],
		},
		{
			propName: 'filter',
			data: {
				$$WM__resolve: {
					type: 'fn',
					name: 'filterPayeeAutocomplete',
				},
			},
			defaultValue: null,
		},
	],
	actions: [
		{
			propName: 'onUpdateInput',
			sequence: [
				{
					type: 'INITIATE_FETCH',
					operationId: 'getSuggestionsUsingPOST',
					data: {
						request: {
							keyword: {
								$$WM__resolve: {
									type: 'event',
									index: 0,
								},
							},
							suggestionRequestScopes: [
								{ coreEntityDomain: 'ENGAGEMENT' },
							],
						},
					},
					REQUEST: {
						path: ['CREATE', 'fetch', 'request'],
					},
					SUCCESS: {
						path: ['CREATE', 'fetch', 'success'],
						transform: transformPayload,
					},
					ERROR: {
						path: ['CREATE', 'fetch', 'error'],
					},
				},
				{
					type: 'CREATE_TRANSFORM_PAYEE_DATA_SOURCE',
					path: ['CREATE', 'payee', 'payeeDataSource'],
					operation: 'setIn',
					data: {
						$$WM__resolve: {
							type: 'fn',
							name: 'producePayeeDataSource',
							args: [
								{
									$$WM__resolve: {
										type: 'state',
										path: ['CREATE', 'fetch', 'success'],
									},
								},
							],
						},
					},
				},
			],
		},
		{
			propName: 'onNewRequest',
			sequence: [
				{
					type: 'CREATE__PAYEE_SELECT_INPUT',
					operation: 'setIn',
					path: ['CREATE', 'payee', 'current'],
					data: {
						payeeSelected: {
							$$WM__resolve: {
								type: 'event',
								index: 0,
								path: ['text'],
							},
						},
						payeeUuid: {
							$$WM__resolve: {
								type: 'event',
								index: 0,
								path: ['uuid'],
							},
						},
					},
				},
			],
		},
	],
	conditional: {
		$$WM__resolve: {
			type: 'fn',
			name: 'equals',
			args: [
				{
					$$WM__resolve: {
						type: 'state',
						path: ['CREATE', 'payee', 'current', 'payeeSelected'],
					},
				},
				null,
			],
		},
	},
};

const PayeeChip = {
	uuid: 'payee-chip',
	type: 'WMChip',
	selectors: [
		{
			propName: 'label',
			data: {
				$$WM__resolve: {
					type: 'state',
					path: ['CREATE', 'payee', 'current', 'payeeSelected'],
				},
			},
			defaultValue: '',
		},
	],
	actions: [
		{
			propName: 'onRemove',
			sequence: [
				{
					type: 'CREATE__ON_REMOVE_CHIP',
					operation: 'setIn',
					path: ['CREATE', 'payee', 'current'],
					data: {
						payeeSelected: null,
						payeeValue: '',
					},
				},
			],
		},
	],
	conditional: {
		$$WM__resolve: {
			type: 'fn',
			name: 'equals',
			args: [
				{
					$$WM__resolve: {
						type: 'fn',
						name: 'not',
						args: [
							{
								$$WM__resolve: {
									type: 'state',
									path: ['CREATE', 'payee', 'current', 'payeeSelected'],
								},
							},
							null,
						],
					},
				},
				false,
			],
		},
	},
};

// const PayeeChip = {
// 	uuid: 'payee-chip-container',
// 	type: 'div',
// 	children: [
// 		{
// 			uuid: 'payee-chip',
// 			type: 'WMAvatarChip',
// 			selectors: [
// 				{
// 					propName: 'label',
// 					data: {
// 						$$WM__resolve: {
// 							type: 'state',
// 							path: ['CREATE', 'payee', 'current', 'payeeValue'],
// 						},
// 					},
// 					defaultValue: '',
// 				},
// 				{
// 					propName: 'avatar',
// 					data: {
// 						$$WM__resolve: {
// 							type: 'fn',
// 							name: 'zipObj',
// 							args: [
// 								[
// 									'src',
// 									'size',
// 								],
// 								[
// 									{
// 										$$WM__resolve: {
// 											type: 'state',
// 											path: ['CREATE', 'payee', 'current', 'payeeAvatar'],
// 										},
// 									},
// 									20,
// 								],
// 							],
// 						},
// 					},
// 					defaultValue: '',
// 				},
// 				{
// 					propName: 'data-payeeSelected',
// 					data: {
// 						$$WM__resolve: {
// 							type: 'state',
// 							path: ['CREATE', 'payee', 'current', 'payeeSelected'],
// 						},
// 					},
// 					defaultValue: null,
// 				},
// 			],
// 			actions: [
// 				{
// 					propName: 'onRequestDelete',
// 					sequence: [
// 						{
// 							type: 'CREATE__ON_REMOVE_CHIP',
// 							operation: 'setIn',
// 							path: ['CREATE', 'payee', 'current'],
// 							data: {
// 								payeeSelected: null,
// 								payeeValue: '',
// 							},
// 						},
// 					],
// 				},
// 			],
// 		},
// 	],
// 	conditional: {
// 		$$WM__resolve: {
// 			type: 'fn',
// 			name: 'equals',
// 			args: [
// 				{
// 					$$WM__resolve: {
// 						type: 'fn',
// 						name: 'not',
// 						args: [
// 							{
// 								$$WM__resolve: {
// 									type: 'state',
// 									path: ['CREATE', 'payee', 'current', 'payeeSelected'],
// 								},
// 							},
// 							null,
// 						],
// 					},
// 				},
// 				false,
// 			],
// 		},
// 	},
// };

const getPayee = () => ({
	uuid: 'payee',
	type: 'div',
	children: [
		PayeeLabel,
		PayeeAutocomplete,
		PayeeChip,
	],
});

export default getPayee;
