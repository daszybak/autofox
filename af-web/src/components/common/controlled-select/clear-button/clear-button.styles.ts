import { createStyles, MantineTheme } from '@mantine/core';
export const useStyles = createStyles((theme: MantineTheme) => ({
	clearButton: {
		color: theme.black,
		fill: theme.black,
		'&:hover': {
			color: theme.colors.red[5],
		},
	},
}));
export default useStyles;
