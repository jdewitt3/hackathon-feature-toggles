import React from 'react';
import crypto from 'crypto';
import {
	generateState,
	configureGetComponent,
	generateStore,
} from '@workmarket/ui-generation';
import axios from 'axios';
import { Provider } from 'react-redux';
import moment from 'moment';
import Swagger from 'swagger-client';
import * as Components from '@workmarket/front-end-components';
import * as Patterns from '@workmarket/front-end-patterns';
import homeConfig from '../Home';
// import loginConfig from '../Login';
import { storeConfig } from '../../configuration';

const functions = {
	filterPayeeAutocomplete: (searchText, element) => {
		return element.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
	},
	listSize: list => list.size,
	dangerousEval: (callbackString, ...args) => {
		try {
			const dangerousFunction = eval(callbackString); // eslint-disable-line no-eval
			return dangerousFunction(...args);
		} catch (e) {
			console.warn(`dangerousEval failed with string function: ${callbackString} || with args: ${args}`);
			return null;
		}
	},
	makeNewLineItemData: () => {
		const id = crypto.randomBytes(20).toString('hex');
		const newLineItem = {
			id,
			name: '',
			type: null,
			amount: 0.00,
		};

		return newLineItem;
	},
	makeId: () => {
		const id = crypto.randomBytes(20).toString('hex');
		return id;
	},
	consoleWarn: (...args) => {
		console.warn(JSON.stringify(args));
	},
	reduceCreateLineItems: (lI = []) => {
		const totalAmount = lI.reduce((a, { amount }) => {
			const readjustedAmount = amount === '' ? 0 : amount;
			return parseFloat(a) + parseFloat(readjustedAmount);
		}, 0);

		return `$${totalAmount.toLocaleString('en', { minimumFractionDigits: 2 })}`;
	},
	reduceLineItems: (lI = []) => `$${lI.reduce((a, { amount }) => a + amount, 0).toFixed(2)}`,
	refineList: (list = []) => {
		return list.map((listItem) => {
			const extraDescriptions = listItem.orderItems.length > 1
				? listItem.orderItems.slice(1)
					.reduce((acc, { description }) => acc.concat([description]), [])
				: [];

			return {
				...listItem,
				checked: false,
				buyerTitle: 'Freelancer',
				sellerTitle: 'Employer',
				avatar: 'https://atmosphere.anaren.com/sites/default/files/picture-default_2614.png',
				description: listItem.orderItems[0].description,
				extraDescriptions,
				descriptionTitle: listItem.orderItems[0].type,
				status: listItem.status,
				icon: 'mode_edit',
				color: 'red',
			};
		});
	},
	setLineItem: (clickedItem, dataList) => {
		return dataList.get(clickedItem.rowIndex);
	},
	sanitizeString: (aStr = '') => aStr,
	formatDate: (aDate = moment()) => `${moment(aDate).format('MMMM do, YYYY')}`,
	formatCreateDate: (aDate = moment()) => moment(aDate).valueOf(),
	producePostRequest: (lineItems, paymentDate, payeeUuid) => {
		const orderItems = lineItems.map((lineItem) => {
			return {
				uuid: lineItem.id,
				type: lineItem.type.toUpperCase(),
				quantity: 1,
				amount: lineItem.amount,
				description: lineItem.name,
			};
		});

		const order = {
			buyerCompanyUuid: '1111-1111-1111-1111',
			buyerUserUuid: '2222-2222-2222-2222',
			sellerCompanyUuid: '3333-3333-3333-3333',
			sellerUserUuid: payeeUuid,
			currency: 'USD',
			memo: 'add an order',
			scheduledInvoiceDate: paymentDate,
			invoiceUuid: '283423h9823427',
			orderItems,
		};

		return { order };
	},
	prependDollarSign: (amount) => {
		return `$${amount}`;
	},
	transformConfig: (config) => {
		return config;
	},
	reduceCheckCount: (dataList) => {
		return dataList.reduce((acc, { checked }) => checked ? acc + 1 : acc, 0);
	},
	disableDate: (date) => {
		return date < moment();
	},
	producePayeeDataSource: (response) => {
		return response.valueSeq().map((userImmObj, index) => ({
			text: JSON.parse(userImmObj.getIn(['cells', 1, 'cellValue', 'valueJson'])).fullName,
			value: index + 1,
			uuid: userImmObj.get('rowId'),
		}));
	},
};

const getToken = (timeoutID) => {
	return axios.post('https://api-gtw.dev.workmarket.com/v3/oauth/token',
		'username=qa%2Bt%40workmarket.com&password=w0rkmarket12&grant_type=password',
		{
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
			},
		},
	)
		.then((apiResponse) => {
			clearTimeout(timeoutID);
			return apiResponse;
		})
		.catch((err) => {
			console.warn(err);
			clearTimeout(timeoutID);
			return { message: 'Fetching Token failed.', failure: true };
		});
};

const configureFetch = (asyncCall, waitLength) => {
	let timeoutID = null;
	const fetchTimeout = () => {
		return new Promise((resolve) => {
			timeoutID = setTimeout(() => {
				console.warn('Fetch Call failed.');
				resolve({ message: 'Fetch Call failed.', failure: true });
			}, waitLength);
		});
	};

	const promisifyFetch = () => {
		return new Promise(resolve => resolve(asyncCall(timeoutID)));
	};

	const safeFetch = () => {
		return Promise.race([fetchTimeout(), promisifyFetch()]);
	};

	const returnFetch = () => {
		try {
			return safeFetch()
				.then((rawResponse) => {
					if (rawResponse && rawResponse.failure) {
						console.warn(rawResponse);
						return rawResponse;
					}
					return rawResponse;
				})
				.catch((err) => {
					console.warn(err);
					clearTimeout(timeoutID);
					return { message: 'Fetch Call failed.', failure: true };
				});
		} catch (e) {
			return { message: 'Fetch Call failed.', failure: true };
		}
	};

	return returnFetch;
};

const safeFetchToken = configureFetch(getToken, 3000);

const store = generateStore({
	reducers: generateState(storeConfig),
});

const configureSwagger = async (timeoutID) => {
	const authResponse = await safeFetchToken();

	if (authResponse && authResponse.failure) {
		console.warn(authResponse);
		return { message: 'Configuring getComponent failed.', failure: true };
	}

	const authPayload = authResponse.data.result.payload[0];
	console.warn('Auth Response: ', authPayload);
	const authToken = authPayload.accessToken;

	return Swagger('https://api-gtw.dev.workmarket.com/api-docs/latest', {
		authorizations: {
			'api-key': `Bearer ${authToken}`,
		},
	})
		.then((configuredAPI) => {
			clearTimeout(timeoutID);
			return configuredAPI;
		})
		.catch((err) => {
			console.warn(err);
			clearTimeout(timeoutID);
			return { message: 'Configuring getComponent failed.', failure: true };
		});
};

const safeSwagger = configureFetch(configureSwagger, 3000);

export default (async () => {
	const configuredSwagger = await safeSwagger();

	const getComponent = configureGetComponent({
		api: (configuredSwagger && configuredSwagger.failure) ? null : configuredSwagger,
		functions,
		store,
		components: {
			...Components,
			...Patterns,
		},
	});

	return (
		<Provider store={ store }>
			{ getComponent(homeConfig) }
		</Provider>
	);
});
