import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	shareButton: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	iconsContainer: {
		display: 'flex',
		gap: '1rem',
		alignItems: 'center',
	},
	popoverContainer: {},
	marginB05: {
		marginBottom: '0.5rem',
	},
}));
