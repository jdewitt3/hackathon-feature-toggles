import React from 'react';
import featureTogglesConfig from '@workmarket/spa-featuretoggles';
import ComponentWrapper from '../components/ComponentWrapper';

const FeatureTogglesPage = () => (
    <ComponentWrapper>
        { featureTogglesConfig }
    </ComponentWrapper>
);

export default FeatureTogglesPage;
