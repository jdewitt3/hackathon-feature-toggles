import styles from './styles';

const logo = (uri, logoUri, style) => {
	return {
		uuid: 'app-bar-logo',
		type: 'a',
		props: {
			href: uri,
			style,
		},
		children: [
			{
				uuid: 'app-bar-logo-img',
				type: 'img',
				props: {
					alt: 'Work Market Logo',
					src: logoUri,
					style: styles.logoImg,
				},
			},
		],
	};
};

export default logo;
