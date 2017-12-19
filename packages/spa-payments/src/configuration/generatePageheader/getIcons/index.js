import ToolbarSeparator from './ToolbarSeparator';
import GearIconMenu from './GearIconMenu';

const getIcons = () => ({
	uuid: 'page-header__icon-group',
	type: 'WMToolbarGroup',
	children: [
		ToolbarSeparator(),
		GearIconMenu(),
	],
});

export default getIcons;
