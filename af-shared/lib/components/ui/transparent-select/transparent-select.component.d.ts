import React from 'react';
import { DefaultProps, Selectors, SelectItem } from '@mantine/core';
import { useStyles } from './transparent-select.styles';
declare type MyComponentStylesNames = Selectors<typeof useStyles>;
interface Props extends DefaultProps<MyComponentStylesNames> {
    data: SelectItem[];
}
declare const Transperent: React.FC<Props>;
export default Transperent;
