import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	titleContainer: {
		paddingTop: '1rem',
		paddingBottom: '1rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		margin: 0,
	},
}));
