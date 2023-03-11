import { createStyles, MantineTheme } from '@mantine/core';
export const useStyles = createStyles((theme: MantineTheme) => ({
	targetWrapper: {},
	input: {
		'&:not(:disabled)': {
			cursor: 'pointer',

			'&::selection': {
				backgroundColor: 'transparent',
			},
		},
	},
	placeholderOrValueWrapper: {
		position: 'relative',
	},
	selectedItem: {},
}));
export default useStyles;
