import { commonStyles } from '@workmarket/front-end-components';

const styles = {
	titleStyle: {
		display: 'flex',
		alignItems: 'center',
		padding: 0,
		justifyContent: 'space-between',
		textAlign: 'start',
	},

	actionsContainerStyle: {
		padding: '16px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},

	contentStyle: {
		width: '600px',
	},

	bodyStyle: {
		padding: '30px',
	},

	header: {
		main: {
			margin: '0 20px',
			fontSize: '20px',
			color: commonStyles.colors.baseColors.charcoalGrey,
			fontFamily: commonStyles.typography.fontStackHeaders.fontFamily,
			fontWeight: 300,
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},

		addRemoveFields: {
			marginLeft: 'auto',
			whiteSpace: 'nowrap',
		},

		addRemoveFieldsIcon: {
			fontSize: '20px',
			color: commonStyles.colors.baseColors.grey,
		},

		closeButton: {
			fontSize: '24px',
			color: commonStyles.colors.baseColors.lightGrey,
			marginLeft: 'auto',
		},
	},

	templates: {
		button: {
			marginLeft: '-13px',
		},

		label: {
			color: commonStyles.colors.baseColors.lightBlue,
		},

		icon: {
			fontSize: '20px',
			color: commonStyles.colors.baseColors.lightBlue,
		},
	},

	footer: {
		template: {
			button: {
				width: 15,
				height: 15,
				padding: 0,

				icon: {
					fontSize: '15px',
					width: 15,
					height: 15,
				},
			},
		},

		createAnother: {
			whiteSpace: 'nowrap',
			width: 'auto',
			marginLeft: 'auto',
			marginRight: '20px',
		},
	},

	payeeAutocomplete: {
		marginTop: '-30px',
	},

	customLineItem: {
		container: {
			width: '95%',
			padding: '10px',
			marginLeft: '14px',
		},
		boxContainer: {
			position: 'relative',
		},
		box: {
			position: 'absolute',
			border: '1px solid #cecece',
			width: '540px',
			height: '55px',
			marginLeft: '-25px',
		},
		lineItemContainer: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-around',
			lineHeight: '100%',
			marginLeft: '10px',
			marginRight: '10px',
		},
		paymentsAutoComplete: {
			width: '200px',
			fontSize: '14px',
		},
		paymentsTextFieldAutoComplete: {
			width: '200px',
		},
		typeDropDown: {
			display: 'inline',
			autowidth: false,
			width: '120px',
			paddingLeft: '2px',
			fontSize: '14px',
		},
		amountCurrencyField: {
			width: '50px',
			display: 'inline',
			fontSize: '14px',
		},
		trashIcon: {
			color: commonStyles.colors.baseColors.blue,
		},
	},
	paymentDate: {
		radioButton: {
			display: 'inline-block',
			width: '150px',
			fontSize: '14px',
		},
	},
	addLineItemButtonLabel: {
		fontSize: '14px',
		marginTop: '15px',
		color: commonStyles.colors.baseColors.blue,
	},
	addLineItemButtonIcon: {
		fontSize: '14px',
		color: commonStyles.colors.baseColors.blue,
	},
	total: {
		label: {
			paddingLeft: '5px',
			fontSize: '15px',
			color: commonStyles.colors.baseColors.grey,
		},
		amount: {
			paddingLeft: '5px',
			paddingRight: '12px',
			fontSize: '20px',
			color: commonStyles.colors.baseColors.green,
		},
	},
	asterix: {
		color: commonStyles.colors.baseColors.orange,
	},
};

export default styles;
