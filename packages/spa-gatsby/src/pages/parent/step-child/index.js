import React from 'react';
import ComponentWrapper from '../../../components/ComponentWrapper';

const StepChildPage = () => (
	<ComponentWrapper>
		{{
			type: 'div',
			uuid: 'index-container',
			props: {
				className: 'container',
			},
			children: [
				{
					type: 'h1',
					uuid: 'index-header',
					children: 'Step-Child',
				},
				{
					type: 'p',
					uuid: 'index-p1',
					children: [
						'Veniam culpa culpa dolor sint nisi. Id culpa excepteur incididunt velit tempor ea non mollit laboris tempor. Esse incididunt et occaecat irure enim consequat nisi. Do exercitation aliqua voluptate laboris qui incididunt elit non. Ex nostrud do tempor dolor cupidatat elit proident eiusmod labore cillum incididunt Lorem. Culpa cupidatat officia adipisicing et et eiusmod. Excepteur sit ad irure esse culpa.'
					],
				},
				{
					type: 'Link',
					uuid: 'tmp-link',
					props: {
						to: '/parent',
					},
					children: 'Go back to step-parent',
				},
			],
		}}
	</ComponentWrapper>
);

export default StepChildPage;
