import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	flexColumnContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		alignContent: 'flex-start',
		justifyContent: 'space-between',
	},
	agentSupportCardsContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'center',
		gap: '2rem',
	},
}));
