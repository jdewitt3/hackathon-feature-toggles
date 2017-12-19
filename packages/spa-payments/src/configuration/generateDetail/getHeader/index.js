import styles from '../styles';

const getHeader = title => ({
	uuid: 'manage-drawer__header',
	type: 'div',
	props: {
		style: styles.header.main,
	},
	children: [
		{
			uuid: 'drawer-appbar',
			type: 'WMAppBar',
			props: {
				showMenuIconButton: false,
				iconElementRight: {
					$$WM__resolve: {
						type: 'component',
						config: {
							uuid: 'manage-drawer__close',
							type: 'WMIconButton',
							actions: [
								{
									propName: 'onClick',
									sequence: [
										{
											type: 'MANAGE__CLOSE',
											path: ['MANAGE', 'drawerOpen'],
											operation: 'setIn',
											data: false,
										},
									],
								},
							],
							props: {
								iconStyle: styles.header.closeBtnIconStyle,
							},
							children: [
								{
									uuid: 'manage-drawer__close-icon',
									type: 'WMFontIcon',
									props: {
										className: 'material-icons',
									},
									children: 'clear',
								},
							],
						},
					},
				},
			},
			selectors: [
				{
					propName: 'title',
					data: {
						$$WM__resolve: {
							type: 'fn',
							name: 'concat',
							args: [
								'Payment #',
								{
									$$WM__resolve: {
										type: 'fn',
										name: 'sanitizeString',
										args: [
											{
												$$WM__resolve: {
													type: 'state',
													path: ['MANAGE', 'currentData', 'number'],
												},
											},
										],
									},
								},
							],
						},
					},
				},
			],
		},
	],
});

export default getHeader;
