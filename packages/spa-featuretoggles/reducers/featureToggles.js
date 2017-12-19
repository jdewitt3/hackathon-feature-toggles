import Immutable from 'immutable';
import FeatureToggle from './FeatureToggle';
//import * as types from '../constants/actionTypes';

const initialFeatureTogglesState = new FeatureToggle({});

const featureToggles = (
	state = initialFeatureTogglesState,
	{
		type,
		value,
	}
) => {
	switch (type) {
	default:
		return state;
	}
};
