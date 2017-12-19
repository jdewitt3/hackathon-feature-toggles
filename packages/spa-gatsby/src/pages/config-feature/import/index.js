import React from 'react';
import config from './config.json';
import ComponentWrapper from '../../../components/ComponentWrapper';

const ConfigPage = () => (
	<ComponentWrapper>
		{ config }
	</ComponentWrapper>
);

export default ConfigPage;
