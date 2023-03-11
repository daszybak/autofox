import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	center: {
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		justifyContent: 'space-between',
		height: '77px',
	},
	gap1: {
		gap: '1rem',
	},
	bar: {
		justifyContent: 'space-between',
		padding: '1rem 2rem',
	},
	navigationContainer: {
		backgroundColor: theme.colors.blue[4],
		boxShadow: theme.shadows.xs,
		position: 'relative',
		'& > *': {
			flexGrow: 1,
		},
	},
	orangeBg: {
		backgroundColor: '#F29D38',
	},
	anchor: {
		padding: '0 0.5rem',
	},
	borderRight: {
		borderRight: '1px solid #fff',
	},
	width80: {
		width: '80%',
	},
	middleContainer: {
		'& > *': {
			flexGrow: 1,
		},
	},
	user: {
		width: '14.375rem',
	},
}));
