//import * as actions from './../actions';

export const mapStateToProps = (state) => {
	return state.toJS();
};

export const mapDispatchToProps = (dispatch, ownProps) => {
	/* const {
		csrf,
	} = ownProps; */
	return {
		/*fetchCompanyInfo: (companyNumber, isPublic) => {
			dispatch(actions.fetchCompanyInfo(companyNumber, isPublic, csrf));
		},
		toggleFollowCompany: (companyNumber, followedByUser) => {
			dispatch(actions.toggleFollowCompany(companyNumber, csrf, followedByUser));
		}, */
	};
};
