import styles from '../styles';

const Close = CREATE => ({
	uuid: `create-modal-${CREATE.uuid}__close`,
	type: 'WMIconButton',
	actions: [
		{
			propName: 'onClick',
			sequence: [
				{
					type: 'CREATE__CLOSE',
					path: ['CREATE', 'modalOpen'],
					operation: 'setIn',
					data: false,
				},
				{
					type: 'CREATE__CLEAR_LINE_ITEMS',
					path: ['CREATE', 'lineItems'],
					operation: 'setIn',
					data: [
						{
							id: '0',
							name: '',
							type: null,
							amount: '',
						},
					],
				},
				{
					type: 'CREATE__CLEAR_PAYEE',
					path: ['CREATE', 'payee', 'current'],
					operation: 'setIn',
					data: {
						payeeSelected: null,
						payeeValue: '',
					},
				},
				{
					type: 'CREATE__CLEAR_PAYMENT_DATE',
					path: ['CREATE', 'paymentDate'],
					data: '',
				},
				{
					type: 'CREATE__CLOSE_DATE_PICKER',
					path: ['CREATE', 'showDatePicker'],
					data: false,
				},
				{
					type: 'CREATE__UPDATE_SUBMIT_LABEL',
					path: ['CREATE', 'submitLabel'],
					data: 'Pay Now',
				},
			],
		},
	],
	props: {
		iconStyle: styles.header.closeButton,
	},
	children: [
		{
			uuid: `create-modal-${CREATE.uuid}__close-icon`,
			type: 'WMFontIcon',
			props: {
				className: 'material-icons',
			},
			children: 'clear',
		},
	],
});

export default Close;
