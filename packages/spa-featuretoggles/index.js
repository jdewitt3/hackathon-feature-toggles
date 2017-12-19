const functions = {
	prependDollarSign: (amount) => {
		return `$${amount}`;
	},
};

const store = {
	'FOO-FEATURE': {
		initialState: {
			data: {
				submitLabel: 'Pay Now',
			},
		},
		handlers: [
			'FOO-FEATURE__UPDATE',
		],
	},
};

const config = {
	uuid: 'featuretoggle-feature',
	type: 'div',
	props: {
		className: 'container',
	},
	children: [
		{
			uuid: 'featuretoggle-feature-h',
			type: 'h1',
			children: 'Feature Toggles',
		},
		{
			uuid: 'foo-feature-p',
			type: 'p',
			children: 'Adipisicing duis sit in deserunt mollit velit. Mollit consequat Lorem cillum qui amet ad excepteur dolore id laborum et irure et. Anim eiusmod ullamco incididunt qui do elit et dolore minim occaecat sit. Dolor voluptate proident cillum eiusmod. Velit amet deserunt aliqua irure velit dolor eu voluptate voluptate occaecat eu eiusmod non. Ipsum commodo reprehenderit voluptate magna dolor proident consequat qui eu sunt duis cupidatat elit quis. Dolore sint minim mollit qui labore aliqua et id aliquip.',
		},
	],
};

export {
	functions,
	store,
	config as default,
};
