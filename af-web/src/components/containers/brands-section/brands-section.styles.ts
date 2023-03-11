import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	flexAlignCenter: {
		display: 'flex',
		alignItems: 'center',
	},
	justifyBet: {
		justifyContent: 'space-between',
	},
	flexColumn: {
		flexDirection: 'column',
	},
	gap1: {
		gap: '1rem',
	},
}));
