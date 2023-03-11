import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100vh',
		margin: 0,
		padding: 0,

		div: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
}));
