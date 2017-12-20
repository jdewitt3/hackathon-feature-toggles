import Immutable, { Map, List } from 'immutable';
import * as types from '../constants/actionTypes';
const blankForm = new Map({
	isActive: false,
	editIdx: null,
	props: new Map({
		name: '',
		key: '',
		defaultValue: 'false',
		description: '',
	}),
});

const initialState = new Map({
	toggles: new List([
		{
			name: 'Test Feature',
			key: 'testFeature',
			description: 'just a test yall',
			defaultValue: 'false',
			createdOn: new Date(1513713075*1000),
			updatedOn: new Date(1513713075*1000),
		},
		{
			name: 'Test Feature 2',
			key: 'testFeature2',
			description: 'Another test!',
			defaultValue: 'true',
			createdOn: new Date(1513413075*1000),
			updatedOn: new Date(1513513075*1000),
		},
		{
			name: 'New Dashboard',
			key: 'newDashboard',
			description: 'The new assignment dashboard',
			defaultValue: 'false',
			createdOn: new Date(1513413075*1000),
			updatedOn: new Date(1513513075*1000),
		},
		{
			name: 'Vendor Pools',
			key: 'vendorPools',
			description: 'Vendor pools!',
			defaultValue: 'true',
			createdOn: new Date(1513413075*1000),
			updatedOn: new Date(1513513075*1000),
		}
	]),
	filteredToggles: new List([]),
	form: blankForm,
});

const reducer = (
	state = initialState,
	action
) => {
	switch (action.type) {
	case 'UPDATE_FORM_PROP':
		return state.setIn(['form', 'props', action.prop], action.value);
	case 'CANCEL_FORM':
		return state.set('form',  blankForm);
	case 'SAVE_FORM':
		if (state.getIn(['form', 'editIdx'])) {
			return state
				.setIn(
					['toggles', state.getIn(['form', 'editIdx'])],
					state.getIn(['form', 'props'])
						.set('updatedOn', new Date())
				)
				.set('form',  blankForm);
		}

		return state
			.set(
				'toggles',
				state.get('toggles').unshift(
					state.getIn(['form', 'props'])
						.set('createdOn', new Date())
						.set('updatedOn', new Date())
				)
			)
			.set('form',  blankForm);
	case 'NEW_FORM':
			return state.setIn(['form', 'isActive'], true);
	case 'EDIT_FORM':
			return state
				.setIn(['form', 'editIdx'], action.value)
				.setIn(['form', 'props'], state.getIn(['toggles', action.value]))
				.setIn(['form', 'isActive'], true);
	case 'INIT_LIST':
			return state
				.set('filteredToggles', state.get('toggles'));
	case 'SEARCH_FEATURE_LIST':
			let allFeatures = state.get('toggles');
			let filteredFeatures = allFeatures.filter((feature) => {
				if (feature.name.toLowerCase().indexOf(action.value.toLowerCase()) > -1) {
					return true;
				}
				return false;
			});
			return state
				.set('filteredToggles', filteredFeatures);
	default:
		return state;
	}
};

export { initialState };
export default reducer;
