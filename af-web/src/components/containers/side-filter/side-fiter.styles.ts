import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	filterContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		gap: '1rem',
	},
	marginT2: {
		marginTop: '2rem',
	},
	marginB02: {
		marginBottom: '0.2rem',
	},
	conditioningContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		alignItems: 'flex-start !important',
	},
	colorPickContainer: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		rowGap: '1rem',
	},
	gridSpan1: {
		gridColumn: 'span 1',
	},
}));
