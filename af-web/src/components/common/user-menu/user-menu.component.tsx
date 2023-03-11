import React, { useState, useRef } from 'react';
import { AuthContextProps } from 'react-oidc-context';
import { Title, UnstyledButton, Text, Button } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { useStyles } from './user-menu.styles';
import Link from 'next/link';
import { useDashboardLinks } from '../../hooks/use-dashboard-links';
import { useAuthHelpers } from '../../hooks/use-auth-helpers';

interface UserInfoPros {
	user: AuthContextProps['user'];
}

const UserInfo: React.FC<UserInfoPros> = ({ user }) => {
	const { classes, cx } = useStyles();
	return (
		<div className={cx(classes.flexDirectionColumn, classes.flexAlignCenter, classes.gap05)}>
			<Title order={3} className={cx(classes.margin0, classes.username)}>
				{user?.profile.name}
			</Title>

			<Text size={'sm'}>{user?.profile.email}</Text>
		</div>
	);
};

interface UserAvatarButtonProps {
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	user: AuthContextProps['user'];
}

const UserAvatarButton = React.forwardRef<HTMLButtonElement, UserAvatarButtonProps>(({ onClick, user }, ref) => {
	const { classes, cx } = useStyles();
	return (
		<UnstyledButton ref={ref} className={cx(classes.navbarButton, classes.backgroundColorGray)} onClick={onClick}>
			{user?.profile.email ? user?.profile.email[0] : ''}
		</UnstyledButton>
	);
});

UserAvatarButton.displayName = 'UserAvatarButton';

const UserMenu: React.FC = () => {
	const { classes, cx } = useStyles();
	const { user, handleSignOut, isAuthenticated } = useAuthHelpers();
	const { accountLinks, mainLinks, myAdLinks } = useDashboardLinks();
	const [menu, setMenu] = useState<boolean>(false);
	const navbarUserItem = useRef<HTMLDivElement>(null);

	const handleMenuOnOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
		setMenu((menu) => !menu);
	};

	const handleMenuOnClose = () => {
		setMenu(false);
	};

	const userControlMenu = useClickOutside<HTMLDivElement>(handleMenuOnClose, null, navbarUserItem.current ? [navbarUserItem.current] : undefined);

	const renderedDashboardLinks = [...mainLinks, ...myAdLinks, ...accountLinks].map(({ name, path }) => (
		<Link href={path} key={name}>
			<Button variant={'subtle'} className={cx(classes.userMenuButton, classes.width100)} onClick={handleMenuOnClose}>
				{name}
			</Button>
		</Link>
	));

	return isAuthenticated && user ? (
		<div className={cx(classes.navbarUserItem, classes.flexAlignCenter)} ref={navbarUserItem}>
			<UserAvatarButton onClick={handleMenuOnOpen} user={user} />
			<div ref={userControlMenu} className={cx(classes.userMenuContainer, classes.flexAlignCenter, classes.flexDirectionColumn, { [classes.userMenuContainerIsVisible]: menu })}>
				<div className={cx(classes.flexAlignCenter, classes.flexJustifyBetween, classes.width100, classes.userMenuHeader, classes.gap05)}>
					<UserAvatarButton user={user} />
					<UserInfo user={user} />
				</div>
				<div className={cx(classes.flexAlignCenter, classes.flexDirectionColumn, classes.width100)}>
					{renderedDashboardLinks}
					<Button
						variant={'subtle'}
						onClick={() => {
							handleSignOut();
							handleMenuOnClose();
						}}
						className={cx(classes.userMenuButton, classes.width100, classes.signOut)}
					>
						Sign out
					</Button>
				</div>
			</div>
		</div>
	) : null;
};
export default UserMenu;
