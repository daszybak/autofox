import React from 'react';
import { ImageProps } from 'next/image';
import { DefaultProps, Selectors } from '@mantine/core';
import { useStyles } from './card.styles';
declare type MyComponentStylesNames = Selectors<typeof useStyles>;
interface Props extends DefaultProps<MyComponentStylesNames> {
    children: React.ReactNode;
    id?: string;
    Header?: React.ComponentType;
    image?: ImageProps;
    variant: 'vertical' | 'horizontal';
}
declare const Card: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default Card;
