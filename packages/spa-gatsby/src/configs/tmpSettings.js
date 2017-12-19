export const tmpCONFIG = {
	corp: {
		logoUri: '/',
		logoSrc: 'https://d2tcm6kult8ucf.cloudfront.net/bafa3a9/images/app/workmarketlogolight.svg',
		socialChatMenuOptions: [
			{
				// TODO implement properly mapped onClick
				href: 'javascript:void(0);', // eslint-disable-line no-script-url
				// onClick: {()=> SnapEngage && SnapEngage.startChat('How can I help you today?')}
				primaryText: 'Chat with us',
			},
			{
				href: 'mailto:support@workmarket.com',
				primaryText: 'support@workmarket.com',
			},
			{
				href: 'tel:+12122299675',
				primaryText: '212-229-WORK (9675)',
			},
			{
				href: 'https://workmarket.zendesk.com/hc/en-us',
				primaryText: 'Help Center',
				target: '_blank',
			},
		],
	},
};

export const tmpPlaygroundConfig = {
	uuid: 'test-page',
	type: 'div',
	children: [
		{
			uuid: 'koopa-playground-h1',
			type: 'h1',
			children: 'Koopa Playground',
		},
	],
};

export const tmpRouteConfig = {
	routesOptions: {},
	routesMap: {},
};

export const tmpStoreConfig = {
	APP: {
		initialState: {
			data: {
				drawerOpen: false,
				searchVisible: false,
			},
		},
		handlers: [
			{ name: 'DRAWER_UPDATE', handler: 'GENERIC' },
			{ name: 'SEARCH_INPUT_UPDATE', handler: 'GENERIC' },
		],
	},
};

export const tmpUser = {
	email: 'johndoe@workmarket.com',
	notifications: {
		unread: 12,
		recent: [
			{
				id: 1,
				description: 'John Doe has checked out of the assignment: Conflict assignment base',
				viewed: true,
				createdAt: 1503687817672,
			},
			{
				id: 2,
				description: 'Joe Black has checked out of the assignment: Conflict assignment base',
				viewed: false,
				createdAt: 1503687617672,
			},
			{
				id: 3,
				description: 'John Doe has checked out of the assignment: Conflict assignment base',
				viewed: true,
				createdAt: 1503687817672,
			},
			{
				id: 4,
				description: 'Joe Black has checked out of the assignment: Conflict assignment base',
				viewed: false,
				createdAt: 1503687617672,
			},
			{
				id: 5,
				description: 'John Doe has checked out of the assignment: Conflict assignment base',
				viewed: true,
				createdAt: 1503687817672,
			},
			{
				id: 6,
				description: 'Joe Black has checked out of the assignment: Conflict assignment base',
				viewed: false,
				createdAt: 1503687617672,
			},
			{
				id: 7,
				description: 'John Doe has checked out of the assignment: Conflict assignment base',
				viewed: true,
				createdAt: 1503687817672,
			},
			{
				id: 8,
				description: 'Joe Black has checked out of the assignment: Conflict assignment base',
				viewed: false,
				createdAt: 1503687617672,
			},
			{
				id: 9,
				description: 'John Doe has checked out of the assignment: Conflict assignment base',
				viewed: true,
				createdAt: 1503687817672,
			},
			{
				id: 10,
				description: 'Joe Black has checked out of the assignment: Conflict assignment base',
				viewed: false,
				createdAt: 1503687617672,
			},
			{
				id: 11,
				description: 'John Doe has checked out of the assignment: Conflict assignment base',
				viewed: true,
				createdAt: 1503687817672,
			},
			{
				id: 12,
				description: 'Joe Black has checked out of the assignment: Conflict assignment base',
				viewed: false,
				createdAt: 1503687617672,
			},
		],
	},
	smallAvatarUri:
		'https://dmt5t3ugyo1yn.cloudfront.net/8e/1d/a7/ba/b3/8e1da7ba-b315-4296-aed5-511a592f41eb',
};
