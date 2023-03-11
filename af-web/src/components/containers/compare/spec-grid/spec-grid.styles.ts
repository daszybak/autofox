import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	specificationsGrid: {
		margin: 0,
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		columnGap: '5rem',
	},
	specRow: {
		display: 'flex',
		//stretch items to fill the row
		alignContent: 'stretch',
		gap: '5rem',
	},
	specField: {
		padding: '1rem 0 0.75rem 0',
		borderBottom: `1px solid ${theme.colors.dark[2]}`,
		width: '15rem',
	},
}));
