import getHeader from './getHeader';
import getFooter from './getFooter';
import getPayee from './getPayee';
import getPaymentDate from './getPaymentDate';
import {
	PaymentForLabel,
	CreationLineItems,
} from './getPaymentFor';
import getAddLineItemButton from './getAddLineItemButton';
import styles from './styles';

const generateCreate = (CONFIG, apiClient) => ({
	uuid: `create-modal-${CONFIG.screenConfigurations.CREATE.uuid}`,
	type: 'WMModal',
	selectors: [
		{
			propName: 'open',
			data: {
				$$WM__resolve: {
					type: 'state',
					path: ['CREATE', 'modalOpen'],
				},
			},
			defaultValue: false,
		},
	],
	actions: [
		{
			propName: 'onRequestClose',
			sequence: [
				{
					type: 'CREATE__CLOSE',
					path: ['CREATE', 'modalOpen'],
					operation: 'setIn',
					data: false,
				},
			],
		},
	],
	props: {
		titleStyle: styles.titleStyle,
		title: { $$WM__resolve: { type: 'component', config: getHeader(CONFIG.screenConfigurations.CREATE) } },
		autoScrollBodyContent: true,
		actionsContainerStyle: styles.actionsContainerStyle,
		bodyStyle: styles.bodyStyle,
		contentStyle: styles.contentStyle,
		actions: { $$WM__resolve: { type: 'component', config: getFooter('CREATE', CONFIG, apiClient) } },
	},
	children: [
		getPayee(),
		PaymentForLabel,
		// TODO fix the following line breaking UI when rendering in spa-gatsby
		// caused by `iterate` in config which has been deprecated
		// CreationLineItems,
		getAddLineItemButton(),
		getPaymentDate(),
	],
});

export default generateCreate;
