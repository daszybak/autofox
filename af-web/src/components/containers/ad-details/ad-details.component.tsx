import { useRouter } from 'next/router';
import { Button, Container, Title, Text, Anchor, Rating } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { format } from 'date-fns';
import _ from 'lodash';

import { Ad, Category, FindUniqueAdWhereAdIdEqualsQueryVariables, useFindUniqueAdWhereAdIdEqualsQuery, useFindAllCategoriesQuery } from 'af-shared/lib/graphql';
import { sortMap } from 'af-shared/lib/components/constants/select-item-sort-map';

import { useStyles } from './ad-details.styles';
import AdsCarousel from '../ads-carousel/ads-carousel.component';
import { useParsedDateString } from '../../hooks/use-parsed-date-string';
import Document from 'public/icons/document.svg';
import Odometer from 'public/icons/odometer.svg';
import { TbEngine as Engine } from 'react-icons/tb';
import Tank from 'public/icons/tank.svg';
import Transmission from 'public/icons/transmission.svg';
import Gallery from './gallery/gallery.component';

import { FiMinus } from 'react-icons/fi';
import Favorite from '../../common/favorite-action/favorite-action.component';
import AfValue from '../../common/af-value/af-value.component';
import AfKey from '../../common/af-key/af-key.component';
import Share from '../../common/share-action/share-action.component';
import { useVehicleAttributes } from '../../hooks/use-vehicle-attributes';
import { COLLAPSED_SPECS } from '../compare/compare.component';
import { useState } from 'react';
import Section from 'src/components/common/section/section.component';
import { COMPARE_PAGE_CHIDREN_VEHICLE_ATTRIBUTES } from 'src/components/constants/vehicle-attributes';
import ContactButton from 'src/components/common/contact-button/contact-button.component';
export interface PropsWithAd {
	ad: Ad | null | undefined;
}

interface PropsWithIcon {
	icon?: React.ReactNode;
}

const Seller: React.FC<PropsWithAd> = ({ ad }) => {
	const { classes, cx } = useStyles();

	return (
		<Container fluid className={classes.sellerContainer}>
			<Section>
				<Title order={2}>Seller</Title>
				<div className={cx(classes.flexContainer, classes.justifySpaceBet)}>
					<div className={cx(classes.flexContainer, classes.flexDirectionColumn, classes.justifySpaceBet)}>
						<Text size={'xl'} weight={700} className={classes.marginB1}>
							{ad?.user?.name}
						</Text>
						<div>
							<Text size={'md'}>Adress: Giuseppe Carabino 20, 51000 Rijeka</Text>
							<Text size={'md'}>Phone: 051 265 845</Text>
							<Text size={'md'}>Website: www.foxcar.com</Text>
							<Text size={'md'}>Email: info@foxcar.com</Text>
							<Text size={'md'}>Bussiness hours: Mon - Fri: 08-16, Sat - Sun: closed</Text>
						</div>
					</div>
					<div className={cx(classes.flexContainer, classes.flexDirectionColumn, classes.justifySpaceBet)}>
						<div>
							<Rating value={4} readOnly />
							<Text>4 rating</Text>
						</div>
						<Anchor
							underline
							onClick={() => {
								showNotification({
									title: 'SEE ALL ADS FROM THIS DEALER',
									message: 'Functionality not implemented',
								});
							}}
						>
							SEE ALL ADS FROM THIS DEALER
						</Anchor>
						<ContactButton />
					</div>
				</div>
			</Section>
		</Container>
	);
};

interface AdLinkProps extends PropsWithIcon {
	path: string;
	text: string;
}

const Action: React.FC<AdLinkProps> = ({ path, text, icon }) => {
	const { classes, cx } = useStyles();
	return (
		// <Link href={path}>
		<Anchor
			onClick={() => {
				showNotification({
					title: text,
					message: 'Functionality not implemented',
				});
			}}
		>
			<div className={cx(classes.flexAlignCenter, classes.gap05, classes.icon)}>
				<Text>{text}</Text>
				{icon}
			</div>
		</Anchor>
		// </Link>
	);
};

interface ActionProps {
	ad: Ad | null | undefined;
}

const Actions: React.FC<ActionProps> = ({ ad }) => {
	const { classes, cx } = useStyles();
	return (
		<Container className={cx(classes.gap1, classes.flexAlignCenter, classes.justifyEnd, classes.adLinks)}>
			<Action path={'/'} text={'Print'} icon={<Document fill="black" />} />
			<Share title={ad?.title} />
			<Action path={'/'} text={'Report Ad'} icon={<Document />} />
		</Container>
	);
};

interface SpecsProps extends PropsWithAd {
	categories: Category[] | undefined;
}

interface KeyFeatureProps extends PropsWithIcon {
	keyFeature: Record<string, React.ReactNode>;
}

const KeyFeature: React.FC<KeyFeatureProps> = ({ keyFeature }) => {
	const { classes, cx } = useStyles();
	return (
		<div className={cx(classes.justifySpaceBet, classes.flexAlignCenter, classes.keyFeatureContainer, classes.flexDirectionColumn)}>
			{keyFeature.icon}
			<Text align={'center'}>{keyFeature.key}</Text>
			<Text align={'center'} weight={'bold'}>
				{keyFeature.value ?? <FiMinus />}
			</Text>
		</div>
	);
};

const DIMENSIONS = {
	width: 48,
	height: 48,
	size: 48,
} as const;

const KeyFeatures: React.FC<SpecsProps> = ({ ad }) => {
	const { classes, cx } = useStyles();
	const renderedKeyFeatures = [
		{ key: <AfKey attribute={'km'} />, value: <AfValue ad={ad} attribute={'km'} />, icon: <Odometer {...DIMENSIONS} /> },
		{ key: <AfKey attribute={'power_kw'} />, value: <AfValue ad={ad} attribute={'power_kw'} />, icon: <Engine {...DIMENSIONS} /> },
		{
			key: <AfKey attribute={'fuel_type_cid'} />,
			value: <AfValue ad={ad} attribute={'fuel_type_cid'} />,
			icon: <Tank {...DIMENSIONS} />,
		},
		{
			key: <AfKey attribute={'transmission_type_cid'} />,
			value: <AfValue ad={ad} attribute={'transmission_type_cid'} format={(value) => _.split(value, /-| /g)[0]} />,
			icon: <Transmission {...DIMENSIONS} />,
		},
	].map((keyFeature, i) => <KeyFeature keyFeature={keyFeature} key={i} icon={keyFeature.icon} />);
	return <div className={cx(classes.flexAlignCenter, classes.gap05, classes.alignItemsStretch)}>{renderedKeyFeatures}</div>;
};

interface SpecFieldProps {
	span?: number;
	className?: string;
	children: React.ReactNode;
}

const SpecField: React.FC<SpecFieldProps> = ({ className, children }) => {
	const { classes, cx } = useStyles();
	return <div className={cx(className, classes.specField)}>{children}</div>;
};

interface SpecGrid {
	title: string;
	children: React.ReactNode;
}

const SpecGrid: React.FC<SpecGrid> = ({ title, children }) => {
	const { cx, classes } = useStyles();
	return (
		<div>
			<Title order={2}>{title}</Title>
			<div className={classes.specificationsGrid}>{children}</div>
		</div>
	);
};

const BasicSpecs: React.FC<SpecsProps> = ({ ad }) => {
	const { cx, classes } = useStyles();
	const [showMore, setShowMore] = useState<boolean>(false);
	const vehicleAttributes = useVehicleAttributes('Compare', COMPARE_PAGE_CHIDREN_VEHICLE_ATTRIBUTES) as Record<
		typeof COMPARE_PAGE_CHIDREN_VEHICLE_ATTRIBUTES[number],
		string[]
	> | null;

	const Basic = vehicleAttributes?.Basic;

	return (
		<>
			<SpecGrid title={'BASIC'}>
				{Basic?.slice(0, showMore ? undefined : COLLAPSED_SPECS).map((attribute, i) => (
					<SpecField key={i}>
						<AfKey weight={'bold'} attribute={attribute} />
						<AfValue ad={ad} attribute={attribute} />
					</SpecField>
				))}
			</SpecGrid>
			<div className={cx(classes.flexAlignCenter, classes.justifyCenter, classes.marginT1)}>
				<Anchor
					underline
					align={'center'}
					onClick={() => {
						setShowMore(!showMore);
					}}
				>
					{showMore ? 'VIEW LESS' : 'VIEW MORE'}
				</Anchor>
			</div>
		</>
	);
};

const TechnicalSpecs: React.FC<SpecsProps> = ({ ad }) => {
	const { cx, classes } = useStyles();
	const [showMore, setShowMore] = useState<boolean>(false);
	const vehicleAttributes = useVehicleAttributes('Compare', COMPARE_PAGE_CHIDREN_VEHICLE_ATTRIBUTES) as Record<
		typeof COMPARE_PAGE_CHIDREN_VEHICLE_ATTRIBUTES[number],
		string[]
	> | null;

	const Tech = vehicleAttributes?.Tech;
	return (
		<>
			<SpecGrid title={'TECH'}>
				{Tech?.slice(0, showMore ? undefined : COLLAPSED_SPECS).map((attribute, i) => (
					<SpecField key={i}>
						<AfKey weight={'bold'} attribute={attribute} />
						<AfValue ad={ad} attribute={attribute} />
					</SpecField>
				))}
			</SpecGrid>
			<div className={cx(classes.flexAlignCenter, classes.justifyCenter, classes.marginT1)}>
				<Anchor
					underline
					align={'center'}
					onClick={() => {
						setShowMore(!showMore);
					}}
				>
					{showMore ? 'VIEW LESS' : 'VIEW MORE'}
				</Anchor>
			</div>
		</>
	);
};

export const AdSummary: React.FC<PropsWithAd> = ({ ad }) => {
	const { classes, cx } = useStyles();
	const value = 4;
	const adId = ad?.ad_id;

	return (
		<Container className={cx(classes.summaryContainer, classes.flexDirectionColumn)}>
			<Title order={1} className={cx(classes.margin0, classes.adSummaryTitle)}>
				{ad?.title}
			</Title>
			<div className={cx(classes.summaryGroupedInfoContainer, classes.flexDirectionColumn)}>
				<Text weight={'bold'}>{ad?.price_eurocent} €</Text>
				<div className={cx(classes.flexAlignCenter, classes.gap1)}>
					<Text weight={'bold'} size="sm">
						OK PRICE
					</Text>
					<Rating value={value} />
				</div>
			</div>
			<div className={cx(classes.summaryGroupedInfoContainer, classes.flexDirectionColumn)}>
				<Text weight={'bolder'}>{ad?.user?.name}</Text>
				<Text>+385 456789</Text>
				<div className={cx(classes.flexAlignCenter, classes.gap1)}>
					<Rating value={value} readOnly />
					<Text>{value} Rating</Text>
				</div>
				<ContactButton />
			</div>
			<div className={cx(classes.flexAlignCenter, classes.justifySpaceBet)}>
				{adId && <Favorite ad_id={ad?.ad_id} saveLabel={'Save'} removeLabel={'Remove'} withLabel />}
				<Action path="/" text="Compare" icon={<Document />} />
			</div>
		</Container>
	);
};

const AdDetails: React.FC = () => {
	const { classes, cx } = useStyles();
	const { query } = useRouter();
	const variables: FindUniqueAdWhereAdIdEqualsQueryVariables = {
		where: {
			ad_id: Number(query.id),
		},
	};
	const { data: adData } = useFindUniqueAdWhereAdIdEqualsQuery({ variables });
	const ad = adData?.findUniqueAd as Ad | null | undefined;
	const { data } = useFindAllCategoriesQuery();
	const categories = data?.findAllCategories as Category[] | undefined;
	const createdAt = useParsedDateString(ad?.created_at);

	console.log('createdAt', createdAt);

	return (
		<>
			<Section first>
				<Container className={classes.flexContainer}>
					<Gallery ad={ad} />
					<AdSummary ad={ad} />
				</Container>
				<div className={classes.marginT3}>
					<KeyFeatures ad={ad} categories={categories} />
				</div>
			</Section>
			<Section>
				<Container>
					<BasicSpecs categories={categories} ad={ad} />
				</Container>
			</Section>
			<Section>
				<Container>
					<TechnicalSpecs categories={categories} ad={ad} />
				</Container>
			</Section>
			<Section>
				<Container>
					<Title order={2}>FEATURES</Title>
				</Container>
			</Section>
			<Section>
				<Container>
					<Title order={2}>SELLER&apos;S CAR DESCRIPTION</Title>
					<p>{ad?.text}</p>
				</Container>
			</Section>
			<Seller ad={ad} />
			<Section>
				<Container className={cx(classes.flexAlignCenter, classes.justifySpaceBet)}>
					<div>
						<Text>Ad published: {createdAt ? `${format(createdAt, 'dd.MM.yyyy')} at ${format(createdAt, 'H:m')}` : ''}</Text>
						<Text>Ad displayed: 20731 times</Text>
					</div>
					<Actions ad={ad} />
				</Container>
			</Section>
			<Section>
				<Container>
					<Title order={1} align="center">
						RECOMMENDED VEHICLES
					</Title>
					<AdsCarousel title={''} orderBy={sortMap.createdAtDesc} />
				</Container>
			</Section>
		</>
	);
};
export default AdDetails;
