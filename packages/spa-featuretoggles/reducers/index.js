import { Map } from 'immutable';
import {
	combineReducers,
} from 'redux';
//import * as types from '../constants/actionTypes';
import featureToggles, {
	initialFeatureTogglesState,
} from './';

/* const companyInfoReceived = (state = false, {
	type,
}) => {
	switch (type) {
	case types.RECEIVE_COMPANY_INFO:
		return true;
	default:
		return state;
	}
}; */

const initialState = Map({
	featureToggle: initialFeatureTogglesState
});

export {
	initialState,
};

export default combineReducers({
	featureToggles
});
