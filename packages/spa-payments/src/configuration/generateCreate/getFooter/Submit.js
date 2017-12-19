import {
	fetchListSuccessHandler,
	fetchListErrorHandler,
	transformPayload,
} from '../../helpers';

const Submit = (reducerName, apiClient, CONFIG) => {
	const CREATE = CONFIG.screenConfigurations.CREATE;

	return {
		uuid: `create-modal-${CREATE.uuid}__submit`,
		type: 'WMRaisedButton',
		props: {
			primary: true,
		},
		selectors: [
			{
				propName: 'label',
				data: {
					$$WM__resolve: {
						type: 'state',
						path: ['CREATE', 'submitLabel'],
					},
				},
				defaultValue: 'Pay Now',
			},
		],
		actions: [
			{
				propName: 'onClick',
				sequence: [
					{
						type: 'INITIATE_FETCH',
						operationId: 'wm_Order_create',
						data: {
							$$WM__resolve: {
								type: 'fn',
								name: 'producePostRequest',
								args: [
									{
										$$WM__resolve: {
											type: 'state',
											path: ['CREATE', 'lineItems'],
											toJS: true,
										},
									},
									{
										$$WM__resolve: {
											type: 'state',
											path: ['CREATE', 'paymentDate'],
											toJS: true,
										},
									},
									{
										$$WM__resolve: {
											type: 'state',
											path: ['CREATE', 'payee', 'current', 'payeeUuid'],
											toJS: true,
										},
									},
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
						type: 'INITIATE_FETCH',
						operationId: 'wm_Order_list',
						fromJS: true,
						data: {
							listOrderCriteria: {
								orderStates: [],
							},
						},
						REQUEST: {
							path: ['DASHBOARD', 'fetch', 'request'],
						},
						SUCCESS: {
							path: ['DASHBOARD', 'fetch', 'success'],
							transform: transformPayload,
						},
						ERROR: {
							path: ['DASHBOARD', 'fetch', 'error'],
						},
					},
					{
						type: 'DASHBOARD__SET_ROWS',
						path: ['DASHBOARD', 'dataList'],
						operation: 'setIn',
						data: {
							$$WM__resolve: {
								type: 'fn',
								name: 'refineList',
								args: [
									{
										$$WM__resolve: {
											type: 'state',
											path: ['DASHBOARD', 'fetch', 'success'],
											toJS: true,
										},
									},
								],
							},
						},
						conditional: fetchListSuccessHandler,
					},
					{
						type: 'DASHBOARD__SET_SIZE',
						path: ['DASHBOARD', 'dataSize'],
						operation: 'setIn',
						data: {
							$$WM__resolve: {
								type: 'fn',
								name: 'listSize',
								args: [
									{
										$$WM__resolve: {
											type: 'state',
											path: ['DASHBOARD', 'dataList'],
										},
									},
								],
							},
						},
						conditional: fetchListSuccessHandler,
					},
					{
						type: 'DASHBOARD__SET_LOAD_END',
						path: ['DASHBOARD', 'loadEnd'],
						operation: 'setIn',
						data: {
							$$WM__resolve: {
								type: 'fn',
								name: 'listSize',
								args: [
									{
										$$WM__resolve: {
											type: 'state',
											path: ['DASHBOARD', 'dataList'],
										},
									},
								],
							},
						},
						conditional: fetchListSuccessHandler,
					},
					{
						type: 'WARNING__OPEN',
						path: ['WARNING', 'open'],
						operation: 'setIn',
						data: true,
						conditional: fetchListErrorHandler,
					},
					{
						type: 'CREATE__DELETE_REQUEST',
						path: ['CREATE', 'fetch'],
						operation: 'deleteIn',
					},
					{
						type: 'DASHBOARD__DELETE_REQUEST',
						path: ['DASHBOARD', 'fetch'],
						operation: 'deleteIn',
					},
					{
						type: 'CREATE__CLOSE',
						path: ['CREATE', 'modalOpen'],
						operation: 'setIn',
						data: false,
					},
					{
						type: 'CREATE__CLEAR_LINE_ITEMS',
						path: ['CREATE', 'lineItems'],
						operation: 'setIn',
						data: [
							{
								id: '0',
								name: '',
								type: null,
								amount: '',
							},
						],
					},
					{
						type: 'CREATE__CLEAR_PAYEE',
						path: ['CREATE', 'payee', 'current'],
						operation: 'setIn',
						data: {
							payeeSelected: null,
							payeeValue: '',
						},
					},
					{
						type: 'CREATE__CLEAR_PAYMENT_DATE',
						path: ['CREATE', 'paymentDate'],
						data: '',
					},
					{
						type: 'CREATE__CLOSE_DATE_PICKER',
						path: ['CREATE', 'showDatePicker'],
						data: false,
					},
					{
						type: 'CREATE__UPDATE_SUBMIT_LABEL',
						path: ['CREATE', 'submitLabel'],
						data: 'Pay Now',
					},
				],
			},
		],
	};
};

export default Submit;
