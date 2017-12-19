import moment from 'moment';
import {
	transformPayload,
} from '../../helpers';

const Submit = (reducerName, apiClient, CONFIG) => {

	return {
		uuid: 'manage__submit',
		type: 'WMRaisedButton',
		props: {
			primary: true,
			label: 'Update Payment',
		},
		actions: [
			{
				propName: 'onClick',
				sequence: [
					{
						type: 'INITIATE_FETCH',
						operationId: 'wm_order_update',
						data: {
							order: {
								uuid: '1231123131',
								buyerCompanyUuid: '1111-1111-1111-1111',
								buyerUserUuid: '2222-2222-2222-2222',
								sellerCompanyUuid: '3333-3333-3333-3333',
								sellerUserUuid: '4444-4444-4444',
								currency: 'USD',
								number: '1',
								memo: 'update an order',
								scheduledInvoiceDate: moment().add(1, 'days').valueOf(),
								paymentTerms: {
									days: 0,
									type: 'SYSTEM_NOT_DELETABLE',
									uuid: 'string',
								},
								invoiceUuid: 'invoice',
								orderItems: [
									{
										uuid: 'some-uuid',
										type: 'WORK',
										amount: 20.00,
										quantity: 1,
										description: 'test-work-description',
									},
								],
							},
						},
						REQUEST: {
							path: ['MANAGE', 'fetch', 'request'],
						},
						SUCCESS: {
							path: ['MANAGE', 'fetch', 'success'],
							transform: transformPayload,
						},
						ERROR: {
							path: ['MANAGE', 'fetch', 'error'],
						},
					},
					{
						type: 'INITIATE_FETCH',
						operationId: 'wm_order_list',
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
							$$WM__resolve: { type: 'state', path: ['DASHBOARD', 'fetch', 'success', 'data'] },
						},
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
					},
					{
						type: 'MANAGE__UPDATE_ORDER',
						path: ['MANAGE', 'dataList'],
						operation: 'setIn',
						data: {
							$$WM__resolve: {
								type: 'fn',
								name: 'find',
								args: [
									{
										$$WM__resolve: {
											type: 'state',
											path: ['DASHBOARD', 'fetch', 'request'],
										},
									},
									{
										$$WM__resolve: {
											type: 'state',
											path: ['DASHBOARD', 'dataList'],
										},
									},
								],
							},
						},
					},
					// find ID of current selection in list and moving 
					{
						type: 'MANAGE__DELETE_REQUEST',
						path: ['MANAGE', 'fetch'],
						operation: 'deleteIn',
					},
					{
						type: 'DASHBOARD__DELETE_REQUEST',
						path: ['DASHBOARD', 'fetch'],
						operation: 'deleteIn',
					},
					{
						type: 'MANGE__CLOSE',
						path: ['MANAGE', 'drawerOpen'],
						operation: 'setIn',
						data: false,
					},
				],
			},
		],
	};
};

export default Submit;
