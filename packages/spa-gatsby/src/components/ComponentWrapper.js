import React from 'react';
import PropTypes from 'prop-types';
import { generate } from '@workmarket/spa-generate';

class ComponentWrapper extends React.Component {
	static propTypes = {
		children: PropTypes.any,
		pathContext: PropTypes.object,
	}

	state = {
		newChildren: null,
	};

	componentWillMount () {
		const { pathContext } = this.props;
		const originalChildren = this.props.children;
		const children = Array.isArray(originalChildren) ? originalChildren : [originalChildren];
		const newChildren = [];

		generate.initialization.then(() => {
			if (pathContext) {
				newChildren.push(generate.component(pathContext.config));
			} else if (children.length) {
				children.forEach((child) => {
					newChildren.push(React.isValidElement(child) ? child : generate.component(child));
				});
			}

			if (newChildren.length) {
				this.setState({
					newChildren,
				});
			}
		});
	}

	render () {
		return <div>{ this.state.newChildren }</div>;
	}
}

export default ComponentWrapper;
