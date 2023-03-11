import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => {
	return {
		margin1: {
			margin: '1rem 0',
		},
		gridCol: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'row',
			justifyContent: 'flex-start',
		},
		flexEnd: {
			justifyContent: 'flex-end',
		},
		sectionContainer: {},
		width10: {
			width: '10rem',
		},
	};
});
