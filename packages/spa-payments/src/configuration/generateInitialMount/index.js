import {
	fetchListSuccessHandler,
	transformPayload,
} from '../helpers';

export default {
	uuid: 'didMountCheckList',
	type: 'WMGeneric',
	actions: [
		{
			propName: 'willMount',
			sequence: [
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
			],
		},
	],
};
