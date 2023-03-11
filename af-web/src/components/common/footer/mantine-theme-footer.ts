import { MantineTheme, MantineThemeOverride, Tuple } from '@mantine/core';
import { transform } from 'lodash';

export const mantineThemeOverrideWithWhiteText: MantineThemeOverride = {
	colors: {
		white: Array.from(new Array(10), () => `#fff`) as Tuple<string, 10>,
		text: Array.from(new Array(10), () => `#fff`) as Tuple<string, 10>,
	},
	primaryColor: 'white',
	components: {
		Title: {
			styles: (theme: MantineTheme, params) => ({
				root: {
					textTransform: 'capitalize',
					marginBottom: '1.5rem',
				},
			}),
		},
	},
};
