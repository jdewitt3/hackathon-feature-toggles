import styles from '../styles';

const PaymentForLabel = {
	uuid: 'payment-date-label',
	type: 'WMText',
	props: {
		style: {
			marginTop: '10px',
		},
	},
	children: [
		{
			uuid: 'payee-label-text',
			type: 'span',
			children: 'For',
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
};

const CreationLineItems = {
	uuid: 'complex-iteration-n',
	type: 'div',
	selectors: [
		{
			propName: 'iterateLineItems',
			defaultValue: [],
			data: {
				$$WM__resolve: {
					type: 'state',
					path: ['CREATE', 'lineItems'],
					toJS: true,
				},
			},
		},
	],
	actions: [
		{
			propName: 'nameOnChange',
			sequence: [
				{
					type: 'CREATE__LINE_ITEM_NAME_UPDATE',
					path: [
						'CREATE',
						'lineItems',
						{
							$$WM__resolve: {
								type: 'event',
								index: 0,
							},
						},
					],
					operation: 'mergeIn',
					data: {
						name: { $$WM__resolve: { type: 'event', index: 2 } },
					},
				},
			],
		},
		{
			propName: 'typeOnChange',
			sequence: [
				{
					type: 'CREATE__LINE_ITEM_TYPE_UPDATE',
					path: [
						'CREATE',
						'lineItems',
						{
							$$WM__resolve: {
								type: 'event',
								index: 0,
							},
						},
					],
					operation: 'mergeIn',
					data: {
						type: { $$WM__resolve: { type: 'event', index: 3 } },
					},
				},
			],
		},
		{
			propName: 'deleteLineItem',
			sequence: [
				{
					type: 'CREATE__DELETE_LINE_ITEM',
					path: [
						'CREATE',
						'lineItems',
						{
							$$WM__resolve: {
								type: 'event',
								index: 0,
							},
						},
					],
					operation: 'remove',
				},
			],
		},
		{
			propName: 'amountOnChange',
			sequence: [
				{
					type: 'CREATE__LINE_ITEM_AMOUNT_UPDATE',
					path: [
						'CREATE',
						'lineItems',
						{
							$$WM__resolve: {
								type: 'event',
								index: 0,
							},
						},
					],
					operation: 'mergeIn',
					data: {
						amount: { $$WM__resolve: { type: 'event', index: 2 } },
					},
				},
			],
		},
	],
	iterate: {
		over: 'iterateLineItems',
		component: {
			$$WM__resolve: {
				type: 'fn',
				name: 'cond',
				args: [
					[
						[
							{
								$$WM__resolve: {
									type: 'fn',
									name: 'T',
								},
							},
							{
								$$WM__resolve: {
									type: 'component',
									fn: true,
									config: {
										type: 'div',
										props: {
											style: styles.customLineItem.container,
										},
										children: [
											{
												uuid: 'box-container',
												type: 'div',
												props: {
													style: styles.customLineItem.boxContainer,
													id: {
														$$WM__resolve: {
															type: 'fn',
															name: 'toString',
															args: [
																{
																	$$WM__resolve: {
																		type: 'event',
																		index: 0,
																		path: ['id'],
																	},
																},
															],
														},
													},
												},
												children: [
													{
														uuid: 'box',
														type: 'div',
														props: {
															style: styles.customLineItem.box,
														},
													},
												],
											},
											{
												uuid: 'line-item-container',
												type: 'div',
												props: {
													style: styles.customLineItem.lineItemContainer,
												},
												children: [
													{
														uuid: 'payment-for-text-field',
														type: 'WMTextField',
														props: {
															style: styles.customLineItem.paymentsAutoComplete,
															value: {
																$$WM__resolve: {
																	type: 'event',
																	index: 0,
																	path: ['name'],
																},
															},
															hintText: 'Enter Item',
															hintStyle: {
																fontSize: '14px',
															},
															onChange: {
																$$WM__resolve: {
																	type: 'fn',
																	name: 'partial',
																	args: [
																		{
																			$$WM__resolve: {
																				type: 'props',
																				name: 'nameOnChange',
																			},
																		},
																		[
																			{
																				$$WM__resolve: {
																					type: 'event',
																					index: 1,
																				},
																			},
																		],
																	],
																},
															},
														},
													},
													{
														uuid: 'payment-for-type',
														type: 'WMSelectField',
														props: {
															style: styles.customLineItem.typeDropDown,
															hintText: 'Type',
															value: {
																$$WM__resolve: {
																	type: 'event',
																	index: 0,
																	path: ['type'],
																},
															},
															hintStyle: {
																fontSize: '14px',
															},
															onChange: {
																$$WM__resolve: {
																	type: 'fn',
																	name: 'partial',
																	args: [
																		{
																			$$WM__resolve: {
																				type: 'props',
																				name: 'typeOnChange',
																			},
																		},
																		[
																			{
																				$$WM__resolve: {
																					type: 'event',
																					index: 1,
																				},
																			},
																		],
																	],
																},
															},
														},
														children: [
															{
																uuid: 'payment-for-type-menu-item-work',
																type: 'WMMenuItem',
																props: {
																	primaryText: 'Work',
																	key: 1,
																	value: 'work',
																},
															},
															{
																uuid: 'payment-for-type-menu-item-expense',
																type: 'WMMenuItem',
																props: {
																	primaryText: 'Expense',
																	key: 2,
																	value: 'expense',
																},
															},
															{
																uuid: 'payment-for-type-menu-item-royalty',
																type: 'WMMenuItem',
																props: {
																	primaryText: 'Royalty',
																	key: 3,
																	value: 'royalty',
																},
															},
														],
													},
													{
														uuid: 'payment-for-amount',
														type: 'WMTextField',
														props: {
															style: styles.customLineItem.amountCurrencyField,
															value: {
																$$WM__resolve: {
																	type: 'event',
																	index: 0,
																	path: ['amount'],
																},
															},
															hintText: '$0.00',
															hintStyle: {
																fontSize: '14px',
															},
															onChange: {
																$$WM__resolve: {
																	type: 'fn',
																	name: 'partial',
																	args: [
																		{
																			$$WM__resolve: {
																				type: 'props',
																				name: 'amountOnChange',
																			},
																		},
																		[
																			{
																				$$WM__resolve: {
																					type: 'event',
																					index: 1,
																				},
																			},
																		],
																	],
																},
															},
														},
													},
													{
														uuid: 'payment-for-trash-icon',
														type: 'WMFlatButton',
														props: {
															icon: {
																$$WM__resolve: {
																	type: 'component',
																	config: {
																		uuid: 'trash-icon',
																		type: 'WMFontIcon',
																		props: {
																			className: 'material-icons',
																		},
																		children: 'delete',
																	},
																},
															},
															style: styles.customLineItem.trashIcon,
															onClick: {
																$$WM__resolve: {
																	type: 'props',
																	name: 'deleteLineItem',
																},
															},
														},
													},
												],
											},
										],
									},
								},
							},
						],
					],
				],
			},
		},
	},
};

export {
	PaymentForLabel,
	CreationLineItems,
};
