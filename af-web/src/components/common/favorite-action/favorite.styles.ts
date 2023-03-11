import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	icon: {
		svg: {
			color: theme.fn.primaryColor(),
		},
	},
	active: {
		svg: {
			color: 'white',
		},
	},
	emptyIcon: {
		'&:hover': {
			transform: 'scale(1.1)',
		},
	},
}));
