import React from 'react';
import Link from 'gatsby-link';
import ComponentWrapper from '../components/ComponentWrapper';

const IndexPage = () => (
	<div className="container">
		<h1>Home Page</h1>
		<p>
			Minim fugiat aliquip magna aliquip excepteur tempor irure eu incididunt minim duis laborum
			ullamco. Voluptate cupidatat sunt duis sunt sunt est mollit exercitation nisi. Excepteur
			pariatur adipisicing fugiat dolor labore enim pariatur.
		</p>
		<p>
			<Link to="/react-feature">React Feature</Link>
		</p>
		<p>
			<Link to="/config-feature"><abbr title="Work Market">WM</abbr> <abbr title="Plain Old JavaScript Object">POJO</abbr> Config Feature</Link>
			|
			<Link to="/config-feature/import"><abbr title="Work Market">WM</abbr> JSON Config Feature</Link>
		</p>
		<p>
			<Link to="/parent">Routing sub-directory/path example</Link>
		</p>
		<p>
			<Link to="/payments">Payments Feature</Link>
		</p>
		<ComponentWrapper>
			<p>
				Minim dolore elit proident aute dolore minim pariatur irure Lorem irure sunt
				voluptate minim. Non labore sunt aliqua non irure mollit elit deserunt deserunt
				commodo velit sint ipsum officia. Veniam ipsum adipisicing amet excepteur quis
				velit elit aliqua. Non deserunt commodo labore eu enim. Laboris mollit ad consequat
				esse Lorem enim eu sint officia sint.
			</p>
			{ { uuid: 'sample-inline-1', type: 'div', children: 'Hello World!' } }
		</ComponentWrapper>
	</div>
);

export default IndexPage;
