import searchBar from './searchBar';
import socialChatMenu from './socialChatMenu';
import socialNotificationsMenu from './socialNotificationsMenu';
import socialUserMenu from './socialUserMenu';

const rightNavMenuGroup = (CONFIG, user) => {
	return {
		uuid: 'app-bar-right-menu-group',
		type: 'div',
		props: {
			style: {
				display: 'flex',
			},
		},
		children: [searchBar(), socialChatMenu(), socialNotificationsMenu(), socialUserMenu(user)],
	};
};

export default rightNavMenuGroup;
