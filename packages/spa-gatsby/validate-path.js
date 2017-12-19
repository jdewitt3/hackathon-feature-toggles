const systemPath = require('path');

module.exports = (path) => {
	const parsedPath = systemPath.parse(path);

	return (
		parsedPath.name.slice(0, 1) !== '_' &&
		parsedPath.name.slice(0, 9) !== 'template-'
	);
};
