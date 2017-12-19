<div align="center">
    <img src="https://m.popkey.co/7ecdb4/GzmZr.gif" width="350" alt="Relax" />
    <h1><abbr title="Single Page App">SPA</abbr> / <abbr title="Progressive Web App">PWA</abbr></h1>
    <h4>🗄 Progressive Web App Container for Wormkarket Features 🗄</h4>
</div>

---

- [Packages](#packages)
	- [Strategy](#strategy)
- [Installation](#installation)
	- [Commands](#commands)
	- [Node](#node)
	- [Custom Routes](#custom-routes)
- [Getting Started](#getting-started)
- [Features](#features)
	- [Create Feature](#create-feature)
	- [Publish Feature (Optional)](#publish-feature-optional)
	- [Utilize Feature](#utilize-feature)
- [Miscellaneous](#miscellaneous)
	- [Getting Started Errors](#getting-started-errors)
	- [Build Errors](#build-errors)
- [To-Do](#to-do)

---

## Packages

This repo contains the following packages:

- `spa-gatsby` - shell app that features are added to and is deployed to production.
- `spa-generate` - shared UI generation functions.
- `spa-foo` - sample feature package.
- `spa-payments` - WIP feature package.

### Strategy

This repo is managed with [Lerna](https://github.com/lerna/lerna). Each package in this repo lives within the `packages` directory and has its own `package.json`. The SPA repo itself also maintains a `package.json` in the root directory. This is where all the common dependencies live and the main commands for managing the repo.

## Installation

To contribute to these packages, you must have the following installed globally on your machine:

- [Node.js](https://nodejs.org/en/) @ ^8.9.3
- [Lerna](https://www.npmjs.com/package/lerna) @ ^2.5.1
- [Yarn](https://yarnpkg.com/) @ ^1.2.0
- [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli) @ ^1.1.27

### Commands

This repo defines commands for building, linting, running tests, and publishing. All commands are run for _all libraries_. This means when running the build script, for instance, _all_ packages are built. The following commands are available:

- `lerna bootstrap` - install and link dependencies in the repo together.
- `yarn develop` - run local development environment.
- `yarn api` - run Projekt Good Job to enhance the functionality of the gateway.
- `yarn build` - create production build.
- `yarn serve` - run local server on local production build dir/files.
- `yarn deploy` -  production build & deploy to Amazon S3 ([bucket](s3://s3-worktronspa-001.nonprod.us-east-1.workmarket.com) / [web](https://d2vrt4nm89g6n7.cloudfront.net/)).
- `yarn reset` - remove *packages/spa-gatsby/public*, all *node_modules* and *.cache* directories.
<!-- - `test`
- `test-no-coverage`
- `test-watch` -->

<!-- If you want to simulate a PR test run, you can `yarn pr-acceptance`. -->

<!-- #### Publishing New Versions

To publish a new version of one of the packages, run:

```bash
make release
```

This bootstraps all packages (installing all external dependencies and linking shared dependencies) as well as runs linting and unit tests as a last check before the release. After those pass,  you can follow the interactive prompts. -->

### Node

This package includes a [`.nvmrc`](https://github.com/creationix/nvm#nvmrc) file which specifies the required Node.js version. To make use of this file, install [Node Version Manager](https://github.com/creationix/nvm).

Once you have installed nvm, simply run:

```bash
$ nvm use
```

Alternatively, if using `zsh`, you could just add [this](https://gist.github.com/tim-mc/12c8665eaeeedf501704c3b8cb1256d3) to your `.zshrc`.

<!-- ### Yarn

There are many [different methods](https://yarnpkg.com/docs/install) for installing Yarn. Our CI servers are currently using version `0.18.1`. Follow the instructions in the Yarn documentation for installing specific versions.

Once you have installed the correct version of Node.js and Yarn, you can go ahead an install the dependencies:

```bash
$ yarn
``` -->

### Custom Routes

Projekt Good Job enables custom routing. All it takes is you supplying it with an object where each key is a route name, and has a method that returns your desired payload. It will be shaped like an API V3 Response.
You can make a file in the root directory and then have it run and consume it by entering:

```bash
$ node ./node_modules/.bin/projekt_good_job --custom=${pathToYourExportedObject}
```

For more information please check [here](https://github.com/workmarket/projekt_good_job).

## Getting Started

Follow [Installation](#installation) instructions then run the following commands within the root directory:
```bash
$ yarn install
$ lerna bootstrap
$ yarn api
```

Open a separate Terminal window and run:
```bash
$ yarn develop
```

Open http://localhost:7777 in browser.

## Features

### Create Feature

Each feature name should be prepended with `spa-` with a `@workmarket` scope. Assuming you're creating a feature called **Foo** the following instructions will show you how to create and utilize it. Adjust instructions to match your feature name as required.

```bash
$ cd spa/packages
$ mkdir spa-foo
$ cd spa-foo
$ npm init --scope=@workmarket
```

During the `npm init` prompts you should enter **https://github.com/workmarket/spa** when prompted for `git repository:`. Default values for other prompts.

Create file `spa/packages/spa-foo/index.js` with the following content:

```javascript
const functions = {
	prependDollarSign: (amount) => {
		return `$${amount}`;
	},
};

const store = {
	'FOO-FEATURE': {
		initialState: {
			data: {
				submitLabel: 'Pay Now',
			},
		},
		handlers: [
			'FOO-FEATURE__UPDATE',
		],
	},
};

const config = {
	uuid: 'foo-feature',
	type: 'div',
	props: {
		className: 'container',
	},
	children: [
		{
			uuid: 'foo-feature-h',
			type: 'h1',
			children: 'Foo Feature',
		},
		{
			uuid: 'foo-feature-p',
			type: 'p',
			children: 'Adipisicing duis sit in deserunt mollit velit. Mollit consequat Lorem cillum qui amet ad excepteur dolore id laborum et irure et. Anim eiusmod ullamco incididunt qui do elit et dolore minim occaecat sit. Dolor voluptate proident cillum eiusmod. Velit amet deserunt aliqua irure velit dolor eu voluptate voluptate occaecat eu eiusmod non. Ipsum commodo reprehenderit voluptate magna dolor proident consequat qui eu sunt duis cupidatat elit quis. Dolore sint minim mollit qui labore aliqua et id aliquip.',
		},
	],
};

export {
	functions,
	store,
	config as default,
};

```

### Publish Feature (Optional)

This will publish the feature to NPM so only perform the following steps if asked to do so or you're knowledgeable. This section is not required to make a feature work for local development.

Assuming that you've created your [NPM](https://www.npmjs.com) account, been granted access to `@workmarket` + privileges, and configured your local machine so that you're [logged in to your NPM account](https://docs.npmjs.com/cli/adduser).

```bash
$ cd spa/packages/spa-foo
$ npm publish
```

### Utilize Feature

```bash
$ cd spa/
$ lerna add @workmarket/spa-foo --scope=spa-gatsby
$ lerna add @workmarket/spa-foo --scope=spa-generate
```

Within `spa/packages/spa-generate/src/index.js` import the feature and append the feature functions and configs. The merge functions below already exist within the file so you just have to add the particular lines below with `Foo` in them.

```javascript
import * as Foo from '@workmarket/spa-foo';

const functions = R.mergeAll([
    baseFunctions,
    Foo.functions,
]);

const storeConfig = R.mergeAll([
    baseConfig,
    Foo.store,
]);
```

Create `spa/packages/spa-gatsby/src/pages/foo.js` with the following content:

```javascript
import React from 'react';
import fooConfig from '@workmarket/spa-foo';
import ComponentWrapper from '../components/ComponentWrapper';

const FooPage = () => (
    <ComponentWrapper>
        { fooConfig }
    </ComponentWrapper>
);

export default FooPage;

```

```bash
$ cd spa/
$ yarn develop
```

Open http://localhost:7777/foo in browser.

## Miscellaneous

### Getting Started Errors

Validate that your system has all dependencies installed with [Solidarity](https://infinitered.github.io/solidarity/#/).

```bash
$ yarn global add solidarity
$ solidarity
```

If any issues are reported resolve them.

### Build Errors

GatsbyJS build is strict on globals such as `window` and `fetch` being conditional. Ensure that your code is written to consider browser globals optional. If you get a build error regarding globals such as `window` or `fetch` from dependencies that you are unable to fix you can try the following, assuming `sum-dum` is the offending package:

```javascript
// packages/spa-gatsby/gatsby-node.js
exports.modifyWebpackConfig = ({ config, stage }) => {
	if (stage === 'build-html') {
		config.loader('null', {
			test: /sum\-dum/,
			loader: 'null-loader',
		});
	}
};
```

## To-Do
- [ ] Implement authentication (/v3/oauth/token).
- [ ] Setup /v3/whoami API call w/ features in response and configure layout AppBar and Drawer.
- [ ] Support relative path loading.
- [ ] Add testing suite.
- [ ] Include 404 within layout or update design.
- [ ] Add logging.
