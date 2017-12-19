const Breadcrumbs = PAGEHEADER => ({
	uuid: 'page-header__breadcrumbs',
	type: 'WMBreadcrumbs',
	props: {
		route: [
			{ label: PAGEHEADER.children[1].label, uuid: 'breadcrumb-1' },
		],
	},
});

export default Breadcrumbs;
