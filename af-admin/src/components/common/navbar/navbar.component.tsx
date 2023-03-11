import React from 'react';
import { useAuth } from 'react-oidc-context';
import { Links } from 'af-shared/lib/components/ui/';
import { Navbar as Nav, Button } from '@mantine/core';
import { useStyles } from './navbar.style';

const links = [
	{
		path: '/',
		label: 'Home',
	},
	{
		path: '/categories',
		label: 'Categories',
	},
	{
		path: '/ads',
		label: 'Ads ',
	},
	{
		path: '/users',
		label: 'Users',
	},
	{
		path: '/blogs',
		label: 'Blogs',
	},
	{
		path: '/promotion_plans',
		label: 'Promotion plans',
	},
];

const Navbar = () => {
	const { classes } = useStyles();
	const auth = useAuth();

	return (
		<Nav className={classes.container}>
			<Links data={links} className={classes.linkItems} />
			<Button uppercase color="gray" variant="subtle" size="sm" onClick={() => void auth.signoutRedirect()}>
				Sign out
			</Button>
		</Nav>
	);
};

export default Navbar;
