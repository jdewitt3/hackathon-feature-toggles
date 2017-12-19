import getContent from './getContent';
import getHeader from './getHeader';

const generateDetail = (CONFIG) => {
	const MANAGE = CONFIG.screenConfigurations.MANAGE;

	return {
		uuid: `manage-drawer-${MANAGE.uuid}`,
		type: 'WMDrawer',
		selectors: [
			{
				propName: 'open',
				data: {
					$$WM__resolve: { type: 'state', path: ['MANAGE', 'drawerOpen'] },
				},
				defaultValue: false,
			},
		],
		actions: [
			{
				propName: 'onRequestChange',
				sequence: [
					{
						type: 'MANAGE__CLOSE',
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
		],
		props: {
			open: false,
			openSecondary: true,
			width: 800,
		},
		children: [
			getHeader(MANAGE.name),
			getContent(MANAGE.fieldConfigurationUuids, CONFIG.fields),
		],
	};
};

export default generateDetail;
