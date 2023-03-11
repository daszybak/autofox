import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	icon: {
		right: 0,
		left: 'unset',
	},
	withIcon: {
		paddingLeft: '12px',
	},
	root: {
		minWidth: '225px',
	},
}));
