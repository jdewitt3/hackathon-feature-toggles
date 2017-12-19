import icon from './icon';
import logo from './logo';
import rightNavMenuGroup from './rightNavMenuGroup';
import styles from './styles';
import { tmpCONFIG } from '../tmpSettings';

const appbar = (CONFIG, user) => {
	return {
		type: 'WMAppBar',
		uuid: 'app-bar',
		props: {
			iconElementLeft: {
				$$WM__resolve: {
					type: 'component',
					config: icon('app-bar-icon-l', 'menu', styles.menuIcon),
				},
			},
			iconElementRight: {
				$$WM__resolve: {
					type: 'component',
					config: rightNavMenuGroup(CONFIG, user),
				},
			},
			style: {
				position: 'fixed',
				top: '0px',
			},
			title: {
				$$WM__resolve: {
					type: 'component',
					config: logo(tmpCONFIG.corp.logoUri, tmpCONFIG.corp.logoSrc),
				},
			},
		},
		actions: [
			{
				propName: 'onLeftIconButtonTouchTap',
				sequence: [
					{
						type: 'CHROME__UPDATE',
						data: {
							$$WM__resolve: {
								type: 'fn',
								name: 'not',
								args: [
									{
										$$WM__resolve: {
											type: 'state',
											path: ['CHROME', 'mainNav', 'open'],
											defaultValue: false,
										},
									},
								],
							},
						},
						path: ['CHROME', 'mainNav', 'open'],
					},
				],
			},
		],
	};
};

export default appbar;
