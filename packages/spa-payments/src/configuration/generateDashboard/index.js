const generateDashboard = (CONFIG) => {
	return {
		uuid: 'dashboard-container',
		type: 'div',
		props: {
			style: {
				fontFamily: 'Open Sans',
				fontSize: '14px',
				color: '#646B6F',
			},
		},
		children: [
			{
				uuid: `dashboard-${CONFIG.screenConfigurations.CREATE.uuid}`,
				type: 'WMConfigurableTable',
				props: {},
				selectors: [
					{
						data: {
							$$WM__resolve: {
								type: 'state',
								path: ['DASHBOARD', 'dataSize'],
							},
						},
						propName: 'dataSize',
						defaultValue: 0,
					},
					{
						propName: 'columns',
						data: {
							$$WM__resolve: {
								type: 'fn',
								name: 'transformConfig',
								args: [
									{
										$$WM__resolve: {
											type: 'state',
											path: ['DASHBOARD', 'configuration'],
										},
									},
								],
							},
						},
						defaultValue: [],
					},
					{
						data: {
							$$WM__resolve: {
								type: 'state',
								path: ['DASHBOARD', 'loadEnd'],
							},
						},
						propName: 'loadEnd',
						defaultValue: 0,
					},
					{
						data: {
							$$WM__resolve: {
								type: 'state',
								path: ['DASHBOARD', 'dataList'],
							},
						},
						propName: 'dataList',
						defaultValue: [],
					},
					{
						propName: 'checkCount',
						data: {
							$$WM__resolve: {
								type: 'fn',
								name: 'reduceCheckCount',
								args: [
									{
										$$WM__resolve: {
											type: 'state',
											path: ['DASHBOARD', 'dataList'],
											toJS: true,
										},
									},
								],
							},
						},
					},
				],
				actions: [
					{
						propName: 'onCellClick',
						sequence: [
							{
								type: 'MANAGE__SET_DATA',
								path: ['MANAGE', 'currentData'],
								operation: 'setIn',
								data: {
									$$WM__resolve: {
										type: 'fn',
										name: 'setLineItem',
										args: [
											{
												$$WM__resolve: {
													type: 'event',
													index: 1,
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
							{
								type: 'MANAGE__OPEN',
								path: ['MANAGE', 'drawerOpen'],
								operation: 'setIn',
								data: {
									$$WM__resolve: {
										type: 'fn',
										name: 'not',
										args: [
											{
												$$WM__resolve: {
													type: 'state',
													path: ['MANAGE', 'drawerOpen'],
												},
											},
										],
									},
								},
							},
						],
					},
					{
						propName: 'onCheck',
						sequence: [
							{
								type: 'DASHBOARD__CHECK_ROW',
								path: ['DASHBOARD', 'dataList', { $$WM__resolve: { type: 'event', index: 0 } }, 'checked'],
								operation: 'setIn',
								data: {
									$$WM__resolve: {
										type: 'fn',
										name: 'not',
										args: [
											{
												$$WM__resolve: {
													type: 'state',
													path: ['DASHBOARD', 'dataList', { $$WM__resolve: { type: 'event', index: 0 } }, 'checked'],
												},
											},
										],
									},
								},
							},
						],
					},
				],
			},
		],
		conditional: {
			$$WM__resolve: {
				type: 'fn',
				name: 'gt',
				args: [
					{
						$$WM__resolve: {
							type: 'state',
							path: ['DASHBOARD', 'dataSize'],
						},
					},
					0,
				],
			},
		},
	};
};


export default generateDashboard;
