import React from 'react';
import { Container as MantineContainer } from '@mantine/core';
import { useStyles } from './container.styles';

interface Props {
	children: React.ReactNode;
	className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
	const { classes, cx } = useStyles();
	const containerClasses = cx(className, classes.container);

	return (
		<MantineContainer fluid className={containerClasses}>
			{children}
		</MantineContainer>
	);
};

export default Container;
