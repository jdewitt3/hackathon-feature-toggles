import moment from 'moment';
import styles from './styles';
import { tmpUser } from '../tmpSettings';

const unreadNotifications = tmpUser.notifications.unread;

const menuItems = [];
tmpUser.notifications.recent.forEach((menuItem, index) => {
	menuItems.push(
		{
			uuid: `app-bar-social-notifications-menu-${index}-hr`,
			type: 'hr',
			props: {
				style: styles.menuHr,
			},
		},
		{
			uuid: `app-bar-social-notifications-menu-${index}-container`,
			type: 'WMMenuItem',
			props: {
				href: `/assignments/details/${menuItem.id}`,
				primaryText: {
					$$WM__resolve: {
						type: 'component',
						config: {
							uuid: `app-bar-social-notifications-menu-${index}`,
							type: 'div',
							children: [
								{
									uuid: `app-bar-social-notifications-menu-${index}-p`,
									type: 'p',
									props: {
										dangerouslySetInnerHTML: {
											__html: menuItem.description,
										},
										style: styles.socialNotificationsMenuItemDescriptionStyle,
									},
								},
								{
									uuid: `app-bar-social-notifications-menu-${index}-small`,
									type: 'small',
									props: {
										style: {
											...styles.socialNotificationsMenuItemCreatedStyle,
											// color: !menuItem.viewed ?
											// 	commonStyles.colors.baseColors.orange
											// 	:
											// 	'inherit',
										},
									},
									children: [
										!menuItem.viewed && {
											uuid: `app-bar-social-notifications-menu-${index}-status`,
											type: 'WMFontIcon',
											props: {
												className: 'material-icons',
												style: {
													color: 'inherit',
													fontSize: 'inherit',
												},
											},
											children: 'fiber_manual_record',
										},
										` ${moment(menuItem.createdAt).fromNow()}`,
									],
								},
							],
						},
					},
				},
				style: styles.socialNotificationsMenuItemStyle,
			},
		},
	);
});

const iconButtonWithAlert = {
	uuid: 'app-bar-social-notifications-alert',
	type: 'div',
	children: [
		{
			uuid: 'app-bar-social-notifications-menu-alert-icon',
			type: 'WMFontIcon',
			props: {
				className: 'material-icons',
			},
			children: [
				'notifications',
				{
					uuid: 'app-bar-social-notifications-menu-alert-count',
					type: 'span',
					props: {
						style: styles.socialNotificationsCount,
					},
					children: unreadNotifications,
				},
			],
		},
	],
};

const socialNotificationsMenu = () => {
	return {
		uuid: 'app-bar-social-notifications-menu',
		type: 'WMIconMenu',
		props: {
			iconButtonElement: {
				$$WM__resolve: {
					type: 'component',
					config: iconButtonWithAlert,
				},
			},
			iconStyle: styles.socialNotificationsIcon,
			anchorOrigin: {
				horizontal: 'right',
				vertical: 'top',
			},
			listStyle: styles.socialNotificationsListStyle,
			menuStyle: styles.socialNotificationsMenuStyle,
			targetOrigin: {
				horizontal: 'right',
				vertical: 'top',
			},
		},
		children: [
			{
				uuid: 'app-bar-social-notifications-menu-item-header',
				type: 'WMMenuItem',
				props: {
					disabled: true,
					primaryText: 'Notifications',
					secondaryText: {
						$$WM__resolve: {
							type: 'component',
							config: {
								uuid: 'app-bar-social-notifications-menu-item-header-a',
								type: 'a',
								props: {
									href: '/notifications/active',
									style: {
										// color: commonStyles.colors.baseColors.blue,
										textDecoration: 'none',
									},
								},
								children: 'View All',
							},
						},
					},
					style: {
						// color: commonStyles.colors.baseColors.darkGrey,
					},
				},
			},
			...menuItems,
		],
	};
};

export default socialNotificationsMenu;
