import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect, Provider } from 'react-redux';
import { generate } from '@workmarket/spa-generate';
import { WMCircularProgress } from '@workmarket/front-end-components';
import ComponentWrapper from '../components/ComponentWrapper';
import appbarConfig from '../configs/appbar';
import drawerConfig from '../configs/drawer';
import './index.css';

injectTapEventPlugin();

const AppBar = () => <ComponentWrapper>{ appbarConfig() }</ComponentWrapper>;
const Drawer = () => <ComponentWrapper>{ drawerConfig() }</ComponentWrapper>;
const store = generate.store();


const mapStateToProps = state => ({
	style: {
		marginLeft: state.CHROME.get('mainNav').get('open') ? '220px' : '0',
	},
});
let Main = ({
	children,
	id,
	style,
}) => {
	return (
		<main id={ id } style={ style }>
			{ children }
		</main>
	);
};
Main.propTypes = {
	children: PropTypes.any,
	id: PropTypes.string,
	style: PropTypes.object,
};
Main = connect(mapStateToProps)(Main);


class DefaultLayout extends React.Component {
	static propTypes = {
		children: PropTypes.func,
	}

	state = {
		error: false,
		uiGenReady: false,
	};

	componentWillMount () {
		generate.initialization.then(() => {
			this.setState({
				uiGenReady: true,
			});
		}).catch(() => {
			this.setState({
				error: true,
			});
		});
	}

	render () {
		const { updateLayoutFunction } = this;

		return (
			<Provider store={ store }>
				<div>
					<Helmet
						title="Work Market SPA"
						meta={ [
							{ name: 'description', content: 'Sample' },
							{ name: 'keywords', content: 'sample, something' },
						] }
					/>
					<header><AppBar /></header>
					<nav><Drawer /></nav>
					<Main id="wm-main-content">
						{ !this.state.uiGenReady && !this.state.error &&
							<WMCircularProgress style={ {
								position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, margin: 'auto',
							} }
							/>
						}
						{
							this.state.uiGenReady &&
							this.props.children({ ...this.props, updateLayoutFunction })
						}
						{ this.state.error &&
							<p>Oops! We experienced an error. Please try reloading this page.</p>
						}
					</Main>
				</div>
			</Provider>
		);
	}
}

export default DefaultLayout;
