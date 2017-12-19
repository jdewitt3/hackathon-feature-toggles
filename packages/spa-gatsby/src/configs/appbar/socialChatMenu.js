import icon from './icon';
import styles from './styles';
import { tmpCONFIG } from '../tmpSettings';

const menuItems = tmpCONFIG.corp.socialChatMenuOptions.map((menuItem, index) => {
	return {
		uuid: `app-bar-social-chat-menu-${index}`,
		type: 'WMMenuItem',
		props: {
			href: menuItem.href,
			primaryText: menuItem.primaryText,
			target: menuItem.target,
		},
		...menuItem,
	};
});

const socialChatMenu = () => {
	return {
		uuid: 'app-bar-social-chat-menu',
		type: 'WMIconMenu',
		props: {
			iconButtonElement: {
				$$WM__resolve: {
					type: 'component',
					config: icon('app-bar-social-chat-menu-icon', 'headset_mic'),
				},
			},
			iconStyle: styles.socialChatIcon,
			anchorOrigin: {
				horizontal: 'right',
				vertical: 'top',
			},
			targetOrigin: {
				horizontal: 'right',
				vertical: 'top',
			},
		},
		children: menuItems,
	};
};

export default socialChatMenu;
