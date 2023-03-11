import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	headerBar: {
		margin: 0,
		padding: '0.5rem',
		marginTop: '1rem',
	},
	bgColorDark2: {
		backgroundColor: theme.colors.dark[2],
	},
	flex: {
		display: 'flex',
	},
	alignItemsCenter: {
		alignItems: 'center',
	},
	justifyBetween: {
		justifyContent: 'space-between',
	},
	gap05: {
		gap: '0.5rem',
	},
	flexColumn: {
		flexDirection: 'column',
	},
	bottomBorder: {
		borderBottom: `1px solid ${theme.colors.dark[3]}`,
	},
	marginB4: {
		marginBottom: '4rem',
	},
	justifyCenter: {
		justifyContent: 'center',
	},
	paddingT2: {
		paddingTop: '2rem',
	},
	margin0: {
		margin: 0,
	},
	justifyEnd: {
		justifyContent: 'flex-end',
	},
	width15: {
		width: '15rem',
	},
	marginB2: {
		marginBottom: '2rem',
	},
	alignSelfStart: {
		alignSelf: 'flex-start',
	},
	marginXCenter: {
		margin: '0 auto',
	},
	marginT2: {
		marginTop: '2rem',
	},
	height297: {
		height: '400px',
	},
	visibilityHidden: {
		visibility: 'hidden',
	},
}));
