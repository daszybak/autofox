import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	container: {
		width: '300px',
		position: 'fixed',

		ul: {
			padding: '0px',
		},
	},

	linkItems: {
		listStyle: 'none',
		display: 'flex',
		alignItems: 'center',
	},
}));
