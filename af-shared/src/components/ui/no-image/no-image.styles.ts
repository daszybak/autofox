import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	flexAlignJustifyCenter: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	height100: {
		height: '100%',
	},
}));
