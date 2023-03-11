import { MantineTransition } from '@mantine/core';

export const TRANSITION_STYLES: {
	transition: MantineTransition;
	transitionDuration: number;
	transitionTimingFunction: string;
} = {
	transition: 'scale-y',
	transitionDuration: 80,
	transitionTimingFunction: 'ease',
};
