import React, { Component } from 'react';
import {
	connect,
} from 'react-redux';
import PropTypes from 'prop-types';
import Radium from 'radium';
import {
	WMPaper,
	WMTable,
	WMTableBody,
	WMTableRow,
	WMTableCell,
	WMTableHeader,
	WMTableHeaderCell,
	WMHeading,
	WMTextField,
	WMRaisedButton
} from '@workmarket/front-end-components';
import {
	mapStateToProps,
	mapDispatchToProps,
} from '../../connect';
import styles from '../../styles';
import WMFeatureToggleList from '../WMFeatureToggleList';
import WMFeatureForm from '../WMFeatureForm';

class WMFeatureTogglePage extends Component {
	componentDidMount () {
		const {
		} = this.props;
		//fetchCompanyInfo(companyNumber, isPublic, csrf);
	}

	render () {
		const {
			form,
			newToggleForm
			doSearch
		} = this.props;
		return (
			<div
			>
				<WMPaper
					style={ styles.container }
				>
					<div
						style={ styles.headerBar }
					>
						<WMTextField
							disabled={ false }
							id="search-toggles"
							placeholder="Search for a Feature"
							onChange={ (event, value) => doSearch(value) }
						/>
						<WMRaisedButton
							label="New Feature"
							primary
							style={ styles.newButton }
							onClick={newToggleForm}
						/>
					</div>
					<div>
						{form.isActive ? <WMFeatureForm /> : null}
						<WMFeatureToggleList />
					</div>
				</WMPaper>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Radium(WMFeatureTogglePage));

WMFeatureTogglePage.propTypes = {

};

WMFeatureTogglePage.defaultProps = {

};
