const drawer = () => {
	return {
		type: 'WMDrawer',
		uuid: 'drawer',
		props: {
			containerStyle: {
				paddingBottom: '64px',
				top: '64px',
				zIndex: 1,
			},
			width: 220,
		},
		selectors: [
			{
				propName: 'open',
				data: {
					$$WM__resolve: {
						type: 'state',
						path: ['CHROME', 'mainNav', 'open'],
					},
				},
				defaultValue: false,
			},
		],
		children: [
			{
				type: 'WMMenuItem',
				uuid: 'home-nav-link',
				children: 'Home',
				actions: [
					{
						propName: 'onClick',
						sequence: [
							{
								type: 'ROUTE',
								url: '/',
							},
						],
					},
				],
			},
			{
				type: 'WMMenuItem',
				uuid: 'page-1-nav-link',
				children: 'React Feature',
				actions: [
					{
						propName: 'onClick',
						sequence: [
							{
								type: 'ROUTE',
								url: '/react-feature',
							},
						],
					},
				],
			},
			{
				type: 'WMMenuItem',
				uuid: 'page-2-nav-link',
				children: 'WM Config Feature',
				actions: [
					{
						propName: 'onClick',
						sequence: [
							{
								type: 'ROUTE',
								url: '/config-feature',
							},
						],
					},
				],
			},
			{
				type: 'WMMenuItem',
				uuid: 'page-3-nav-link',
				children: 'Payments Feature',
				actions: [
					{
						propName: 'onClick',
						sequence: [
							{
								type: 'ROUTE',
								url: '/payments',
							},
						],
					},
				],
			},
		],
	};
};

export default drawer;
