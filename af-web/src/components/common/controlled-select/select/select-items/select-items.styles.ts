import { createStyles, MantineSize } from '@mantine/styles';

interface SelectItemsStyles {
	size: MantineSize;
}

export default createStyles((theme, { size }: SelectItemsStyles) => ({
	item: {
		...theme.fn.fontStyles(),
		boxSizing: 'border-box',
		textAlign: 'left',

		cursor: 'pointer',
		fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

		position: 'relative',
		width: '100%',
		height: '100%',
		lineHeight: '1.5',

		borderRadius: 0,
		padding: '0.25rem 0 0.25rem 12px',

		'&[data-hovered]': {
			backgroundColor: theme.black,
			color: theme.white,
			svg: {
				color: theme.white,
				fill: theme.white,
				path: {
					color: theme.white,
					fill: theme.white,
				},
			},
		},

		'&[data-selected]': {
			backgroundColor: theme.white,
			color: theme.black,
			svg: {
				color: theme.white,
				fill: theme.black,
				path: {
					color: theme.white,
					fill: theme.black,
				},
			},
			'&::before': {
				content: '""',
				position: 'absolute',
				right: 13,
				top: '50%',
				transform: 'translateY(-50%)',
				width: 7,
				height: 15,
				borderRadius: 8,
				backgroundColor: theme.white,
				border: `1px solid ${theme.black}`,
			},

			'&[data-hovered]': {
				backgroundColor: theme.black,
				color: theme.white,
				svg: {
					color: theme.white,
					fill: theme.white,
					path: {
						color: theme.white,
						fill: theme.white,
					},
				},

				'&::before': {
					backgroundColor: theme.black,
					border: `1px solid ${theme.white}`,
				},
			},
		},

		'&[data-disabled]': {
			cursor: 'default',
			color: theme.colors.dark[2],
		},
	},

	nothingFound: {
		// boxSizing: 'border-box',
		// color: theme.colors.gray[6],
		// paddingTop: theme.fn.size({ size, sizes: theme.spacing }) / 2,
		// paddingBottom: theme.fn.size({ size, sizes: theme.spacing }) / 2,
		// textAlign: 'center',
	},

	separator: {
		boxSizing: 'border-box',
		textAlign: 'left',
		width: '100%',
		padding: `${theme.fn.size({ size, sizes: theme.spacing }) / 1.5}px ${theme.fn.size({
			size,
			sizes: theme.spacing,
		})}px`,
	},

	separatorLabel: {
		textTransform: 'uppercase',
		color: theme.colors.gray[5],
	},
}));
