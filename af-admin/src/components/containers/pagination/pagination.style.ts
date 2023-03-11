import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	paginationBox: {
		display: 'flex',
		margin: '15px 0',
		alignItems: 'flex-end',
	},
	pagination: {
		paddingLeft: '15px',
	},
	selectInput: {
		height: '26px',
		minHeight: '26px',
	},
}));

export default useStyles;
