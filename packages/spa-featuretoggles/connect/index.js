import * as actions from './../actions';
import fetch from 'isomorphic-fetch';

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
		saveForm: (form) => {
			dispatch({
				type: 'SAVE_FORM',
			});
			// tie in request
			console.log(form.props);
			const data = {
				overrides: [
					{
						name: form.props.name,
						dimension: { default: true },
						value: form.props.defaultValue,
						metadata: {
							key: form.props.key,
							description: form.props.description,
							createdOn: Date.now(),
							updatedOn: Date.now()
						}
					}
				]
			}
			fetch('AUTH CONNECTION STRING', {
				method: 'POST',
				headers: new Headers({
					'content-type': 'application/json'
				})
			}).then((response) => {
				response.json().then((responseData) => {
					const token = `Bearer ${responseData.result.payload[0].accessToken}`;
					console.log(token);
					return fetch('http://api-gtw.dev.workmarket.com/v3/setting/create', {
						credentials: 'same-origin',
						method: 'POST',
						body: JSON.stringify(data),
						headers: new Headers({
							'authorization': token,
							'Content-Type': 'application/json'
						}),
					})
					.then((response) => {
						console.log(response);
					});
				})
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
		},
    doSearch: (value) => {
			console.log(value);
			dispatch(actions.searchFeatureList(value));
		},
		initList: () => {
			dispatch(actions.initList());
		}
	};
};
