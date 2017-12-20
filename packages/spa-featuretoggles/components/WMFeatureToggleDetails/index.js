import React, { Component } from 'react';

import {
	WMTabs,
	WMTab,
	WMHeading,
	WMTextField,
	WMRaisedButton,
	WMToggle,
	WMMenuItem,
	WMPaper,
	WMSlider,
	WMSelectField,
	commonStyles,
} from '@workmarket/front-end-components';

// import {
// 	mapStateToProps,
// 	mapDispatchToProps,
// } from '../../connect';

const WMFeatureToggleDetails = ({
	isDirtyState,
	isRolloutEnabled,
	perecentValue,
	typeValue,
}) => {
	return (
		<WMPaper
			style={ { padding: '10px'} }
		>
			<WMTabs
				initialSelectedIndex={ 0 }
				onChange={ console.log('onChange') }
			>
				<WMTab
					label="Rollout Strategy"
				>
					<div
						style={ { display: 'flex', minHeight: '3em' } }
					>
						<div
							style={ { flex: 4 } }
						>
							<WMHeading
								level="2"
							>
								Default Rollout Strategy
							</WMHeading>
							<div
								style={ { width: '100%' } }
							>
								<WMTextField
									disabled={ false }
									id="rollout-strategy-value"
									defaultValue="true"
									floatingLabelText="Rollout Strategy Value"
									floatingLabelFixed
								/>
							</div>
							<WMSelectField
								autoWidth
								floatingLabelText="Type"
								floatingLabelFixed
								value={ typeValue }
								style={ { display: 'inline-block', float: 'left' } }
								onChange={ console.log('onChange select type') }
							>
								<WMMenuItem value="requestBased" primaryText="Request Based" />
								<WMMenuItem value="sticky" primaryText="Sticky" />
								<WMMenuItem value="openBeta" primaryText="Open Beta" />
								<WMMenuItem value="openBeta" primaryText="Closed Beta" />
							</WMSelectField>
							<div
								style={ { display: 'inline-block', width: '300px', float: 'left', padding: '8px 0px 0px 35px' } }
							>
								<WMSlider
									defaultValue={ 1 }
									label="Percent"
									max={ 100 }
									min={ 1 }
									name="percent"
									onChange={ console.log('slider onchange') }
									step={ 1 }
									value={ perecentValue }
								/>
								<span>{ perecentValue }</span>
							</div>
						</div>
						<div
							style={ { flex: 1 } }
						>
							<div
								style={ { width: '100px', display: 'inline-block', margin: '10px' } }
							>
								<WMToggle
									label={ isRolloutEnabled ? 'Enabled' : 'Disabled' }
									toggled={ isRolloutEnabled }
									onToggle={ () => console.log('i toggle') }

								/>
							</div>
							<WMRaisedButton
								primary
								label="Save"
								disabled={ !isDirtyState }
								style={ { width: '100px', display: 'inline-block' } }
							/>
						</div>
					</div>
				</WMTab>
				<WMTab label="Industries">Industries</WMTab>
				<WMTab label="Companies">Companies</WMTab>
				<WMTab label="Org Unit">Org Unit</WMTab>
				<WMTab label="Users">Users</WMTab>
				<WMTab label="Go Live">Go Live</WMTab>
			</WMTabs>
		</WMPaper>
	);
};

export default WMFeatureToggleDetails;
