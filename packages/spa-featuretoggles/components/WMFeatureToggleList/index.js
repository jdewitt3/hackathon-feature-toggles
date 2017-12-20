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
			initList
		} = this.props;
		initList();
	}

	render () {
		const timeAgoEnglish = new javascriptTimeAgo('en-US');
		const {
			filteredToggles,
			editForm
		} = this.props;

		const toggleListing = [];
		for (let i = 0; i < filteredToggles.length; i += 1) {
	      toggleListing.push(
					<WMCard
						expandable={ false }
						key={i}
					>
						<div style={ styles.toggleListItem }>
							<div style={ styles.toggleListLeft }>
								<div style={ styles.label }>Feature Name</div>
								<div style={ styles.toggleNameValue }>{ filteredToggles[i].name }</div>
								<div style={ styles.dateLine }>Added { timeAgoEnglish.format(filteredToggles[i].createdOn) } | Updated { timeAgoEnglish.format(filteredToggles[i].createdOn) }</div>
								<div>{ filteredToggles[i].description }</div>
							</div>
							<div style={ styles.toggleListMidLeft }>
								<div style={ styles.label }>Key</div>
								<div>{ filteredToggles[i].key }</div>
							</div>
							<div style={ styles.toggleListMidRight }>
								<div style={ styles.label }>Default Value</div>
								<div>{ filteredToggles[i].defaultValue }</div>
							</div>
							<div style={ styles.toggleListRight }>
								<WMToggle
									label="Production Enabled"
									toggled
									onToggle={ () => console.log('i toggle') }
								/>
							</div>
							<div>
								<WMRaisedButton
									label="Edit"
									style={ { display: 'block', marginBottom: '5px' } }
									onClick={() => editForm(i)}
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
