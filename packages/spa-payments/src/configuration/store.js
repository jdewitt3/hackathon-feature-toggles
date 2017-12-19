// import faker from 'faker';
// import moment from 'moment';

const storeConfig = {
	CREATE: {
		initialState: {
			data: {
				modalOpen: false,
				addingRemovingFields: false,
				fields: [
					{ name: 'Test Field 1', value: 1, uuid: 'test-field-1' },
					{ name: 'Test Field 2', value: 2, uuid: 'test-field-2' },
				],
				selectedFields: [],
				template: {
					saving: false,
				},
				showingTemplates: false,
				templates: [
					{ name: 'Template 1', value: 1, uuid: 'template-1' },
					{ name: 'Template 2', value: 2, uuid: 'template-2' },
				],
				selectedTemplate: null,
				Task: [],
				payee: {
					payeeDataSource: [],
					current: {
						payeeSelected: null,
						payeeUuid: '',
						// payeeAvatar: faker.image.avatar(),
					},
				},
				lineItems: [
					{
						id: '0',
						name: '',
						type: null,
						amount: '',
					},
				],
				paymentDate: '',
				showDatePicker: false,
				submitLabel: 'Pay Now',
			},
		},
		handlers: [
			'CREATE__UPDATE_FIELD',
			'CREATE__OPEN',
			'CREATE__CLOSE',
			'CREATE__UPDATE',
			'CREATE__LOAD_FIELDS',
			'CREATE__ADD_REMOVE_FIELDS',
			'CREATE__TOGGLE_FIELD',
			'CREATE__CREATE_ANOTHER',
			'CREATE__OPEN_SAVE_AS_TEMPLATE',
			'CREATE__UPDATE_TEMPLATE_NAME',
			'CREATE__SELECT_TEMPLATE',
			'CREATE__SHOW_TEMPLATES',
			'CREATE__GET_ALL_TASK__REQUEST',
			'CREATE__GET_ALL_TASK__SUCCESS',
			'CREATE__GET_ALL_TASK__ERROR',
			'CREATE__CREATE_TASK__REQUEST',
			'CREATE__CREATE_TASK__SUCCESS',
			'CREATE__CREATE_TASK__ERROR',
			'CREATE__CREATE_TASK__RESET',
			'CREATE__CREATE_TASK__POST',
			'CREATE__PAYEE_UPDATE_INPUT',
			'CREATE__PAYEE_SELECT_INPUT',
			'CREATE__ON_REMOVE_CHIP',
			'CREATE__PAYMENT_UPDATE_INPUT',
			'CREATE__PAYMENT_SELECT_INPUT',
			'CREATE__UPDATE_PAYMENT_TYPE',
			'CREATE__UPDATE_PAYMENT_AMOUNT',
			'CREATE__CREATE_LINE_ITEM',
			'CREATE__UPDATE_LINE_ITEM_NAME',
			'CREATE__POST_PAYMENT',
			'CREATE__POST_ACTION_1',
			'CREATE__FETCH__SUCCESS',
			'CREATE__FETCH__REQUEST',
			'CREATE__FETCH__ERROR',
			'CREATE__DELETE_REQUEST',
			'CREATE__LINE_ITEM_NAME_UPDATE',
			'CREATE__LINE_ITEM_TYPE_UPDATE',
			'CREATE__LINE_ITEM_AMOUNT_UPDATE',
			'CREATE__CLEAR_LINE_ITEMS',
			'CREATE__CLEAR_PAYEE',
			'CREATE__UPDATE_TODAY_DATE',
			'CREATE__UPDATE_SCHEDULED_DATE',
			'CREATE__SHOW_DATE_PICKER',
			'CREATE__HIDE_DATE_PICKER',
			'CREATE__CLEAR_PAYMENT_DATE',
			'CREATE__CLOSE_DATE_PICKER',
			'CREATE__UPDATE_SUBMIT_LABEL',
			'CREATE_TRANSFORM_PAYEE_DATA_SOURCE',
		],
	},
	MANAGE: {
		initialState: {
			data: {
				drawerOpen: false,
				currentData: {
					number: '0',
					orderItems: [],
					// scheduledInvoiceDate: moment(),
				},
			},
		},
		handlers: [
			'MANAGE__UPDATE_FIELD',
			'MANAGE__OPEN',
			'MANAGE__CLOSE',
			'MANAGE__SUBMIT',
			'MANAGE__FETCH__SUCCESS',
			'MANAGE__FETCH__REQUEST',
			'MANAGE__FETCH__ERROR',
			'MANAGE__DELETE_REQUEST',
			'MANAGE__SET_DATA',
		],
	},
	PAGEHEADER: {
		initialState: {
			data: {
				fields: [
					{
						name: 'Menu Item 1',
						value: 1,
						uuid: 'menu-item-1',
					},
					{
						name: 'Menu Item 2',
						value: 2,
						uuid: 'menu-item-2',
					},
				],
			},
		},
	},
	USER: {
		initialState: {
			data: {
				loginForm: {
					emailAddress: '',
					password: '',
					rememberMe: false,
					submitting: false,
				},
				user: {
					data: {
						emailAddress: '',
						firstName: '',
						lastName: '',
						token: '',
					},
				},
			},
		},
		handlers: [
			'SUBMIT_LOGIN__REQUEST',
			'SUBMIT_LOGIN__SUCCESS',
			'SUBMIT_LOGIN__ERROR',
			'SUBMIT_LOGIN__RESET',
			'UPDATE_FIELD',
		],
	},
	WARNING: {
		initialState: {
			data: {
				open: false,
			},
		},
		handlers: [
			'WARNING__OPEN',
		],
	},
	DASHBOARD: {
		initialState: {
			data: {
				loadEnd: 0,
				dataSize: 0,
				dataList: [],
				configuration: [
					{
						type: 'Select',
						fixed: true,
						checkedLookup: 'checked',
						key: 'checked',
					},
					{
						type: 'Text',
						width: 200,
						fixed: true,
						key: 'number',
						title: 'Order Number',
						textLookup: 'number',
						textType: 'header',
						textStyle: {
							color: 'blue',
						},
					},
					{
						meta: {
							name: 'Order List',
						},
						type: 'Text',
						fixed: false,
						width: 300,
						key: 'Pancakes',
						title: 'Order Items',
						textLookup: 'description',
						subTextLookup: 'descriptionTitle',
						textListLookup: 'extraDescriptions',
						textType: 'list',
					},
					{
						meta: {
							name: 'PaymentStatus',
						},
						type: 'Status',
						fixed: false,
						width: 200,
						key: 'Status',
						title: 'Payment Status',
						labelLookup: 'status',
						iconLookup: 'icon',
						colorLookup: 'color',
					},
					{
						meta: {
							name: 'Buyer Profiles',
						},
						type: 'Avatar',
						fixed: false,
						width: 250,
						key: 'buyer',
						title: 'Buyer',
						nameLookup: 'buyerCompanyUuid',
						subLookup: 'buyerTitle',
						imgLookup: 'avatar',
					},
					{
						meta: {
							name: 'Seller Profiles',
						},
						type: 'Avatar',
						fixed: false,
						width: 250,
						key: 'seller',
						title: 'Seller',
						nameLookup: 'sellerUserUuid',
						subLookup: 'sellerTitle',
						imgLookup: 'avatar',
					},
					{
						type: 'Date',
						width: 200,
						format: 'MMMM Do YYYY',
						fixed: false,
						key: 'Date',
						title: 'Scheduled Date',
						dateLookup: 'scheduledInvoiceDate',
					},
				],
			},
		},
		handlers: [
			'DASHBOARD__CHECK_ROW',
			'DASHBOARD__SET_ROWS',
			'DASHBOARD__DELETE_REQUEST',
			'DASHBOARD__FETCH__SUCCESS',
			'DASHBOARD__FETCH__REQUEST',
			'DASHBOARD__FETCH__ERROR',
			'DASHBOARD__SET_SIZE',
			'DASHBOARD__SET_LOAD_END',
		],
	},
};

export default storeConfig;
