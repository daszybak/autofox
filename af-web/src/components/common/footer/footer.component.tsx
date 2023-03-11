import { Container, Anchor, Title, Group, Text, MantineProvider, Flex } from '@mantine/core';
import { FaAppStoreIos } from 'react-icons/fa';
import { GrGooglePlay } from 'react-icons/gr';
import { mantineThemeOverrideWithWhiteText } from 'src/components/common/footer/mantine-theme-footer';
import Links from '../links/links.component';
import Logo from '../logo/logo.component';
import { useStyles } from './footer.styles';

import SocialMedia from './social-media/social-media.component';

const Footer = () => {
	const { classes } = useStyles();
	return (
		<MantineProvider theme={mantineThemeOverrideWithWhiteText} inherit>
			<footer className={classes.footerContainer}>
				<Container size={'xl'} className={classes.gridContainer}>
					<div>
						<Logo />
					</div>
					<div>
						<Title order={4}>Links</Title>
						<div className={classes.grid2x4}>
							<Links position="footer" />
						</div>
					</div>
					<div>
						<Title order={4}>Download App</Title>
						<Text
							style={{
								marginBottom: '1rem',
							}}
						>
							For faster, easier search and exclusive deals.
						</Text>
						<Anchor href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
							<FaAppStoreIos size={24} />
						</Anchor>
						<Anchor
							style={{
								marginLeft: '1rem',
							}}
							href="https://play.google.com/apps/internaltest/4701668676708182951"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GrGooglePlay size={24} />
						</Anchor>
					</div>
					<SocialMedia />
				</Container>
				<span className={classes.spanLine} />
				<Container size={'xl'}>
					<Flex align={'center'} justify={'space-between'}>
						<Text>© 2022.</Text>
						<Anchor className={classes.version} href="/version.txt" target="_blank" rel="noopener noreferrer">
							Version.txt
						</Anchor>
					</Flex>
				</Container>
			</footer>
		</MantineProvider>
	);
};
export default Footer;
