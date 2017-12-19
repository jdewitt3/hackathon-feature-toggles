import Immutable, { Map, List } from 'immutable';
//import * as types from '../constants/actionTypes';

const initialState = new Map({
	toggles: new List([
		{
			name: 'Test Toggle',
			key: 'testToggle',
			description: 'just a test yall',
			defaultValue: 'false',
			createdOn: new Date(1513713075),
			updatedOn: new Date(1513713075),
		}
	])
});

const reducer = (
	state = initialState,
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

export { initialState };
export default reducer;
