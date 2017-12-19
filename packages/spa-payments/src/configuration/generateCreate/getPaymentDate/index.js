import styles from '../styles';

const PaymentDateLabel = {
	uuid: 'payment-date-label',
	type: 'WMText',
	children: [
		{
			uuid: 'payee-label-text',
			type: 'span',
			children: 'Payment Date',
		},
		{
			uuid: 'payee-label-asterix',
			type: 'span',
			props: {
				style: styles.asterix,
			},
			children: ' *',
		},
	],
	props: {
		style: {
			marginBottom: '10px',
			marginTop: '10px',
		},
	},
};

const PaymentDateRadio = {
	uuid: 'payment-date-radio-button-group',
	type: 'WMRadioButtonGroup',
	props: {
		name: 'payment-date-radio-button-group',
		valueSelected: 'today',
	},
	children: [
		{
			uuid: 'payment-date-radio-button-1',
			type: 'WMRadioButton',
			props: {
				label: 'Today',
				value: 'today',
				style: styles.paymentDate.radioButton,
			},
		},
		{
			uuid: 'payment-date-radio-button-2',
			type: 'WMRadioButton',
			props: {
				label: 'Schedule',
				value: 'schedule',
				style: styles.paymentDate.radioButton,
			},
		},
	],
	actions: [
		{
			propName: 'onChange',
			sequence: [
				{
					type: 'CREATE__UPDATE_TODAY_DATE',
					path: ['CREATE', 'paymentDate'],
					data: {
						$$WM__resolve: {
							type: 'fn',
							name: 'formatCreateDate',
							args: [],
						},
					},
					conditional: {
						$$WM__resolve: {
							type: 'fn',
							name: 'equals',
							args: [
								{
									$$WM__resolve: {
										type: 'event',
										index: 1,
									},
								},
								'today',
							],
						},
					},
				},
				{
					type: 'CREATE__UPDATE_SUBMIT_LABEL',
					path: ['CREATE', 'submitLabel'],
					data: 'Pay Now',
					conditional: {
						$$WM__resolve: {
							type: 'fn',
							name: 'equals',
							args: [
								{
									$$WM__resolve: {
										type: 'event',
										index: 1,
									},
								},
								'today',
							],
						},
					},
				},
				{
					type: 'CREATE__HIDE_DATE_PICKER',
					path: ['CREATE', 'showDatePicker'],
					data: false,
					conditional: {
						$$WM__resolve: {
							type: 'fn',
							name: 'equals',
							args: [
								{
									$$WM__resolve: {
										type: 'event',
										index: 1,
									},
								},
								'today',
							],
						},
					},
				},
				{
					type: 'CREATE__SHOW_DATE_PICKER',
					path: ['CREATE', 'showDatePicker'],
					data: true,
					conditional: {
						$$WM__resolve: {
							type: 'fn',
							name: 'equals',
							args: [
								{
									$$WM__resolve: {
										type: 'event',
										index: 1,
									},
								},
								'schedule',
							],
						},
					},
				},
				{
					type: 'CREATE__UPDATE_SUBMIT_LABEL',
					path: ['CREATE', 'submitLabel'],
					data: 'Schedule Now',
					conditional: {
						$$WM__resolve: {
							type: 'fn',
							name: 'equals',
							args: [
								{
									$$WM__resolve: {
										type: 'event',
										index: 1,
									},
								},
								'schedule',
							],
						},
					},
				},
			],
		},
	],
};

const PaymentDatePicker = {
	uuid: 'payment-date-picker',
	type: 'WMDatePicker',
	props: {
		firstDayOfWeek: 1,
		container: 'inline',
		hintText: 'Choose a Date',
		shouldDisableDate: {
			$$WM__resolve: {
				type: 'fn',
				name: 'disableDate',
			},
		},
		style: {
			marginTop: '-14px',
		},
		textFieldStyle: {
			fontSize: '14px',
			width: '120px',
		},
	},
	actions: [
		{
			propName: 'onChange',
			sequence: [
				{
					type: 'CREATE__UPDATE_SCHEDULED_DATE',
					path: ['CREATE', 'paymentDate'],
					data: {
						$$WM__resolve: {
							type: 'fn',
							name: 'formatCreateDate',
							args: [
								{
									$$WM__resolve: {
										type: 'event',
										index: 1,
									},
								},
							],
						},
					},
				},
			],
		},
	],
	conditional: {
		$$WM__resolve: {
			type: 'fn',
			name: 'equals',
			args: [
				{
					$$WM__resolve: {
						type: 'state',
						path: ['CREATE', 'showDatePicker'],
					},
				},
				true,
			],
		},
	},
};

const PaymentDate = {
	uuid: 'payment-date',
	type: 'div',
	props: {
		style: {
			display: 'flex',
			flexDirection: 'row',
		},
	},
	children: [
		PaymentDateRadio,
		PaymentDatePicker,
	],

};

const getPaymentDate = () => ({
	uuid: 'payment-date',
	type: 'div',
	children: [
		PaymentDateLabel,
		PaymentDate,
	],
});

export default getPaymentDate;

