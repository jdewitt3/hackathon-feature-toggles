import drawer from './drawer';
import appbar from './appbar';

export const storeConfig = {
	CHROME: {
		initialState: {
			data: {
				mainNav: {
					open: false,
				},
				search: {
					open: false,
				},
			},
		},
		handlers: ['CHROME__UPDATE'],
	},
};

const pageConfig = {
	type: 'div',
	uuid: 'page',
	children: [appbar(), drawer()],
};

export default pageConfig;
