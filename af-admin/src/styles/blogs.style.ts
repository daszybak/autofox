import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	mainCont: {
		marginLeft: '300px',
	},
	buttonBox: {
		margin: '30px 0',
	},
	alertBox: {
		maxWidth: '550px',
		width: '100%',
	},
	selectBox: {
		maxWidth: '200px',
		width: '100%',
	},
	PagSortBox: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}));
