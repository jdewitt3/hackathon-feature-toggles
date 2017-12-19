import styles from '../styles';

const safeRenderManage = {
	$$WM__resolve: {
		type: 'fn',
		name: 'not',
		args: [
			{
				$$WM__resolve: {
					type: 'fn',
					name: 'isNil',
					args: [
						{
							$$WM__resolve: {
								type: 'state',
								path: ['MANAGE', 'currentData'],
							},
						},
					],
				},
			},
		],
	},
};

const getLineItems = () => ({
	uuid: 'manage-line-item-iteration',
	type: 'div',
	selectors: [
		{
			propName: 'iterateManageLineItems',
			defaultValue: [],
			data: {
				$$WM__resolve: {
					type: 'state',
					path: ['MANAGE', 'currentData', 'orderItems'],
					toJS: true,
				},
			},
		},
	],
	iterate: {
		over: 'iterateManageLineItems',
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
											style: {
												display: 'flex',
												flexDirection: 'row',
												lineHeight: '24px',
												marginTop: '1em',
												marginLeft: '20px',
											},
										},
										children: [
											{
												uuid: 'left-side-text-description-container',
												type: 'div',
												props: {
													style: {
														display: 'flex',
														flexDirection: 'column',
														fontSize: '14px',
														lineHeight: '20px',
														width: '300px',
													},
												},
												children: [
													{
														uuid: 'some-rando-span1',
														type: 'WMGeneric',
														props: {
															style: {
																color: 'black',
															},
														},
														selectors: [
															{
																propName: 'children',
																data: {
																	$$WM__resolve: {
																		type: 'event',
																		index: 0,
																		path: ['uuid'],
																	},
																},
															},
														],
														conditional: safeRenderManage,
													},
													{
														uuid: 'some-rando-span2',
														type: 'WMGeneric',
														props: {
															style: {
																color: 'gray',
															},
														},
														selectors: [
															{
																propName: 'children',
																data: {
																	$$WM__resolve: {
																		type: 'event',
																		index: 0,
																		path: ['description'],
																	},
																},
															},
														],
														conditional: safeRenderManage,
													},
													{
														uuid: 'some-rando-span3',
														type: 'WMGeneric',
														props: {
															style: {
																color: 'gray',
																fontSize: '12px',
															},
														},
														selectors: [
															{
																propName: 'children',
																data: {
																	$$WM__resolve: {
																		type: 'event',
																		index: 0,
																		path: ['createdOn'],
																	},
																},
															},
														],
														conditional: safeRenderManage,
													},
												],
											},
											{
												uuid: 'right-side-text-description-container',
												type: 'div',
												props: {
													style: {
														display: 'flex',
														flexDirection: 'row',
														width: '300px',
														justifyContent: 'flex-end',
														fontSize: '12px',
													},
												},
												children: [
													{
														uuid: 'type-of-work',
														type: 'span',
														props: {
															style: {
																color: 'gray',
																marginLeft: '30px',
															},
														},
														children: 'Work',
													},
													{
														uuid: 'price-of-work',
														type: 'WMGeneric',
														props: {
															style: {
																marginLeft: '30px',
																color: 'green',
															},
														},
														selectors: [
															{
																propName: 'children',
																data: {
																	$$WM__resolve: {
																		type: 'fn',
																		name: 'prependDollarSign',
																		args: [
																			{
																				$$WM__resolve: {
																					type: 'event',
																					index: 0,
																					path: ['amount'],
																				},
																			},
																		],
																	},
																},
															},
														],
														conditional: safeRenderManage,
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
});

const getContent = () => ({
	uuid: 'manage-drawer__content',
	type: 'div',
	props: {
		style: styles.content.main,
	},
	children: [
		{
			uuid: 'tri-notification',
			type: 'WMPaper',
			props: {
				style: {
					width: '95%',
					height: '80px',
					margin: '0 auto',
					marginTop: '1em',
					zDepth: 2,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
				},
			},
			children: [
				{
					uuid: 'manage_card_one',
					type: 'div',
					props: {
						style: {
							width: '33%',
							height: '60px',
							display: 'inline-block',
							marginTop: '10px',
						},
					},
					children: [
						{
							uuid: 'mco_container',
							type: 'div',
							props: {
								style: {
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'center',
									height: '100%',
								},
							},
							children: [
								{
									uuid: 'mco_icon',
									type: 'WMFontIcon',
									props: {
										style: {
											display: 'block',
											lineHeight: '80px',
											fontSize: '50px',
											color: 'green',
										},
										className: 'material-icons',
									},
									children: 'attach_money',
								},
								{
									uuid: 'mco_inner_container',
									type: 'div',
									props: {
										style: {
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
										},
									},
									children: [
										{
											uuid: 'mcoic_title',
											type: 'div',
											props: {
												style: {
													fontSize: '0.5em',
												},
											},
											children: 'Amount',
										},
										{
											uuid: 'mcoic_content',
											type: 'div',
											children: [
												{
													uuid: 'mcoicc_amount',
													type: 'WMGeneric',
													props: {
														style: {
															fontSize: '1em',
															color: 'green',
														},
													},
													selectors: [
														{
															propName: 'children',
															data: {
																$$WM__resolve: {
																	type: 'fn',
																	name: 'concat',
																	args: [
																		'Total: ',
																		{
																			$$WM__resolve: {
																				type: 'fn',
																				name: 'reduceLineItems',
																				args: [
																					{
																						$$WM__resolve: {
																							type: 'state',
																							path: ['MANAGE', 'currentData', 'orderItems'],
																							toJS: true,
																						},
																					},
																				],
																			},
																		},
																	],
																},
															},
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					uuid: 'manage_card_two',
					type: 'div',
					props: {
						style: {
							width: '33%',
							height: '60px',
							position: 'relative',
							display: 'inline-block',
							marginTop: '10px',
						},
					},
					children: [
						{
							uuid: 'border-div-3',
							type: 'div',
							props: {
								style: {
									position: 'absolute',
									top: '15%',
									bottom: '15%',
									width: '2px',
									borderLeft: '1px solid black',
								},
							},
						},
						{
							uuid: 'mct-container',
							type: 'div',
							props: {
								style: {
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
									height: '100%',
								},
							},
							children: [
								{
									uuid: 'mct-avatar',
									type: 'WMAvatar',
									props: {
										size: 40,
										src: 'https://atmosphere.anaren.com/sites/default/files/picture-default_2614.png',
									},
								},
								{
									uuid: 'mct-inner-container',
									type: 'div',
									props: {
										style: {
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											marginLeft: '1em',
										},
									},
									children: [
										{
											uuid: 'mct-span1',
											type: 'span',
											props: {
												style: {
													fontSize: '0.7em',
												},
											},
											children: 'Payee',
										},
										{
											uuid: 'mct-span2',
											type: 'WMGeneric',
											props: {
												style: {
													fontSize: '1.2em',
													color: 'blue',
												},
											},
											selectors: [
												{
													propName: 'children',
													data: {
														$$WM__resolve: {
															type: 'state',
															path: ['MANAGE', 'currentData', 'sellerUserUuid'],
														},
													},
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					uuid: 'manage_card_three',
					type: 'div',
					props: {
						style: {
							width: '33%',
							height: '60px',
							position: 'relative',
							display: 'inline-block',
							marginTop: '10px',
						},
					},
					children: [
						{
							uuid: 'border-div-3',
							type: 'div',
							props: {
								style: {
									position: 'absolute',
									top: '15%',
									bottom: '15%',
									width: '2px',
									borderLeft: '1px solid black',
								},
							},
						},
						{
							uuid: 'mct-container',
							type: 'div',
							props: {
								style: {
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
									height: '100%',
								},
							},
							children: [
								{
									uuid: 'mctt-icon',
									type: 'WMFontIcon',
									props: {
										style: {
											display: 'block',
											lineHeight: '80px',
											fontSize: '50px',
											color: 'gray',
										},
										className: 'material-icons',
									},
									children: 'today',
								},
								{
									uuid: 'mct-inner-container',
									type: 'div',
									props: {
										style: {
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											marginLeft: '1em',
										},
									},
									children: [
										{
											uuid: 'mct-span1',
											type: 'span',
											props: {
												style: {
													fontSize: '0.7em',
												},
											},
											children: 'Scheduled for',
										},
										{
											uuid: 'mct-span2',
											type: 'WMGeneric',
											props: {
												style: {
													fontSize: '0.8em',
													color: 'gray',
												},
											},
											selectors: [
												{
													propName: 'children',
													data: {
														$$WM__resolve: {
															type: 'fn',
															name: 'formatDate',
															args: [
																{
																	$$WM__resolve: {
																		type: 'state',
																		path: ['MANAGE', 'currentData', 'scheduledInvoiceDate'],
																	},
																},
															],
														},
													},
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			uuid: 'order-container',
			type: 'WMPaper',
			props: {
				style: {
					display: 'flex',
					flexDirection: 'column',
					height: '210px',
					width: '95%',
					zDepth: 2,
					margin: '0 auto',
					marginTop: '1em',
				},
			},
			children: [
				{
					uuid: 'order-container-top-row',
					type: 'div',
					props: {
						style: {
							display: 'flex',
							flexDirection: 'row',
							lineHeight: '24px',
							marginTop: '0.5em',
							marginLeft: '20px',
						},
					},
					children: [
						{
							uuid: 'order-container-top-row-font-icon',
							type: 'WMFontIcon',
							props: {
								style: {
									fontSize: '24px',
									color: 'orange',
								},
								className: 'material-icons',
							},
							children: 'hourglass_empty',
						},
						{
							uuid: 'order-container-top-row-span',
							type: 'span',
							props: {
								style: {
									fontSize: '18px',
									color: 'orange',
								},
							},
							children: ' Draft',
						},
					],
				},
				getLineItems(),
				{
					uuid: 'some-ceiling',
					type: 'div',
					props: {
						style: {
							height: '20px',
						},
					},
				},
				{
					uuid: 'annoying-div-to-contain-divider',
					type: 'div',
					props: {
						style: {
							width: '90%',
							margin: '0 auto',
						},
					},
					children: [
						{
							uuid: 'some-divider-in-this-thing',
							type: 'WMDivider',
						},
					],
				},
				{
					uuid: 'some-floor',
					type: 'div',
					props: {
						style: {
							height: '20px',
						},
					},
				},
				{
					uuid: 'order-container-bottom-row',
					type: 'div',
					props: {
						style: {
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'flex-end',
							justifyContent: 'flex-end',
						},
					},
					children: [
						{
							uuid: 'total-money-bottom-row',
							type: 'span',
							props: {
								style: {
									color: 'black',
									marginRight: '0.3em',
								},
							},
							children: 'Total: ',
						},
						{
							uuid: 'money-bottom-row',
							type: 'WMGeneric',
							props: {
								style: {
									color: 'green',
									marginRight: '2.3em',
								},
							},
							selectors: [
								{
									propName: 'children',
									data: {
										$$WM__resolve: {
											type: 'fn',
											name: 'reduceLineItems',
											args: [
												{
													$$WM__resolve: {
														type: 'state',
														path: ['MANAGE', 'currentData', 'orderItems'],
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
				},
			],
		},
	],
});

export default getContent;
