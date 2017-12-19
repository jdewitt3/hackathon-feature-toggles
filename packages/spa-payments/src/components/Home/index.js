import {
	pageheaderConfig,
	modalConfig,
	warningModal,
	taskDashboardConfig,
	blankStateConfig,
} from '../partials';

const homeConfig = {
	uuid: 'modal-test-page',
	type: 'div',
	children: [
		pageheaderConfig,
		modalConfig,
		warningModal,
		taskDashboardConfig,
		blankStateConfig,
	],
};

export default homeConfig;
