import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	cardRoot: {
		padding: '1rem',
		border: `1px solid ${theme.colors.dark[2]}`,
		borderRadius: theme.radius.md,
	},
	alignCenter: {
		alignItems: 'center',
	},
	gap05: {
		gap: '0.5rem',
	},
	gap025: {
		gap: '0.25rem',
	},
	gap2: {
		gap: '2rem',
	},
	gap1: {
		gap: '1rem',
	},
	gap3: {
		gap: '3rem',
	},
	spaceBetween: {
		justifyContent: 'space-between',
	},
	flexColumn: {
		flexDirection: 'column',
	},
	flex: {
		display: 'flex',
	},
	savedSearchesContainer: {
		padding: '2rem 2rem',
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
	},
	pagination: {
		margin: '2rem auto 0 auto',
	},
	margin0: {
		margin: 0,
	},
	height4: {
		height: '4rem',
	},
	height100: {
		height: '100%',
	},
}));
