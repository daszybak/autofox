import { createStyles, MantineTheme } from '@mantine/core';
export const useStyles = createStyles((theme: MantineTheme) => ({
	flexCenter: {
		display: 'flex',
		alignItems: 'center',
	},
	justifyCenter: {
		justifyContent: 'center',
	},
	marginT4: {
		marginTop: '4rem',
	},
}));
export default useStyles;
