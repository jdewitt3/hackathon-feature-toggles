module.exports = {
	siteMetadata: {
		title: 'Work Market',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		'gatsby-plugin-offline',
	],
};
