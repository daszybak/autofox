import { Button } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDashboardLinks } from '../../../hooks/use-dashboard-links';
import { useAuthHelpers } from '../../../hooks/use-auth-helpers';
import { useStyles } from './sidebar.styles';

interface Props {
	className: string;
}

const Sidebar: React.FC<Props> = ({ className }) => {
	const { classes, cx } = useStyles();
	const { handleSignOut } = useAuthHelpers();
	const { pathname } = useRouter();
	const { mainLinks, myAdLinks, accountLinks } = useDashboardLinks();

	const renderedMainLinks = mainLinks.map(({ name, path }) => {
		return (
			<Link href={path} key={name}>
				<Button variant={'subtle'} className={cx(classes.button, { [classes.buttonIsActive]: path === pathname })}>
					{name}
				</Button>
			</Link>
		);
	});
	const renderedMyAdLinks = myAdLinks.map(({ name, path }) => {
		return (
			<Link href={path} key={name}>
				<Button variant={'subtle'} className={cx(classes.button, { [classes.buttonIsActive]: path === pathname })}>
					{name}
				</Button>
			</Link>
		);
	});
	const renderedAccountLinks = accountLinks.map(({ name, path }) => {
		return (
			<Link href={path} key={name}>
				<Button variant={'subtle'} className={cx(classes.button, { [classes.buttonIsActive]: path === pathname })}>
					{name}
				</Button>
			</Link>
		);
	});

	return (
		<aside className={cx(className)}>
			<nav>
				<div className={cx(classes.linksContainer)}>
					<div className={cx(classes.linksContainer, classes.borderB)}>{renderedMainLinks}</div>
					<div className={cx(classes.linksContainer, classes.borderB)}>{renderedMyAdLinks}</div>
					<div className={cx(classes.linksContainer)}>
						{renderedAccountLinks}
						<Button variant={'subtle'} onClick={handleSignOut} className={cx(classes.button, classes.signOut)}>
							Sign out
						</Button>
					</div>
				</div>
			</nav>
		</aside>
	);
};
export default Sidebar;
