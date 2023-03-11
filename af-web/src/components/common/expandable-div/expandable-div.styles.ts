import { createStyles, MantineTheme } from '@mantine/core';

export const DURATION = 300;

export const useStyles = createStyles((theme: MantineTheme) => ({
	enter: {
		opacity: 0,
	},
	enterActive: {
		opacity: 1,
		transition: `all ${DURATION}`,
	},
	exit: {
		opacity: 1,
	},
	exitActive: {
		opacity: 0,
		transition: `all ${DURATION}`,
	},
}));
