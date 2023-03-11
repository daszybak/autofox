import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	linksContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
	},
	borderB: {
		borderBottom: `1px solid ${theme.colors.dark[8]}`,
		padding: '1rem 0',
	},
	button: {
		borderRadius: 0,
		height: '2.5rem',
		fontSize: theme.fontSizes.md,
		'&:hover': {
			backgroundColor: theme.colors.dark[2],
		},
	},
	buttonIsActive: {
		backgroundColor: theme.colors.dark[2],
	},
	signOut: {
		color: 'red',
		'&:hover': {
			color: 'white',
			backgroundColor: 'red',
		},
	},
}));
