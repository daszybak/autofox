import { createStyles, MantineTheme } from '@mantine/core';
export const useStyles = createStyles((theme: MantineTheme) => ({
	wrapper: {
		marginRight: '1rem',
	},
	item: {
		position: 'relative',
		width: '100%',
		height: '100%',
		lineHeight: '1.5',
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',

		borderRadius: 0,
		padding: '0.25rem 0 0.25rem 12px',
		color: theme.black,
	},
	label: {
		textTransform: 'uppercase',
		width: '41px',
		color: theme.black,
		minWidth: '41px',
	},
	input: {
		borderRadius: theme.radius.md,
		border: `1px solid ${theme.colors.gray[1]}`,
		height: '22px',
		minHeight: 'unset',
	},
}));
export default useStyles;
