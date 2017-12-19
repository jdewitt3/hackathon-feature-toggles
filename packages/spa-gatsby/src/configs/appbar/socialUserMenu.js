import styles from './styles';
import { tmpUser } from '../tmpSettings';

const iconButton = (user) => {
	return {
		uuid: 'app-bar-social-user-avatar',
		type: 'WMIconButton',
		children:
			user && typeof user === 'object' && user.smallAvatarUri
				? {
					uuid: 'app-bar-social-user-avatar-img',
					type: 'img',
					props: {
						src: user.smallAvatarUri,
					},
				}
				: {
					uuid: 'app-bar-social-user-avatar-icon',
					type: 'WMFontIcon',
					props: {
						className: 'material-icons',
					},
					children: 'person',
				},
	};
};

const socialUserMenu = (user) => {
	return {
		uuid: 'app-bar-social-user-menu',
		type: 'WMIconMenu',
		props: {
			iconButtonElement: {
				$$WM__resolve: {
					type: 'component',
					config: iconButton(user),
				},
			},
			iconStyle:
				user && typeof user === 'object' && user.smallAvatarUri
					? styles.socialUserAvatarImg
					: styles.socialUserAvatarIcon,
			anchorOrigin: {
				horizontal: 'right',
				vertical: 'top',
			},
			targetOrigin: {
				horizontal: 'right',
				vertical: 'top',
			},
		},
		children: [
			{
				uuid: 'app-bar-social-user-menu-1',
				type: 'WMMenuItem',
				props: {
					disabled: true,
					primaryText: tmpUser.email,
				},
			},
			{
				uuid: 'app-bar-social-user-menu-hr-1',
				type: 'hr',
				props: {
					style: styles.menuHr,
				},
			},
			{
				uuid: 'app-bar-social-user-menu-2',
				type: 'WMMenuItem',
				props: {
					href: '/profile?ref=nav',
					primaryText: 'My Profile',
				},
			},
			{
				uuid: 'app-bar-social-user-menu-3',
				type: 'WMMenuItem',
				props: {
					href: '/forums',
					primaryText: 'Forums',
				},
			},
			{
				uuid: 'app-bar-social-user-menu-4',
				type: 'WMMenuItem',
				props: {
					href: '/settings',
					primaryText: 'Settings',
				},
			},
			{
				uuid: 'app-bar-social-user-menu-hr-2',
				type: 'hr',
				props: {
					style: styles.menuHr,
				},
			},
			{
				uuid: 'app-bar-social-user-menu-5',
				type: 'WMMenuItem',
				props: {
					// TODO support link to other languages
					href: '/hc/en-us',
					primaryText: 'Help Center',
				},
			},
			{
				uuid: 'app-bar-social-user-menu-6',
				type: 'WMMenuItem',
				props: {
					href: '/logout?ref=nav',
					primaryText: 'Sign Out',
				},
			},
		],
	};
};

export default socialUserMenu;
