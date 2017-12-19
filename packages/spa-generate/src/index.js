import 'babel-polyfill';
import * as Components from '@workmarket/front-end-components';
import * as Patterns from '@workmarket/front-end-patterns';
import { configureGetComponent, generateState, generateStore } from '@workmarket/ui-generation';
import Link, { navigateTo } from 'gatsby-link';
import goodJobClient from '@workmarket/projekt_good_job';
import Swagger from 'swagger-client';
import R from 'ramda';

// TODO come up with solution to import feature functions & configs/store
// without having to manually import and include each in this file
// #region features
import * as Payments from '@workmarket/spa-payments';
import * as Foo from '@workmarket/spa-foo';
import * as FeatureToggles from '@workmarket/spa-featuretoggles';
// #endregion features

const baseFunctions = {};
const functions = R.mergeAll([
	baseFunctions,
	Payments.functions,
	Foo.functions,
	FeatureToggles.functions
]);

const baseConfig = {
	CHROME: {
		initialState: {
			data: {
				mainNav: {
					open: true,
				},
				search: {
					open: false,
				},
			},
		},
		handlers: ['CHROME__UPDATE'],
	},
};
const storeConfig = R.mergeAll([
	baseConfig,
	Payments.store,
	Foo.store,
	FeatureToggles.store
]);

const routingEngine = {
	routeTo (path) {
		navigateTo(path);
	},
};

// TODO add environmental logic for api host (e.g. process.env)
const API_HOST = 'https://api-gtw.dev.workmarket.com'; // process.env.BASE_API_URL || `${window.location.protocol}//${window.location.host}`;
const API_URL = `${API_HOST}/api-docs/latest`;

export class Generate {
	constructor () {
		const store = typeof generateStore === 'function'
			? () => generateStore({
				reducers: typeof generateState === 'function' ? generateState(storeConfig) : null,
			}) : () => null;
		this.store = store;

		this.api = (async () => {
			let api = null;

			const swaggerConnect = async () => {
				let swagger = null;

				try {
					swagger = await Swagger(API_URL, {});
				} catch (e) {
					console.warn('WARNING: API failure', e);
				}

				return swagger;
			};

			if (process.env.NODE_ENV === 'development') {
				try {
					api = await goodJobClient();
				} catch (e) {
					console.warn('WARNING: You are not ensuring that the API is always doing a Good Job (tm), to have all jobs be good jobs please go to your terminal and run `yarn api`');
					api = await swaggerConnect();
				}
			} else {
				api = await swaggerConnect();
			}

			return api;
		})();

		this.initialization = (async () => {
			await this.api;

			const component = typeof configureGetComponent === 'function'
				? configureGetComponent({
					api: this.api,
					components: {
						...Components,
						...Patterns,
						Link,
					},
					functions,
					routingEngine,
					store: store(),
				})
				: () => {
					return null;
				};

			this.component = component;
		})();

		this.component = () => {
			throw new Error('generate.component() called prior to having async api configured. Consider using spa-gatsby/<ComponentWrapper/>.');
		};
	}
}

export const generate = new Generate();
