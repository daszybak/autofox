import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	flexAlignCenter: {
		display: 'flex',
		alignItems: 'center',
	},
	flexJustifyBetween: {
		justifyContent: 'space-between',
	},
	flexDirectionColumn: {
		flexDirection: 'column',
	},
	gap05: {
		gap: '0.5rem',
	},
	navbarUserItem: {
		width: '48px',
		height: '48px',
		justifyContent: 'center',

		position: 'relative',
	},
	navbarButton: {
		height: '32px',
		width: '32px',
		borderRadius: '50%',
		padding: 0,
		textTransform: 'uppercase',
		textAlign: 'center',
		color: 'white',
		fontWeight: 700,
		textDecoration: 'none !important',
		fontSize: theme.fontSizes.lg,
	},
	backgroundColorGray: {
		backgroundColor: theme.colors.dark[4],
	},
	userMenuContainer: {
		width: '320px',
		maxWidth: '473px',

		visibility: 'hidden',

		position: 'absolute',
		top: 59,
		right: 0,

		background: 'white',
		boxShadow: theme.shadows.md,

		zIndex: 3000,
	},
	userMenuContainerIsVisible: {
		visibility: 'visible',
	},
	userMenuHeader: {
		borderBottom: `1px solid ${theme.colors.dark[2]}`,
		padding: '1rem 2rem',
	},
	userMenuButton: {
		height: '40px',
		textDecoration: 'none !important',
	},
	width100: {
		width: '100%',
	},
	signOut: {
		color: 'red',
		'&:hover': {
			color: 'white',
			backgroundColor: 'red',
		},
	},
	margin0: {
		margin: 0,
	},
	username: {
		textTransform: 'none',
	},
}));
