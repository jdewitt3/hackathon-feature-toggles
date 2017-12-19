// import generateInitialMount from '../generateInitialMount';

const makeZeroState = (CONFIG) => {
	return {
		uuid: `blank-state-${CONFIG.screenConfigurations.CREATE.uuid}`,
		type: 'WMZeroState',
		props: {
			headerImageSrc: '', // TODO
			headerImageAlt: `${CONFIG.businessEntity.name} Icon`,
			headerText: CONFIG.businessEntity.name, // TODO
			buttonLabel: `Create New ${CONFIG.businessEntity.name}`,
			textContent: CONFIG.businessEntity.name, // TODO
		},
		selectors: [
			{
				propName: 'dataSize',
				data: {
					$$WM__resolve: { type: 'state', path: ['DASHBOARD', 'dataSize'] },
				},
				defaultValue: 0,
			},
		],
		actions: [
			{
				propName: 'onButtonClick',
				sequence: [
					{
						type: 'CREATE__OPEN',
						path: ['CREATE', 'modalOpen'],
						operation: 'setIn',
						data: true,
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
							path: ['DASHBOARD', 'dataSize'],
						},
					},
					0,
				],
			},
		},
	};
};

const generateBlankState = CONFIG => ({
	type: 'div',
	uuid: 'startupcontainer12345',
	children: [
		makeZeroState(CONFIG),
		// generateInitialMount,
	],
});

export default generateBlankState;
