import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => {
	const colors = theme.fn.variant({ variant: 'filled' });
	return {
		root: {},
		// input: {
		// 	'&:checked + svg': {
		// 		visibility: 'visible',
		// 	},
		// 	'&:checked': {
		// 		backgroundColor: theme.primaryColor,
		// 		borderColor: theme.primaryColor,
		// 	},
		// 	position: 'relative',
		// 	margin: '0 !important',

		// 	width: '20px',
		// 	height: '20px',

		// 	border: `1px solid ${theme.colors.gray[4]}`,
		// },
		label: {
			display: 'flex',
			alignItems: 'center',
			gap: '1rem',
			svg: {
				width: 60,
				height: 60,
				transform: 'translateY(2px)',
			},
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

			input: {
				position: 'relative',
			},
		},
		icon: {
			visibility: 'hidden',
		},
		wrapper: {
			display: 'flex',
			alignItems: 'center',
			gap: '0.5rem',
		},
		visuallyHidden: {
			border: 0,
			clip: 'rect(0 0 0 0)',
			height: '1px',
			margin: -1,
			overflow: 'hidden',
			padding: 0,
			position: 'absolute',
			whiteSpace: 'nowrap',
			width: '1px',
		},
		radioGroupContainer: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
	};
});
