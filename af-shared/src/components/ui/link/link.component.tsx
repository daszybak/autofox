import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { NavLink } from '@mantine/core';

interface Props extends NextLinkProps {
	children?: React.ReactNode;
	label: string;
	active: boolean;
}

const Link: React.FC<Props> = ({ href, children, ...props }) => {
	return (
		<NextLink href={href}>
			<NavLink {...props}>{children}</NavLink>
		</NextLink>
	);
};

export default Link;
