import { useTranslation } from 'next-i18next';
import { Title, Text } from '@mantine/core';

import { useStyles } from './hero-section.styles';
import Button from '../../common/button/button.component';
import Section from 'src/components/common/section/section.component';

const HeroSection = () => {
	const { classes } = useStyles();
	const { t } = useTranslation();

	return (
		<Section
			className={classes.heroSection}
			classNames={{
				container: classes.container,
			}}
		>
			<div className={classes.contentContainer}>
				<Title>{t<string>('home:hero.title')}</Title>
				<Text>{t<string>('home:hero.text')}</Text>
			</div>
			<Button action={'sell'} />
			<Button action={'buy'} className={classes.marginL2} />
		</Section>
	);
};
export default HeroSection;
