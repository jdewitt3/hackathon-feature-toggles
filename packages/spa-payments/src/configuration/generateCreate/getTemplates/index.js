import styles from '../styles';

const getTemplates = CREATE => [
	{
		uuid: `create-modal-${CREATE.uuid}__templates`,
		type: 'WMFlatButton',
		state: {
			actions: [
				{
					type: 'CREATE__SHOW_TEMPLATES',
					path: ['CREATE', 'showingTemplates'],
					propName: 'onClick',
					operation: 'setIn',
					customData: {
						__anchorEl: { argIndex: 0, argPath: ['currentTarget'] },
						open: true,
					},
				},
			],
		},
		props: {
			label: 'Templates',
			style: styles.templates.button,
			labelStyle: styles.templates.label,
			icon: {
				$$WM__component: {
					uuid: `create-modal-${CREATE.uuid}__add-remove-fields-icon`,
					type: 'WMFontIcon',
					props: {
						className: 'material-icons',
						style: styles.templates.icon,
					},
					children: 'content_copy',
				},
			},
		},
	},
	{
		uuid: `create-modal-${CREATE.uuid}__available-templates`,
		type: 'WMPopover',
		state: {
			actions: [
				{
					type: 'CREATE__SHOW_TEMPLATES',
					path: ['CREATE', 'showingTemplates'],
					propName: 'onRequestClose',
					operation: 'setIn',
					customData: {
						anchorEl: null,
						open: false,
					},
				},
			],
			selectors: [
				{
					propName: 'open',
					path: ['CREATE', 'showingTemplates', 'open'],
					defaultValue: false,
				},
				{
					propName: 'anchorEl',
					path: ['CREATE', 'showingTemplates', 'anchorEl'],
					defaultValue: null,
				},
			],
		},
		children: {
			uuid: `create-modal-${CREATE.uuid}__available-fields-menu`,
			type: 'WMMenu',
			state: {
				actions: [
					{
						type: 'CREATE__SELECT_TEMPLATE',
						path: ['CREATE', 'selectedTemplate'],
						propName: 'onChange',
						operation: 'setIn',
						customData: {
							__value: { argIndex: 1 },
						},
					},
				],
				selectors: [
					{
						path: ['CREATE', 'templates'],
						propName: 'templates',
						defaultValue: [],
					},
					{
						path: ['CREATE', 'selectedTemplate', 'value'],
						propName: 'value',
						defaultValue: null,
					},
				],
			},
			iterate: {
				fromPropName: 'templates',
				operation: 'map',
				props: [
					{ componentProp: 'primaryText', dataProp: 'name', operation: 'get' },
					{ componentProp: 'value', dataProp: 'value', operation: 'get' },
					{ componentProp: 'key', dataProp: 'uuid', operation: 'get' },
				],
			},
			children: {
				uuid: '___',
				type: 'WMMenuItem',
			},
		},
	},
];

export default getTemplates;
