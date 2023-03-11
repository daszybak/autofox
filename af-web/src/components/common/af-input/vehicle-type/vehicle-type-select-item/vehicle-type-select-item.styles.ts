import { createStyles, MantineTheme } from '@mantine/core';
export const useStyles = createStyles((theme: MantineTheme) => ({
	item: {
		height: '32px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
}));
export default useStyles;
