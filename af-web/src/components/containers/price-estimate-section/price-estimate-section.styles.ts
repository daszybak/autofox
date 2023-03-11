import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	priceEstimateContainer: {
		paddingLeft: '10rem',
		position: 'relative',
	},
	imagePlaceholder: {
		width: '100%',
		zIndex: -1,
		marginTop: '-9rem',
		transform: 'translateY(11%)',
		position: 'relative',

		'&::before': {
			content: '""',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '58%',
			backgroundColor: theme.colors.gray[1],
			borderRadius: '20px',
		},
	},
	marginB1: {
		marginBottom: '1rem',
	},
	contentContainer: {
		height: '100%',
		minHeight: '100%',
	},
}));
