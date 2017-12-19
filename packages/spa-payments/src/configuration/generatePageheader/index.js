import getHeader from './getHeader';
import getIcons from './getIcons';
import styles from './styles';

const generatePageheader = CONFIG => ({
	uuid: 'page-header',
	type: 'WMToolbar',
	props: {
		style: styles.pageheader,
	},
	children: [
		getHeader(CONFIG),
		//getIcons(CONFIG),
	],
});

export default generatePageheader;
