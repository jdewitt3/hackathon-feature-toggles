import styles from '../styles';

const GearIconMenu = () => ({
	uuid: 'page-header__gear-icon-menu',
	type: 'WMIconMenu',
	props: {
		iconButtonElement: {
			$$WM__component: {
				uuid: 'page-header__gear-icon-menu-button',
				type: 'WMIconButton',
				props: {
					iconClassName: 'material-icons',
					style: styles.buttonStyle,
					iconStyle: styles.iconStyle,
				},
				children: 'settings',
			},
		},
	},
	// selectors: [
	// 	{
	// 		data: {
	// 			$$WM__fromState: ['PAGEHEADER', 'fields'],
	// 		},
	// 		propName: 'data-fields',
	// 		defaultValue: [],
	// 	},
	// ],
	// iterate: {
	// 	fromPropName: 'data-fields',
	// 	operation: 'map',
	// 	props: [
	// 		{ componentProp: 'primaryText', dataProp: 'name', operation: 'get' },
	// 		{ componentProp: 'value', dataProp: 'value', operation: 'get' },
	// 		{ componentProp: 'key', dataProp: 'uuid', operation: 'get' },
	// 	],
	// },
	// children: {
	// 	uuid: '___',
	// 	type: 'WMMenuItem',
	// },
});

export default GearIconMenu;
