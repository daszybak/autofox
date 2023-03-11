import React from 'react';
import { Container } from '@mantine/core';
import { useStyles } from './flex-container.styles';

interface Props {
	className?: string;
	children: React.ReactNode;
}

const FlexContainer: React.FC<Props> = ({ children, className }) => {
	const { classes, cx } = useStyles();
	const containerClasses = cx(className, classes.container);

	console.log(containerClasses);

	return (
		<Container fluid className={containerClasses}>
			{children}
		</Container>
	);
};

export default FlexContainer;
