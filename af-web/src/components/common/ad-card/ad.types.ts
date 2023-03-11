import { CardProps } from '@mantine/core';

export type CardWithoutChildren = Omit<CardProps, 'children'>;
