import React from 'react';
import { DefaultProps, Selectors } from '@mantine/core';
import { useStyles } from './section.styles';
declare type MyComponentStylesNames = Selectors<typeof useStyles>;
interface Props extends DefaultProps<MyComponentStylesNames> {
    first?: boolean;
    children: React.ReactNode;
}
declare const Section: React.FC<Props>;
export default Section;
