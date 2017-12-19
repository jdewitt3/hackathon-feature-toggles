import styles from '../styles';

const getAddLineItemButton = () => ({
	uuid: 'add-line-item-button',
	type: 'WMFlatButton',
	props: {
		icon: {
			$$WM__resolve: {
				type: 'component',
				config: {
					uuid: 'add-line-item-button-icon',
					type: 'WMFontIcon',
					props: {
						className: 'material-icons',
						style: styles.addLineItemButtonIcon,
					},
					children: 'add',
				},
			},
		},
		label: 'Add Line Item',
		labelStyle: styles.addLineItemButtonLabel,
	},
	selector: [
		{
			propName: 'id',
			data: {
				$$WM__resolve: {
					type: 'state',
					path: ['CREATE', 'payee', 'current', 'payeeValue'],
				},
			},
			defaultValue: '',
		},
	],
	actions: [
		{
			propName: 'onClick',
			sequence: [
				{
					type: 'CREATE__CREATE_LINE_ITEM',
					path: ['CREATE', 'lineItems'],
					fromJS: true,
					data: {
						id: {
							$$WM__resolve: {
								type: 'fn',
								name: 'makeId',
								args: [],
							},
						},
						name: '',
						type: null,
						amount: '',
					},
					operation: ['getIn', 'push', 'setIn'],
				},
			],
		},
	],
});

export default getAddLineItemButton;
