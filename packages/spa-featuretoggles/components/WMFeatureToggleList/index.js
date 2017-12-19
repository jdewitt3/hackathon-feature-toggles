import React, { Component } from 'react';
import {
	connect,
} from 'react-redux';
import PropTypes from 'prop-types';
import Radium from 'radium';
import javascriptTimeAgo from 'javascript-time-ago'
import {
	WMCard,
	WMToggle,
	WMRaisedButton
} from '@workmarket/front-end-components';
import {
	mapStateToProps,
	mapDispatchToProps,
} from '../../connect';
import styles from '../../styles';

javascriptTimeAgo.locale(require('javascript-time-ago/locales/en'));
require('javascript-time-ago/intl-messageformat-global');
require('intl-messageformat/dist/locale-data/en');

class WMFeatureToggleList extends Component {
	componentDidMount () {
		const {

		} = this.props;
		//fetchCompanyInfo(companyNumber, isPublic, csrf);
	}

	render () {
		console.log(this.props);
		const timeAgoEnglish = new javascriptTimeAgo('en-US');
		const {
			toggles
		} = this.props;

		const toggleListing = [];
		for (let i = 0; i < toggles.length; i += 1) {
	      toggleListing.push(
					<WMCard
						expandable={ false }
						key={i}
					>
						<div style={ styles.toggleListItem }>
							<div style={ styles.toggleListLeft }>
								<div style={ styles.toggleNameLabel }>Toggle Name</div>
								<div style={ styles.toggleNameValue }>{ toggles[i].name }</div>
								<div>{ timeAgoEnglish.format(toggles[i].createdOn) }</div>
								<div>{ toggles[i].description }</div>
							</div>
							<div style={ styles.toggleListMidLeft }>
								<div>Key</div>
								<div>{ toggles[i].key }</div>
							</div>
							<div style={ styles.toggleListMidRight }>
								<div>Default Value</div>
								<div>{ toggles[i].defaultValue }</div>
							</div>
							<div style={ styles.toggleListRight }>
								<WMToggle
									label="Enabled"
									toggled
									onToggle={ () => console.log('i toggle') }
								/>
							</div>
							<div>
								<WMRaisedButton
									label="Edit"
								/>
								<WMRaisedButton
									label="Delete"
								/>
							</div>
						</div>
					</WMCard>
				);
	  }

		return (
			<div
			>
				{ toggleListing }
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Radium(WMFeatureToggleList));

WMFeatureToggleList.propTypes = {

};

WMFeatureToggleList.defaultProps = {

};
