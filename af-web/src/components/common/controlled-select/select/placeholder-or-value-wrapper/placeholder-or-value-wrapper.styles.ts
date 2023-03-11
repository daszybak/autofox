import { createStyles, MantineTheme } from '@mantine/core';
export const useStyles = createStyles((theme: MantineTheme) => ({
	placeholderOrValueWrapper: {},
	rightSection: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '36px',
	},
}));
export default useStyles;
