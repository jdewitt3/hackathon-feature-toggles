import { commonStyles } from '@workmarket/front-end-components';
import styles from '../styles';

const SaveTemplate = CREATE => ({
	uuid: `create-modal-${CREATE.uuid}__save-as-template`,
	type: 'div',
	children: [
		{
			uuid: `create-modal-${CREATE.uuid}__save-as-template-container`,
			type: 'div',
			props: {
				style: {
					display: 'flex',
					alignItems: 'center',
					height: '48px',
					paddingRight: '27px',
				},
			},
			state: {
				selectors: [
					{
						path: ['CREATE', CREATE.uuid, 'template', 'saving'],
						propName: 'data-saving',
						defaultValue: false,
					},
				],
			},
			conditional: [
				[{ __fromProp: 'data-saving' }, 'equals', false],
			],
			children: {
				uuid: `create-modal-${CREATE.uuid}__save-as-template-button`,
				type: 'WMFlatButton',
				state: {
					actions: [
						{
							type: 'CREATE__OPEN_SAVE_AS_TEMPLATE',
							path: ['CREATE', CREATE.uuid, 'template', 'saving'],
							propName: 'onClick',
							operation: 'setIn',
							data: true,
						},
					],
				},
				props: {
					primary: true,
					label: 'Save as Template',
				},
			},
		},
		{
			uuid: `create-modal-${CREATE.uuid}__save-as-template-name-container`,
			type: 'div',
			state: {
				selectors: [
					{
						path: ['CREATE', CREATE.uuid, 'template', 'saving'],
						propName: 'data-saving',
						defaultValue: false,
					},
				],
			},
			conditional: [
				[{ __fromProp: 'data-saving' }, 'equals', true],
			],
			props: {
				style: {
					display: 'flex',
					alignItems: 'center',
				},
			},
			children: [
				{
					uuid: `create-modal-${CREATE.uuid}__save-as-template-name`,
					type: 'WMTextField',
					props: {
						id: `create-modal-${CREATE.uuid}__save-as-template-name`,
					},
					state: {
						selectors: [
							{
								path: ['CREATE', CREATE.uuid, 'templateName', 'value'],
								propName: 'value',
								defaultValue: '',
							},
						],
						actions: [
							{
								type: 'CREATE__UPDATE_TEMPLATE_NAME',
								path: ['CREATE', CREATE.uuid, 'templateName'],
								propName: 'onChange',
								operation: 'setIn',
								customData: {
									__value: { argIndex: 1 },
								},
							},
						],
					},
				},
				{
					uuid: `create-modal-${CREATE.uuid}__save-as-template-submit`,
					type: 'WMIconButton',
					state: {
						actions: [
							{
								type: 'CREATE__OPEN_SAVE_AS_TEMPLATE',
								path: ['CREATE', CREATE.uuid, 'template', 'saving'],
								propName: 'onClick',
								operation: 'setIn',
								data: false,
							},
						],
					},
					props: {
						style: styles.footer.template.button,
						iconStyle: {
							...styles.footer.template.button.icon,
							color: commonStyles.colors.baseColors.green,
						},
					},
					children: [
						{
							uuid: `create-modal-${CREATE.uuid}__save-as-template-submit-icon`,
							type: 'WMFontIcon',
							props: {
								className: 'material-icons',
							},
							children: 'done',
						},
					],
				},
				{
					uuid: `create-modal-${CREATE.uuid}__save-as-template-cancel`,
					type: 'WMIconButton',
					state: {
						actions: [
							{
								type: 'CREATE__OPEN_SAVE_AS_TEMPLATE',
								path: ['CREATE', CREATE.uuid, 'template', 'saving'],
								propName: 'onClick',
								operation: 'setIn',
								data: false,
							},
						],
					},
					props: {
						style: styles.footer.template.button,
						iconStyle: styles.footer.template.button.icon,
					},
					children: [
						{
							uuid: `create-modal-${CREATE.uuid}__save-as-template-cancel-icon`,
							type: 'WMFontIcon',
							props: {
								className: 'material-icons',
							},
							children: 'close',
						},
					],
				},
			],
		},
	],
});

export default SaveTemplate;
