import { createStyles, MantineTheme } from '@mantine/core';
import { AD_CARD } from 'af-shared/lib/components/constants/image';

const MARGIN_TOP = 2;

interface SearchResultsParams {
	rows?: number;
	columns?: number;
}

export const useStyles = createStyles((theme: MantineTheme, { rows, columns }: SearchResultsParams) => ({
	searchResultsContainer: {
		display: 'grid',
		gridTemplateColumns: `repeat(${columns !== undefined ? columns : 'auto-fill'}, minmax(${AD_CARD.WIDTH}, 1fr))`,
		columnGap: `2rem`,
		gridTemplateRows: `repeat(${rows !== undefined ? rows : 'auto-fill'}, 1fr)`,
		marginTop: `-${MARGIN_TOP}rem`,
		gridAutoRows: rows ? 0 : 'auto',
		overflow: 'hidden',

		'& > *': {
			marginTop: `${MARGIN_TOP}rem`,
		},
	},
	section: {
		gridRow: '4',
		gridColumn: '1/-1',
		alignSelf: 'center',
	},
}));
