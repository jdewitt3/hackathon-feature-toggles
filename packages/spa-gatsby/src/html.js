/* eslint-disable */

import React from 'react';
import { withPrefix } from 'gatsby-link';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
	try {
		stylesStr = require('!raw-loader!../public/styles.css');
	} catch (e) {
		console.log(e);
	}
}

module.exports = class HTML extends React.Component {
	render () {
		let css;
		if (process.env.NODE_ENV === 'production') {
			css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={ { __html: stylesStr } } />;
		}
		return (
			<html { ...this.props.htmlAttributes }>
				<head>
					<meta charSet="utf-8" />
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
					{this.props.headComponents}
					<link rel="icon" href={__PATH_PREFIX__ + '/favicon.ico'} />
					{css}
					<link
						href="//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800|Roboto+Slab:300,400,700"
						rel="stylesheet"
						type="text/css"
					/>
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
				</head>
				<body { ...this.props.bodyAttributes }>
					{this.props.preBodyComponents}
					<div key="body" id="___gatsby" dangerouslySetInnerHTML={ { __html: this.props.body } } />
					{this.props.postBodyComponents}
				</body>
			</html>
		);
	}
};
