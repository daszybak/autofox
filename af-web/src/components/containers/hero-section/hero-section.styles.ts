import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	heroSection: {
		backgroundColor: theme.colors.dark[0],
		height: '33vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'end',
	},
	container: {
		width: '100%',
	},
	contentContainer: {
		marginBottom: '2rem',
	},
	marginL2: {
		marginLeft: '1rem',
	},
}));
