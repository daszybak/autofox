import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => {
	return {
		preview: {
			display: 'flex',
			alignItems: 'center',
		},
		gridColContainer: {
			padding: 0,
			marginBottom: '1rem',
			cursor: 'grab',
		},
		isDragging: {
			cursor: 'grabbing',
		},
	};
});
