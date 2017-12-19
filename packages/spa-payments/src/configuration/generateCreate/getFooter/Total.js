import styles from '../styles';

const Total = () => {
	return {
		uuid: 'payment-total',
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
			{
				uuid: 'payment-total-dollar-text',
				type: 'WMText',
				props: {
					style: styles.total.label,
				},
				children: 'Total: ',
			},
			{
				uuid: 'payment-total-dollar-amount',
				type: 'WMGeneric',
				props: {
					style: styles.total.amount,
				},
				selectors: [
					{
						propName: 'children',
						data: {
							$$WM__resolve: {
								type: 'fn',
								name: 'reduceCreateLineItems',
								args: [
									{
										$$WM__resolve: {
											type: 'state',
											path: ['CREATE', 'lineItems'],
											toJS: true,
										},
									},
								],
							},
						},
					},
				],
			},
		],
	};
};

export default Total;
