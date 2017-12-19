import styles from '../styles';

const Title = CREATE => ({
	uuid: `create-modal-${CREATE.uuid}__title`,
	type: 'span',
	props: {
		style: styles.header.main,
	},
	children: 'New Payment',
});

export default Title;
