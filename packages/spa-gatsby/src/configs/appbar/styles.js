const icon = {
	color: '#fff',
};

const styles = {
	inputUnderlineFocus: {
		borderColor: '#fff',
	},
	logoImg: {
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
	},
	menuHr: {
		margin: '-1px 0px 0px',
		height: '1px',
		border: 'none',
		backgroundColor: 'rgb(224, 224, 224)',
		width: '100%',
	},
	menuIcon: {
		...icon,
	},
	searchBarContainer: {
		float: 'left',
	},
	searchBarIcon: {
		...icon,
	},
	searchBarInputContainer: {
		marginTop: '6px',
	},
	searchBarInput: {
		color: '#ffffff',
	},
	socialChatIcon: {
		...icon,
	},
	socialNotificationsIcon: {
		...icon,
	},
	socialNotificationsListStyle: {
		maxWidth: '360px',
		width: '360px',
	},
	socialNotificationsMenuItemCreatedStyle: {
		fontSize: '11px',
	},
	socialNotificationsMenuItemDescriptionStyle: {
		lineHeight: '20px',
		marginBottom: 0,
		marginTop: 0,
	},
	socialNotificationsMenuItemStyle: {
		lineHeight: '28px',
		whiteSpace: 'normal',
		paddingTop: '10px',
	},
	socialNotificationsMenuStyle: {
		maxHeight: '470px',
		maxWidth: '360px',
		overflow: 'auto',
		width: '360px',
	},
	socialNotificationsCount: {
		display: 'inline-block',
		position: 'absolute',
		backgroundColor: '#3e91e0',
		border: 'solid 1px #ffffff',
		fontFamily: 'OpenSans-Semibold',
		fontSize: '10px',
		color: '#ffffff',
		lineHeight: '1.1',
		borderRadius: '14px',
		marginLeft: '-8px',
		padding: '1px 3px',
	},
	socialUserAvatarIcon: {
		...icon,
	},
	socialUserAvatarImg: {
		position: 'absolute',
		marginTop: '-17px',
		marginLeft: '-17px',
		width: '32px',
		height: '32px',
		border: '1px solid #cecece',
	},
};

export default styles;
