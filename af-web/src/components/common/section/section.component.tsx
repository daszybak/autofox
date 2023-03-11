import React from 'react';
import { DefaultProps, Selectors, Container } from '@mantine/core';
import { useStyles } from './section.styles';

type MyComponentStylesNames = Selectors<typeof useStyles>;

interface Props extends DefaultProps<MyComponentStylesNames> {
	first?: boolean;
	children: React.ReactNode;
}

const Section: React.FC<Props> = ({ children, classNames, styles, unstyled, className, first = false, ...others }) => {
	const { classes, cx } = useStyles(undefined, { name: 'Section', classNames, unstyled });

	return (
		<section className={cx(classes.sectionContainer, className, { [classes.firstSection]: first })}>
			<Container size={'xl'} className={classes.container}>
				{children}
			</Container>
		</section>
	);
};
export default Section;
