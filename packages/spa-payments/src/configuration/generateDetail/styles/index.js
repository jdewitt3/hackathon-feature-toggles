import { commonStyles } from '@workmarket/front-end-components';

const styles = {
	header: {
		main: {
			display: 'flex',
			alignItems: 'center',
			padding: 0,
			justifyContent: 'space-between',
			textAlign: 'start',
		},
		title: {
			margin: '0 20px',
			fontSize: '20px',
			color: commonStyles.colors.baseColors.charcoalGrey,
			fontFamily: commonStyles.typography.fontStackHeaders.fontFamily,
			fontWeight: 300,
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},
		closeBtnIconStyle: {
			fontSize: '24px',
			color: commonStyles.colors.baseColors.lightGrey,
			marginLeft: 'auto',
		},
	},
	content: {
		main: {
			padding: '0 24px 24px 24px',
		},
	},
};

export default styles;
