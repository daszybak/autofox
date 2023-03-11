import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	tableBox: {
		boxShadow: '0px 0px 17px -12px rgba(0,0,0,0.75)',
	},
	actionsIcons: {
		display: 'flex',
		paddingTop: '10px',

		button: {
			margin: '0 7px',
		},
	},
	listHeader: {
		backgroundColor: '#f2f2f2',
	},

	titleWithIcon: {
		display: 'flex',
		alignItems: 'center',
	},
	icon: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: '20px',
	},
	titleBox: {
		transition: '0.3s',
		cursor: 'pointer',
		':hover': {
			backgroundColor: '#d9d9d9',
			transform: 'transition',
		},
	},
	restoreBox: {
		display: 'flex',
		alignItems: 'center',

		span: {
			padding: '0 7px',
		},
	},
	deletedItem: {
		//boxShadow: 'inset 0px 0px 13px 0px rgb(196 194 237)',
		color: '#a6a6a6',
		backgroundColor: 'rgb(251, 248, 360)',
	},
	text: {
		color: '#cc0000',
		fontSize: '13px',
	},
	activeAd: {
		backgroundColor: '#e6ffe6',
		color: '#006600',
		padding: '5px 19px',
		borderRadius: '5px',
	},
	deletedAd: {
		borderRadius: '5px',
		background: '#e6e6e6',
		padding: '5px 14px',
		color: '#737373',
	},
	soldAd: {
		backgroundColor: '#ffe6e6',
		color: '#ff4d4d',
		padding: '5px 18px',
		borderRadius: '5px',
	},
}));
