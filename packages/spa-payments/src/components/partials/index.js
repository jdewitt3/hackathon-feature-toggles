import generateCreate from '../../configuration/generateCreate';
// import generateDetail from '../../configuration/generateDetail';
import generateDashboard from '../../configuration/generateDashboard';
import generatePageheader from '../../configuration/generatePageheader';
import generateBlankState from '../../configuration/generateBlankState';
// import generateAppBar from '../../configuration/generateAppBar';
import generateWarning from '../../configuration/generateWarning';
import {
	businessEntityConfiguration,
	whoami,
} from '../../configuration';
import snoopy from '../../utils/es6mockedSnoopy';

const createModal = generateCreate(businessEntityConfiguration.result.payload[0], snoopy);

// export const drawerConfig = generateDetail(businessEntityConfiguration.result.payload[0]);
export const modalConfig = createModal;
export const pageheaderConfig =
	generatePageheader(whoami.result.payload[0].mainNav);
export const taskDashboardConfig = generateDashboard(businessEntityConfiguration.result.payload[0]);
export const blankStateConfig = generateBlankState(businessEntityConfiguration.result.payload[0]);
// export const appBarConfig = generateAppBar();
export const warningModal = generateWarning();
