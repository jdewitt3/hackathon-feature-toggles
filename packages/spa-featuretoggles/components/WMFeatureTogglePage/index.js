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
	WMHeading
} from '@workmarket/front-end-components';
import {
	mapStateToProps,
	mapDispatchToProps,
} from '../../connect';
import styles from '../../styles';

class WMFeatureTogglePage extends Component {
	componentDidMount () {
		const {

		} = this.props;
		//fetchCompanyInfo(companyNumber, isPublic, csrf);
	}

	render () {
		const {

		} = this.props;
		return (
			<div
			>
				<WMPaper
					style={ styles.container }
				>
					<WMTable
						striped
					>
						<WMHeading>
							Feature Toggles
						</WMHeading>
						<WMTableHeader>
						<WMTableHeaderCell>Cell One</WMTableHeaderCell>
						<WMTableHeaderCell>Cell Two</WMTableHeaderCell>
						</WMTableHeader>
						<WMTableBody>
							<WMTableRow>
								<WMTableCell>Cell One</WMTableCell>
								<WMTableCell>Cell Two</WMTableCell>
							</WMTableRow>
						</WMTableBody>
					</WMTable>
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
