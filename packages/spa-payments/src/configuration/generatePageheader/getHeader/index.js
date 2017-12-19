import AddButton from './AddButton';
import Breadcrumbs from './Breadcrumbs';
import styles from '../styles';

const getHeader = PAGEHEADER => ({
	uuid: 'page-header__header',
	type: 'div',
	props: {
		style: styles.container,
	},
	children: [
		Breadcrumbs(PAGEHEADER),
		AddButton(PAGEHEADER),
	],
});

export default getHeader;
