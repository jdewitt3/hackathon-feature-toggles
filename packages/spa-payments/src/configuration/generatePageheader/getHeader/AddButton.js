import styles from '../styles';

const AddButton = PAGEHEADER => ({
	uuid: 'page-header_add-button-toolbar-group',
	type: 'WMToolbarGroup',
	// state: {
	// 	selectors: [
	// 		{
	// 			data: {
	// 				$$WM__composition: [
	// 					{
	// 						initialValue: {
	// 							$$WM__fromState: ['PAGEHEADER', 'addButtonEnabled'],
	// 						},
	// 					},
	// 				],
	// 			},
	// 			propName: 'data-addButtonEnabled',
	// 			defaultValue: PAGEHEADER.children[0].label,
	// 		},
	// 	],
	// 	actions: [
	// 		{
	// 			propName: 'onClick',
	// 			sequence: [
	// 				{
	// 					type: 'CREATE__OPEN',
	// 					path: ['CREATE', 'modalOpen'],
	// 					operation: 'setIn',
	// 					data: true,
	// 				},
	// 			],
	// 		},
	// 	],
	// },
	// conditional: [
	// 	[{ $$WM__fromProp: 'data-addButtonEnabled' }, 'not', 'equals', null],
	// ],
	children: [
		{
			uuid: 'page-header__add-button',
			type: 'WMFlatButton',
			props: {
				icon: {
					$$WM__resolve: {
						type: 'component',
						config: {
							uuid: 'page-header__add-button-icon',
							type: 'WMFontIcon',
							props: {
								className: 'material-icons',
								style: styles.addButtonIconStyle,
							},
							children: 'add',
						},
					},
				},
				labelStyle: styles.addButtonStyle,
				label: 'Create',
			},
			actions: [
				{
					propName: 'onClick',
					sequence: [
						{
							type: 'CREATE__OPEN',
							path: ['CREATE', 'modalOpen'],
							operation: 'setIn',
							data: true,
						},
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
						},
					],
				},
			],
		},
	],
});

export default AddButton;
