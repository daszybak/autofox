import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		rowGap: '1rem',
		columnGap: '1rem',
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
	gridSpan12: {
		gridColumn: 'span 12',
	},
	marginB4: {
		marginBottom: '4rem',
	},
	layoutContainer: {
		minHeight: '70vh',
	},
	margin1R: {
		marginRight: '1rem',
	},
	navigationContainer: {
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'flex-end',
	},
	width15: {
		width: '15rem',
	},
	width40: {
		width: '40rem',
	},
	marginB2: {
		marginBottom: '2rem',
	},
	marginT1: {
		marginTop: '1rem',
		marginBottom: '0rem',
	},
	flexAlignItemsCenter: {
		display: 'flex',
		alignItems: 'center',
	},
	colorPickerInputContainer: {},
	label: {
		fontSize: theme.fontSizes.md,
	},
	error: {
		color: 'red',
		fontSize: theme.fontSizes.md,
	},
}));
