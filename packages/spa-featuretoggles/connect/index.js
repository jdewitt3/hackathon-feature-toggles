//import * as actions from './../actions';

export const mapStateToProps = (state) => {
	return state.toJS();
};

export const mapDispatchToProps = (dispatch, ownProps) => {
	/* const {
		csrf,
	} = ownProps; */
	return {
		updateFormProp: prop => value => {
			dispatch({
				type: 'UPDATE_FORM_PROP',
				prop,
				value
			});
		},
		cancelForm: () => {
			dispatch({
				type: 'CANCEL_FORM',
			});
		},
		saveForm: () => {
			dispatch({
				type: 'SAVE_FORM',
			});
		},
		newToggleForm: () => {
			dispatch({
				type: 'NEW_FORM',
			});
		},
		editForm: (idx) => {
			dispatch({
				type: 'EDIT_FORM',
				value: idx
			});
		}
		/*fetchCompanyInfo: (companyNumber, isPublic) => {
			dispatch(actions.fetchCompanyInfo(companyNumber, isPublic, csrf));
		},
		toggleFollowCompany: (companyNumber, followedByUser) => {
			dispatch(actions.toggleFollowCompany(companyNumber, csrf, followedByUser));
		}, */
	};
};
