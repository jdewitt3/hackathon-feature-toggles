import Submit from './Submit';
import Total from './Total';

const getFooter = (reducerName, CONFIG, apiClient) => ({
	uuid: 'footer-container',
	type: 'div',
	props: {
		style: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
		},
	},
	children: [
		Total(),
		Submit(reducerName, apiClient, CONFIG),
	],
});

export default getFooter;
