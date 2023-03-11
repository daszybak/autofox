import { createStyles } from '@mantine/core';
import { AD_CARD } from 'af-shared/lib/components/constants/image';

export const AD_CONTENT_HEIGHT_DIVIDER = 1.8;

export const useStyles = createStyles(() => ({
	title: {
		marginTop: '1rem',
	},
	cursorPointer: {
		cursor: 'pointer',
	},
	adVertical: {
		overflow: 'hidden',
		minHeight: AD_CARD.HEIGHT,
		minWidth: AD_CARD.WIDTH,
	},
	marginLeftAuto: {
		marginLeft: 'auto',
	},
	contentContainer: {
		// height: `calc(${AD_CARD.HEIGHT} / 1.2)`,
	},
	height286: {
		height: '126px',
	},
	grid3x2: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, auto)',
		gridTemplateRows: 'repeat(3, 1fr)',
		rowGap: '0.5rem',
	},
	span1: {
		gridColumn: 'span 1',
	},
	imageContainer: {
		aspectRatio: '4 / 3',
		position: 'relative',
	},
	heightwidth100: {
		height: '100%',
		width: '100%',
	},
}));
