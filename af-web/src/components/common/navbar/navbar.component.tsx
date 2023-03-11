import { useTranslation } from 'next-i18next';
import { Anchor, Container, Flex } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

import Search from '../search-input/search-input.component';
import { useStyles } from './navbar.styles';
import Button from '../button/button.component';
import Links from '../links/links.component';
import { useAuthHelpers } from '../../hooks/use-auth-helpers';
import Language from '../language-select/language-select.component';
import UserIcon from 'public/icons/user.svg';
import IconWrapper from '../icon-wrapper/icon-wrapper.component';
import Logo from '../logo/logo.component';
import UserMenu from '../user-menu/user-menu.component';

const Navbar = () => {
	const { handleSignIn, isAuthenticated } = useAuthHelpers();
	const { t } = useTranslation();
	const { classes, cx } = useStyles();

	return (
		<header>
			<nav>
				<Container className={cx(classes.navigationContainer, classes.center)} fluid>
					<Logo height={52} width={142} />
					<Flex gap={'2rem'} justify={'space-between'}>
						<Flex align={'center'} gap={'2rem'} justify={'space-between'}>
							<Search />
							<Links position={'navbar'} />
							<Button action={'sell'} />
						</Flex>
						<Flex justify={'flex-end'} align={'center'} gap={'2rem'}>
							<Language />
							<Flex justify={'flex-end'} className={classes.user}>
								{isAuthenticated ? (
									<UserMenu />
								) : (
									<Flex>
										<IconWrapper Icon={<UserIcon />} />
										<Anchor
											onClick={() =>
												showNotification({
													title: t<string>('common:header.nav.sign-up'),
													message: 'Not implemented. Please click on sign in.',
												})
											}
											className={cx(classes.anchor, classes.borderRight)}
										>
											{t<string>('common:header.nav.sign-up')}
										</Anchor>
										<Anchor onClick={handleSignIn} className={classes.anchor}>
											{t<string>('common:header.nav.sign-in')}
										</Anchor>
									</Flex>
								)}
							</Flex>
						</Flex>
					</Flex>
				</Container>
			</nav>
		</header>
	);
};
export default Navbar;
