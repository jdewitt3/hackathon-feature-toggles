import React from 'react';
import PropTypes from 'prop-types';
import { StyleRoot } from 'radium';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import WMFeatureTogglePage from './components/WMFeatureTogglePage';

const store = configureStore();

const WMFeatureTogglesSPA = ({
}) => {
	return (
		<StyleRoot>
			<Provider store={ store }>
				<WMFeatureTogglePage />
			</Provider>
		</StyleRoot>
	);
};

export default WMFeatureTogglesSPA;

WMFeatureTogglesSPA.propTypes = {

};

WMFeatureTogglesSPA.defaultProps = {

};
