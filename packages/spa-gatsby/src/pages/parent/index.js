import React from 'react';
import Link from 'gatsby-link';

const ParentFeature = () => (
	<div className="container">
		<h1>Parent</h1>

		<p>
			Nostrud fugiat dolore dolore sint ad exercitation sint nostrud eu eu occaecat. Dolor enim ut
			esse ex ad labore aliqua sit. Magna occaecat duis do enim reprehenderit exercitation pariatur.
			Pariatur deserunt laboris laboris occaecat qui excepteur quis enim. Nostrud amet dolor
			consectetur consectetur excepteur anim. Sit officia qui do voluptate exercitation.
		</p>
		<p>
			<Link to="/parent/child">Go to child (React)</Link>
		</p>
		<p>
			<Link to="/parent/step-child">Go to step-child (JSON)</Link>
		</p>
		<p>
			<Link to="/">Go back to the homepage</Link>
		</p>
	</div>
);

export default ParentFeature;
