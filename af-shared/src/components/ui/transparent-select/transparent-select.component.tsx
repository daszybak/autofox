import React from 'react';
import { NativeSelect, DefaultProps, Selectors, SelectItem } from '@mantine/core';
import { useStyles } from './transparent-select.styles';

type MyComponentStylesNames = Selectors<typeof useStyles>;

interface Props extends DefaultProps<MyComponentStylesNames> {
	data: SelectItem[];
}

const Transperent: React.FC<Props> = React.forwardRef<HTMLSelectElement, Props>(({ data, classNames, styles, unstyled, className, ...others }, ref) => {
	const { classes } = useStyles(undefined, { name: 'Transperent', classNames, unstyled });
	return <NativeSelect className={classes.nativeSelect} data={data} ref={ref} {...others} />;
});

export default Transperent;
