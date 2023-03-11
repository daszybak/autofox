import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	mainCont: {
		marginLeft: '300px',
	},
	buttonSelectBox: {
		display: 'flex',
		alignItems: 'end',
		justifyContent: 'space-between',
		marginBottom: '25px',
		minWidth: '550px',
		width: '100%',
	},
	alertBox: {
		maxWidth: '550px',
		width: '100%',
	},
}));
