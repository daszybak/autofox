import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	activeFilterGrid: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '1rem',
	},
}));
