import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	dashboardContainer: {
		display: 'grid',
		gridTemplateColumns: '240px 1fr',
		minHeight: '100vh',
	},
	gridCol1: {
		gridColumn: '1 / 2',
	},
	gridCol2: {
		gridColumn: '2 / 3',
	},
	contentContainer: {
		height: '100%',
		backgroundColor: 'white',
		padding: '2rem 0 0 2rem',
	},
	contentBackgroundColor: {
		backgroundColor: theme.colors.dark[1],
		height: '100%',
		padding: '2rem 0 0 2rem',
	},
}));
