import Immutable, { Map, List } from 'immutable';
//import * as types from '../constants/actionTypes';

const initialState = new Map({
	toggles: new List([
		{
			name: 'Test Toggle',
			key: 'testToggle',
			description: 'just a test yall',
			defaultValue: 'false',
			createdOn: new Date(1513713075*1000),
			updatedOn: new Date(1513713075*1000),
		},
		{
			name: 'Test Toggle 2',
			key: 'testToggle2',
			description: 'Another test!',
			defaultValue: 'true',
			createdOn: new Date(1513413075*1000),
			updatedOn: new Date(1513513075*1000),
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
