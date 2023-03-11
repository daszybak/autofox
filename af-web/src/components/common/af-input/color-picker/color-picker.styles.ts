import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	root: {},
	input: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: '1px',
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		whiteSpace: 'nowrap',
		width: '1px',

		'&:checked + svg': {
			visibility: 'visible',
		},
	},
	label: {
		cursor: 'pointer',
		fontSize: theme.fontSizes.md,
	},
	inputContainer: {
		width: '34px',
		height: '34px',
		cursor: 'pointer',
		border: '1px solid #111',
		borderRadius: theme.radius.sm,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		visibility: 'hidden',
	},
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		gap: '0.5rem',
	},
}));
