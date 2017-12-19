import styles from './styles';

const searchBar = () => {
	return {
		uuid: 'app-bar-search-bar',
		type: 'div',
		children: [
			{
				uuid: 'app-bar-search-bar-icon-1',
				type: 'WMIconButton',
				props: {
					iconClassName: 'material-icons',
					iconStyle: styles.searchBarIcon,
					style: {
						float: 'left',
					},
				},
				actions: [
					{
						propName: 'onClick',
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
													path: ['CHROME', 'search', 'open'],
													defaultValue: false,
												},
											},
										],
									},
								},
								path: ['CHROME', 'search', 'open'],
							},
						],
					},
				],
				children: 'search',
			},
			{
				type: 'WMTextField',
				uuid: 'app-bar-search-bar-input',
				props: {
					id: 'app-bar-search-bar-input',
					hintText: 'Search my assignments',
					hintStyle: {
						color: 'rgba(255, 255, 255, 0.5)',
					},
					inputStyle: styles.searchBarInput,
					style: styles.searchBarInputContainer,
					underlineFocusStyle: styles.inputUnderlineFocus,
				},
				conditional: {
					$$WM__resolve: {
						type: 'fn',
						name: 'equals',
						args: [
							{
								$$WM__resolve: {
									type: 'state',
									path: ['CHROME', 'search', 'open'],
								},
							},
							true,
						],
					},
				},
			},
		],
	};
};

export default searchBar;
