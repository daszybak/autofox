import { createStyles, MantineTheme } from '@mantine/core';
export const useStyles = createStyles((theme: MantineTheme) => ({
	priceRating: {
		//11.5px in rem
		fontSize: '0.725rem',
		//18.88px in rem lineHeight
		lineHeight: '0.875rem',
		textTransform: 'uppercase',
		color: theme.black,
	},
}));
export default useStyles;
