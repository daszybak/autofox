import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	mainCont: {
		marginLeft: '300px',
	},
	alertBox: {
		maxWidth: '550px',
		width: '100%',
	},
	searchBox: {
		display: 'flex',
		alignItems: 'center',
		height: '50px',
		fontSize: '17px',
		width: '100%',
		marginTop: '40px',
	},
	inputBox: {
		marginLeft: '15px',
	},
	filtersBox: {
		margin: '40px 0',
		display: 'flex',
	},
	selectBox: {
		marginRight: '20px',
	},
}));
