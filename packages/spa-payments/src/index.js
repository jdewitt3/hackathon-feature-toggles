import 'babel-polyfill';
import crypto from 'crypto';
import moment from 'moment';
import homeConfig from './components/Home';
import store from './configuration/store';

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

export {
	functions,
	store,
	homeConfig as default,
};

// import 'react-hot-loader/patch';
// import { AppContainer } from 'react-hot-loader';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import StatefulShell from './components/StatefulShell';

// injectTapEventPlugin();

// const render = (Component) => {
// 	ReactDOM.render(
// 		<AppContainer>
// 			{ Component }
// 		</AppContainer>,
// 		document.getElementById('app'),
// 	);
// };

// StatefulShell().then(render);

// if (module.hot) {
// 	module.hot.accept('./components/StatefulShell', () => { StatefulShell().then(render); });
// }
