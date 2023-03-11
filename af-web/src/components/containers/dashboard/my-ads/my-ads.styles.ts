import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	filterContainer: {
		display: 'flex',
		alignContent: 'center',
		gap: '1rem',
	},
	adsContainer: {
		padding: '2rem 2rem',
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
	},
	relative: {
		position: 'relative',
	},
	action: {
		display: 'flex',
		alignItems: 'center',
		gap: '0.5rem',
	},
	pagination: {
		margin: '2rem auto 0 auto',
	},
}));
