import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	toggleButton: {
		textTransform: 'none',
		letterSpacing: 'normal',
		border: 'none',
		color: theme.black,
		fontWeight: 400,
		padding: 0,
		minWidth: 'auto',
	},
	toggleButtonActive: {
		transform: 'rotate(-90deg)',
	},
}));

export default useStyles;
