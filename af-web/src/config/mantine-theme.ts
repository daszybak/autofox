import { MantineThemeOverride, ButtonStylesParams, MantineTheme, DEFAULT_THEME, Tuple, TitleStylesParams, ContainerStylesParams } from '@mantine/core';

export const mantineTheme: MantineThemeOverride = {
	colors: {
		// index 4 is primary
		orange: [...(DEFAULT_THEME.colors.orange.map((color, i) => (i === 4 ? '#ff8c00' : color)) as Tuple<string, 10>)],
		blue: ['#73798b', '#5b6378', '#444d65', '#2c3651', '#15203e', '#131d38', '#0f162b', '#0b101f', '#1C1E2B', '#020306'],
		gray: ['#fafafa', '#f0f0f0', '#e8e9ec', '#cccccc', '#a4a5a5', '#9d9d9d', '#7e7e7e', '#5e5e5e', '#3f3f3f', '#101010'],
		text: Array.from(new Array(10), () => `#000`) as Tuple<string, 10>,
		title: Array.from(new Array(10), () => `#15203e`) as Tuple<string, 10>,
	},
	primaryShade: 4,
	primaryColor: 'orange',
	black: '#15203e',
	lineHeight: 1.25,
	headings: {
		sizes: {
			h1: {
				// 36px in rem
				fontSize: '2.25rem',
				// 45px in rem
				lineHeight: '2.8125rem',
			},
			h2: {
				// 32px in rem
				fontSize: '2rem',
				// 32 * 1.2 in rem
				lineHeight: '2.4rem',
			},
			h3: {
				// 19px in rem
				fontSize: '1.1875rem',
				// 23px in rem
				lineHeight: '1.4375rem',
			},
			h4: {
				// 18px in rem
				fontSize: '1.125rem',
				// 22px in rem
				lineHeight: '1.375rem',
			},
		},
	},
	fontSizes: {
		xl: 18,
		lg: 18,
		md: 15,
		sm: 14,
		xs: 14,
	},
	fontFamily: 'Poppins, sans-serif',
	cursorType: 'pointer',
	shadows: {
		xs: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
		sm: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',
		md: '0px 10px 40px rgba(0, 0, 0, 0.05)',
		lg: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px',
		xl: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px',
	},
	radius: {
		xs: 2,
		sm: 4,
		md: 8,
		lg: 16,
		xl: 32,
	},
	spacing: {
		xs: 10,
		sm: 12,
		md: 16,
		lg: 20,
		xl: 24,
	},
	breakpoints: {
		xs: 540,
		sm: 720,
		md: 1200,
		lg: 1440,
		xl: 1560,
	},
	components: {
		Anchor: {
			styles: (theme: MantineTheme) => ({
				root: {
					color: theme.white,
					textDecoration: 'none',
				},
			}),
		},
		AfSelect: {
			styles: (theme: MantineTheme) => ({
				placeholderOrValueWrapper: {
					borderRadius: theme.radius.xs,
					border: `1px solid ${theme.colors.gray[1]}`,
					height: '3rem',
					maxWidth: '100%',
					color: theme.black,
					fontSize: theme.fontSizes.sm,
					paddingLeft: '12px',
					paddingRight: '12px',

					'&[data-disabled]': {
						backgroundColor: theme.colors.gray[1],
						color: theme.colors.gray[5],
						pointerEvents: 'none',
						cursor: 'not-allowed',
					},
				},
				itemsWrapper: {
					borderRadius: theme.radius.xs,
					borderColor: theme.colors.gray[1],
				},
				input: {
					border: 'none',
					width: '100%',
					height: '100%',
					padding: '0',

					'&::placeholder': {
						color: theme.black,
						fontSize: theme.fontSizes.sm,
						textTransform: 'uppercase',
					},
				},

				wrapper: {},
				separatorLabel: {},
			}),
		},
		Button: {
			styles: (theme: MantineTheme, params: ButtonStylesParams) => ({
				root: {
					margin: '0',
					borderRadius: theme.other.borderRadius,
					backgroundColor: params.variant === 'filled' ? theme.colors.orange[4] : theme.white,
					color: theme.colors.white,
					height: '50px',
					minWidth: '180px',
					padding: '0 1rem',
					textTransform: 'uppercase',
					letterSpacing: '0.1rem',
				},
			}),
		},
		Card: {
			styles: (theme: MantineTheme) => ({
				root: {
					borderRadius: theme.radius.xs,
					border: `1px solid ${theme.colors.gray[1]}`,
				},
			}),
		},
		Container: {
			defaultProps: {
				sizes: {
					xs: 540,
					sm: 720,
					md: 1140,
					lg: 1440,
					xl: 1560,
				},
			},
			styles: (theme: MantineTheme, params: ContainerStylesParams) => ({
				root: {
					padding: params.fluid ? '0 4rem' : '0 1rem',
				},
			}),
		},
		NativeSelect: {
			styles: (theme: MantineTheme) => ({
				input: {
					borderRadius: theme.radius.xs,
					borderColor: theme.colors.gray[0],
					paddingRight: '2rem !important',
				},
				rightSection: {
					pointerEvents: 'none',
				},
			}),
		},
		Section: {
			styles: (theme: MantineTheme, params) => ({
				sectionContainer: {
					margin: '6rem 0 6rem 0',
				},
				container: {},
				firstSection: {
					marginTop: '6rem',
				},
			}),
		},
		Select: {
			styles: (theme: MantineTheme) => ({
				input: {
					borderRadius: theme.radius.xs,
					borderColor: theme.colors.gray[1],
					paddingRight: '2rem !important',
					textTransform: 'uppercase',
					//input placeholder
					'&::placeholder': {
						color: theme.black,
					},
				},
			}),
		},
		Text: {
			styles: (theme: MantineTheme) => ({
				root: {
					color: theme.colors.text,
				},
			}),
		},
		TextInput: {
			styles: (theme: MantineTheme) => ({
				root: {
					minHeight: '35px',
				},
			}),
		},
		Title: {
			styles: (theme: MantineTheme, params: TitleStylesParams) => ({
				root: {
					margin: '0 0 2rem 0',
					textTransform: 'uppercase',
					color: theme.colors.title,
				},
			}),
		},
		UnstyledSelect: {
			styles: (theme: MantineTheme) => ({
				nativeSelect: {},
			}),
		},
	},
};
