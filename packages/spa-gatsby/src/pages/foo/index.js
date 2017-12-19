import React from 'react';
import fooConfig from '@workmarket/spa-foo';
import ComponentWrapper from '../../components/ComponentWrapper';

const FooPage = () => (
	<ComponentWrapper>
		{ fooConfig }
	</ComponentWrapper>
);

export default FooPage;
