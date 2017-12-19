import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import graphql from 'graphql';

const ReactFeature = ({ data }) => (
	<div className="container">
		<h1>React Feature</h1>
		<p>
			<strong>gatsby-config.js title</strong>: {data.site.siteMetadata.title}
		</p>
		<p>
			Nostrud fugiat dolore dolore sint ad exercitation sint nostrud eu eu occaecat. Dolor enim ut
			esse ex ad labore aliqua sit. Magna occaecat duis do enim reprehenderit exercitation pariatur.
			Pariatur deserunt laboris laboris occaecat qui excepteur quis enim. Nostrud amet dolor
			consectetur consectetur excepteur anim. Sit officia qui do voluptate exercitation.
		</p>
		<Link to="/">Go back to the homepage</Link>
	</div>
);

ReactFeature.propTypes = {
	data: PropTypes.object.isRequired,
};

export const query = graphql`
	query Feature2Query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

export default ReactFeature;
