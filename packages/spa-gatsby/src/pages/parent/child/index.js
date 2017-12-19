import React from 'react';
import Link from 'gatsby-link';

const ChildFeature = () => (
	<div className="container">
		<h1>Child</h1>

		<p>
			Nostrud fugiat dolore dolore sint ad exercitation sint nostrud eu eu occaecat. Dolor enim ut
			esse ex ad labore aliqua sit. Magna occaecat duis do enim reprehenderit exercitation pariatur.
			Pariatur deserunt laboris laboris occaecat qui excepteur quis enim. Nostrud amet dolor
			consectetur consectetur excepteur anim. Sit officia qui do voluptate exercitation.
		</p>
		<p>
			<Link to="/parent">Go to parent</Link>
		</p>
		<p>
			<Link to="/">Go back to the homepage</Link>
		</p>
	</div>
);

export default ChildFeature;
