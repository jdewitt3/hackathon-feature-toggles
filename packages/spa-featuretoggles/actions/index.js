import * as types from '../constants/actionTypes';

const makeActionCreator = (type, ...argNames) => (...args) => {
	const action = { type };

	argNames.forEach((arg, index) => {
		action[argNames[index]] = args[index];
	});

	return action;
};

const searchFeatureList = makeActionCreator(types.SEARCH_FEATURE_LIST, 'value');
const initList = makeActionCreator('INIT_LIST');
export {
	searchFeatureList,
	initList
}
