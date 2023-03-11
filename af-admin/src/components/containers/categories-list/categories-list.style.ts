import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	actionsIcons: {
		display: 'flex',

		button: {
			margin: '0 7px',
		},
	},

	tree_ul: {
		listStyle: 'none',
		padding: '0',

		ul: {
			listStyle: 'none',
			paddingLeft: '50px',
		},
	},

	placeholderBox: {
		display: 'flex',
		height: '45px',
		backgroundColor: '#fff',
	},

	categoryItems: {
		backgroundColor: 'rgb(0,150,150,0.1)',
		display: 'flex',
		alignItems: 'center',
		padding: '8px',
		width: '100%',
		maxWidth: '600px',
		minWidth: '500',
		borderBottom: '2px solid #fff',
		justifyContent: 'space-between',
	},
	dragItem: {
		opacity: '0.3',
	},

	weightField: {
		padding: '0 10px',
	},

	IconsWithName: {
		display: 'flex',
	},
	openCloseIcons: {
		fontSize: '18px',
		display: 'flex',
		alignItems: 'center',
		paddingRight: '12px',
		color: ' #008080',
		cursor: 'pointer',
	},
	placeholderIcon: {
		fontSize: '18px',
		paddingRight: '12px',
		opacity: '0',
		display: 'flex',
	},
}));
