import { createStyles, MantineTheme } from '@mantine/core';
export const useStyles = createStyles((theme: MantineTheme) => ({
	rocketChatWidget: {
		position: 'fixed',
		bottom: '1rem',
		right: '1rem',
		zIndex: 1000,
		width: '300px',
		height: '400px',
	},
}));
export default useStyles;
