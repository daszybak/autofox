import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	formContainer: {
		boxShadow: theme.shadows.md,
		backgroundColor: theme.white,
		position: 'relative',
	},
	width: {
		width: '10rem',
	},
	center: {
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
	},
	segmentedControlRoot: {
		backgroundColor: 'white',
		marginBottom: '0.5rem',
	},
	segementedControlActive: {
		backgroundColor: theme.colors.dark[0],
	},
	segmentedControlControl: {
		border: '0 !important',
	},
	advancedFilter: {
		padding: '2rem 0',
		marginBottom: '2rem',
	},
	relative: {
		position: 'relative',
	},
	closeButton: {
		position: 'absolute',
		top: 20,
		right: 0,
		zIndex: 10,
	},
	title: {
		marginTop: '1rem',
		marginBottom: 0,
	},
	filterContainer: {
		height: '104px',

		display: 'grid',
		gridTemplateColumns: '0.66fr 1fr 1fr 1fr 1fr auto auto',
		gridTemplateRows: '1fr',
		columnGap: '1rem',
		alignItems: 'center',

		'& > div': {
			flexGrow: 1,
		},
	},
	width50: {
		width: '50%',
	},
	width20: {
		width: '20%',
	},
	buttonLabel: {
		textTransform: 'lowercase',
	},
	debounceProgressBar: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
	},
}));
