const icon = (uuid, iconName, iconStyle) => {
	return {
		uuid,
		type: 'WMIconButton',
		props: {
			iconClassName: 'material-icons',
			iconStyle,
		},
		children: iconName || 'settings',
	};
};

export default icon;
