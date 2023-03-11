import { createStyles, MantineTheme } from '@mantine/core';
import { CardVariant } from '../../types/card-variant';

export interface MyCardStylesParams {
	variant: CardVariant;
}

export const useStyles = createStyles((theme: MantineTheme, _params: MyCardStylesParams) => ({
	root: {},
	cardContainer: {},
	imageContainer: {},
	imagePlaceholder: {},
	contentContainer: {},
	orientation: {},
}));
