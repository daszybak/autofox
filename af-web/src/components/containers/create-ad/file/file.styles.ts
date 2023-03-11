import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	cardRoot: {
		boxShadow: theme.shadows.sm,
		borderRadius: theme.radius.md,
		height: '375px',
	},
	footer: {
		position: 'absolute',
		top: '420%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: 'calc(100% - 30px)',
	},
	descriptionContainer: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}));
