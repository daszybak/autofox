import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	cropContainer: {
		position: 'relative',
		width: '100%',
		height: 500,
		background: '#333',
	},
	sliderContainer: {
		margin: '1rem 0',
	},
	buttonContainer: {
		textAlign: 'right',
	},
	modal: {
		maxHeight: '85vh',
	},
}));
