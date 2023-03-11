import { createStyles, MantineTheme, MantineThemeOverride, Tuple } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	footerContainer: {
		position: 'relative',
		backgroundColor: theme.black,
		minHeight: '35vh',
		color: theme.white,
	},
	gridContainer: {
		padding: '5rem 0 5rem 0',
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 1fr)',
		columnGap: '7.5rem',
		height: '80%',
	},
	version: {
		position: 'absolute',
		bottom: '0',
		right: '0',
	},
	spanLine: {
		borderBottom: `1px solid ${theme.white}`,
		position: 'absolute',
		left: '0',
		right: '0',
	},

	grid2x4: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridTemplateRows: 'repeat(4, 1fr)',
		columnGap: '1rem',
		rowGap: '1rem',
		// last two elements have red text
		'& > a:nth-of-type(6)': {
			color: '#FF9E0F',
		},
		'& > a:nth-of-type(8)': {
			color: '#FF9E0F',
		},
	},
}));
