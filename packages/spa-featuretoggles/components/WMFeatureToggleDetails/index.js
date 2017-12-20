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
	WMAutocomplete,
	WMChip,
	commonStyles,
} from '@workmarket/front-end-components';

// import {
// 	mapStateToProps,
// 	mapDispatchToProps,
// } from '../../connect';

const dataSource = [
  {textKey: 'Reliable Electric Co', valueKey: '1'},
  {textKey: 'New York Times', valueKey: '2'},
	{textKey: 'Walgreens', valueKey: '3'},
	{textKey: 'Some Company', valueKey: '4'},
];

const WMFeatureToggleDetails = ({
	isDirtyState,
	isRolloutEnabled,
	perecentValue,
	typeValue,
	selectCompany,
	selectedCompanies
}) => {
	const companyChips = [];
	console.log(selectedCompanies);
	for(let i = 0; i < selectedCompanies.length; i+=1) {
		console.log(selectedCompanies[i]);
		companyChips.push(<WMChip
			id="wm-chip-test"
			label={ selectedCompanies[i].textKey }
			meta={ { } }
			onRemove={ () => console.log('remove') }
		/>);
	}
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
								value={ "closedBeta" }
								style={ { display: 'inline-block', float: 'left' } }
								onChange={ console.log('onChange select type') }
							>
								<WMMenuItem value="requestBased" primaryText="Request Based" />
								<WMMenuItem value="sticky" primaryText="Sticky" />
								<WMMenuItem value="openBeta" primaryText="Open Beta" />
								<WMMenuItem value="closedBeta" primaryText="Closed Beta" />
							</WMSelectField>
							<div
								style={ { display: 'inline-block', width: '300px', float: 'left', padding: '8px 0px 0px 35px' } }
							>
								<WMSlider
									defaultValue={ 1 }
									disabled
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
								style={ { width: '100px', display: 'inline-block', margin: '10px', position: 'relative', top: '10px' } }
							>
								<WMToggle
									label={ 'Enable' }
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
					Industries
				<WMTab label="Companies">
				<WMHeading
					level="2"
				>
					Add Companies
				</WMHeading>
					<WMAutocomplete
						floatingLabelText="Add a Company"
						id="example-autocomplete"
						dataSource={ dataSource }
						filter="caseInsensitiveFilter"
						dataSourceConfig={{ text: 'textKey', value: 'valueKey'}}
						maxSearchResults={ 10 }
						onNewRequest={ (selection) => selectCompany(selection) }
					/>
					<div>
						{ companyChips }
					</div>
				</WMTab>
				<WMTab label="Org Unit">Org Unit</WMTab>
				<WMTab label="Users">Users</WMTab>
				<WMTab label="Go Live">Go Live</WMTab>
			</WMTabs>
		</WMPaper>
	);
};

export default WMFeatureToggleDetails;
