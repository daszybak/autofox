import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	priceValidityBox: {
		display: 'flex',
		p: {
			margin: '0',
		},
	},
	priceP: {
		paddingRight: '50px',
	},
	listItem: {
		display: 'flex',
		minWidth: '700px',
		width: '100%',
		boxShadow: '0px 0px 17px -12px rgba(0,0,0,0.75)',
		margin: '10px 0',
		padding: '0 15px',
	},

	deletedItem: {
		//boxShadow: 'inset 0px 0px 13px 0px rgb(196 194 237)',
		color: '#a6a6a6',
		backgroundColor: 'rgb(251, 248, 360)',
		display: 'flex',
		minWidth: '700px',
		width: '100%',
		boxShadow: '0px 0px 17px -12px rgba(0,0,0,0.75)',
		margin: '10px 0',
		padding: '0 15px',

		p: {
			color: '#a6a6a6',
		},
	},
	restoreBox: {
		display: 'flex',
		alignItems: 'center',

		span: {
			padding: '0 7px',
		},
	},

	date: {
		color: '#737373',
		fontSize: '12px',
	},

	listItemBox: {
		maxWidth: '700px',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	listText: {
		fontSize: '15px',
	},

	actionsIcons: {
		display: 'flex',
		paddingTop: '10px',

		button: {
			margin: '0 7px',
		},
	},
}));

export default useStyles;
