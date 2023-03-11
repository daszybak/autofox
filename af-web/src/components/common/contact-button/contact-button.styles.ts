import { createStyles, MantineTheme } from '@mantine/core';
export const useStyles = createStyles((theme: MantineTheme) => ({
	rocketChat: {
		position: 'fixed',
		bottom: 0,
		right: 0,
		zIndex: 1000,
		margin: theme.spacing.xl,
		width: 400,
		height: 500,

		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
		boxShadow: theme.shadows.sm,
		transition: 'all 0.2s ease',
		'&:hover': {
			boxShadow: theme.shadows.md,
		},
	},
}));
export default useStyles;
