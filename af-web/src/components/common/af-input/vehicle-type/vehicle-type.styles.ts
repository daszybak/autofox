import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	vehicleType: {
		'&[data-selected="true"]': {
			backgroundColor: theme.black,
			color: theme.white,

			svg: {
				fill: theme.white,
			},
		},
	},
}));
