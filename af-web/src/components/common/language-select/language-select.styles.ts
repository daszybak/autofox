import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	input: {
		backgroundColor: 'transparent',
		border: `1px solid ${theme.colors.orange[4]}`,
		color: theme.white,

		option: {
			color: theme.black,
		},
	},
	rightSection: {
		color: theme.white,
	},
}));
