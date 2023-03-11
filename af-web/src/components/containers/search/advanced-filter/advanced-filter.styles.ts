import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		rowGap: '1rem',
		columnGap: '1rem',
		zIndex: 100,
	},
	gridSpan4: {
		gridColumn: 'span 4',
	},
	gridSpan6: {
		gridColumn: 'span 6',
	},
	gridSpan3: {
		gridColumn: 'span 3',
	},
	gridSpan2: {
		gridColumn: 'span 2',
	},
	gridSpan12: {
		gridColumn: 'span 12',
	},
	title: {
		marginBottom: 0,
	},
	marginT1: {
		marginTop: '1rem',
	},
}));
