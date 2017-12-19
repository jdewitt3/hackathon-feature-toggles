import styles from '../styles';

const CreateAnother = CREATE => ({
	uuid: `create-modal-${CREATE.uuid}__create-another`,
	type: 'WMCheckbox',
	state: {
		selectors: [
			{
				data: {
					$$WM_fromState: ['CREATE', CREATE.uuid, 'create-another', 'checked'],
				},
				propName: 'checked',
				defaultValue: false,
			},
		],
		actions: [
			{
				propName: 'onCheck',
				sequence: [
					{
						path: ['CREATE', CREATE.uuid, 'create-another'],
						type: 'CREATE__CREATE_ANOTHER',
						operation: 'setIn',
						data: {
							checked: {
								$$WM_argPath: ['checked'],
								$$WM_argIndex: 1,
							},
						},
					},
				],
			},
		],
	},
	props: {
		label: 'Create Another',
		style: styles.footer.createAnother,
	},
});

export default CreateAnother;
