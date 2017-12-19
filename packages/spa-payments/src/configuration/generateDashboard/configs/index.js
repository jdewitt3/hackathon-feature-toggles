import { commonStyles } from '@workmarket/front-end-components';
import Immutable from 'immutable';

const baseColors = commonStyles.colors.baseColors;
const columnLayout = [
	{
		meta: {
			name: 'TableSelection',
		},
		type: 'Select',
		fixed: true,
		width: 42,
		checkedLookup: 'checked',
		key: 'Select',
	},
	{
		meta: {
			name: 'Profiles',
		},
		type: 'Avatar',
		fixed: true,
		width: 250,
		key: 'Worker',
		title: 'Worker',
		nameLookup: 'name',
		subLookup: 'companyName',
		imgLookup: 'avatar',
	},
	{
		meta: {
			name: 'EmailLinks',
		},
		type: 'Text',
		fixed: false,
		width: 250,
		key: 'E-Mail',
		title: 'E-Mail',
		textLookup: 'email',
		textType: 'email',
	},
	{
		meta: {
			name: 'PaymentStatus',
		},
		type: 'Status',
		fixed: false,
		width: 200,
		key: 'Status',
		title: 'Status',
		statusLookup: 'status',
		iconLookup: 'myIcon',
		filterable: true,
		filters: [
			{
				value: 'scheduled',
				filterLabel: 'Scheduled',
				filterIcon: 'event',
				filterColor: baseColors.blue,
			},
			{
				value: 'pending_agreement',
				filterLabel: 'Pending Agreement',
				filterIcon: 'hourglass_empty',
				filterColor: baseColors.blue,
			},
			{
				value: 'pending_work_completion',
				filterLabel: 'Pending Work Completion',
				filterIcon: 'access_time',
				filterColor: baseColors.blue,
			},
			{
				value: 'pending_approval',
				filterLabel: 'Pending Approval',
				filterIcon: 'hourglass_empty',
				filterColor: baseColors.orange,
			},
			{
				value: 'pending_your_approval',
				filterLabel: 'Pending Your Approval',
				filterIcon: 'hourglass_empty',
				filterColor: baseColors.orange,
			},
			{
				value: 'paid',
				filterLabel: 'Paid',
				filterIcon: 'check',
				filterColor: baseColors.green,
			},
			{
				value: 'past_due',
				filterLabel: 'Past Due',
				filterIcon: 'warning',
				filterColor: baseColors.red,
			},
			{
				value: 'paused',
				filterLabel: 'Paused',
				filterIcon: 'pause_circle_outline',
				filterColor: baseColors.charcoalGrey,
			},
		],
	},
	{
		meta: {
			name: 'BudgetRemainder',
		},
		type: 'Progress',
		fixed: false,
		width: 200,
		key: 'Budget',
		title: 'Budget',
		progressLookup: 'budgetMin',
		maxLookup: 'budgetMax',
		symbolLookup: '$',
	},
	{
		meta: {
			name: 'StartDate',
		},
		type: 'Date',
		fixed: false,
		width: 80,
		key: 'Date',
		title: 'Date',
		dateLookup: 'date',
	},
	{
		type: 'Icon',
		fixed: false,
		width: 40,
		key: 'recurrence',
		iconLookup: 'recurrence',
		iconType: 'autorenew',
	},
	{
		meta: {
			name: 'ProjectName',
		},
		type: 'Text',
		fixed: false,
		width: 200,
		key: 'Project',
		title: 'Project',
		textLookup: 'project',
		textType: 'header',
	},
	{
		meta: {
			name: 'ListTest',
		},
		type: 'Text',
		fixed: false,
		width: 400,
		key: 'Pancakes',
		title: 'List Text',
		textLookup: 'companyName',
		subTextLookup: 'project',
		textListLookup: 'characters',
		textType: 'list',
	},
	{
		meta: {
			name: 'LayeredTest',
		},
		type: 'Text',
		fixed: false,
		width: 300,
		key: 'NotPancakes',
		title: 'Layered Text',
		textLookup: 'email',
		subTextLookup: 'project',
		textType: 'layered',
	},
];

const immutableColumnLayout = Immutable.fromJS(columnLayout);

export default immutableColumnLayout;
