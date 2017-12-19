export default () => ({
	type: 'WMModal',
	uuid: 'warning-modal',
	props: {
		title: 'GATEWAY BROKEN',
	},
	selectors: [
		{
			propName: 'open',
			data: {
				$$WM__resolve: {
					type: 'state',
					path: ['WARNING', 'open'],
				},
			},
			defaultValue: false,
		},
	],
	children: [
		{
			type: 'div',
			uuid: 'gatewaybrokecontainer',
			props: {
				style: {
					color: 'red',
					textAlign: 'center',
				},
			},
			children: [
				{
					type: 'h1',
					uuid: 'blahblahblah',
					children: 'The gateway is down.',
				},
			],
		},
	],
});
