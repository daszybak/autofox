import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	rangeSelectContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	selectRange: {
		width: '8rem',
	},
}));
