const fetchListSuccessHandler = {
	$$WM__resolve: {
		type: 'fn',
		name: 'not',
		args: [
			{
				$$WM__resolve: {
					type: 'fn',
					name: 'isNil',
					args: [
						{
							$$WM__resolve: {
								type: 'state',
								path: ['DASHBOARD', 'fetch', 'success'],
							},
						},
					],
				},
			},
		],
	},
};

const fetchListErrorHandler = {
	$$WM__resolve: {
		type: 'fn',
		name: 'not',
		args: [
			{
				$$WM__resolve: {
					type: 'fn',
					name: 'isNil',
					args: [
						{
							$$WM__resolve: {
								type: 'state',
								path: ['DASHBOARD', 'fetch', 'error'],
							},
						},
					],
				},
			},
		],
	},
};

const transformPayload = {
	$$WM__resolve: {
		type: 'fn',
		name: 'path',
		args: [
			[
				'body',
				'result',
				'payload',
			],
		],
	},
};

export {
	fetchListSuccessHandler,
	fetchListErrorHandler,
	transformPayload,
};
