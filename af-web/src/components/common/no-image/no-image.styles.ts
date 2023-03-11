import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	// flex with centered content
	flex: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));
