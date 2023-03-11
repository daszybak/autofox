import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useContext, useState } from 'react';
import _ from 'lodash';
import { Anchor, Button, Container, LoadingOverlay, Text, Title, UnstyledButton } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useIsomorphicEffect } from '@mantine/hooks';
import { IoAddCircleOutline, IoPrintOutline } from 'react-icons/io5';

import { Ad, useFindAllAdsLazyQuery } from 'af-shared/lib/graphql';

import AfKey from '../../common/af-key/af-key.component';
import { SpecField, SpecGridRow } from './spec-grid/spec-grid.component';
import AfValue from '../../common/af-value/af-value.component';
import CompareCard from './compare-card/compare-card.component';
import { useStyles } from './compare.styles';
import { useGetAfValue } from '../../hooks/use-get-af-value';
import { useVehicleAttributes } from '../../hooks/use-vehicle-attributes';
import { CompareApiCtx, CompareDataCtx } from '../../context/compareCtx.component';
import Section from 'src/components/common/section/section.component';
import { COMPARE_PAGE_CHIDREN_VEHICLE_ATTRIBUTES } from 'src/components/constants/vehicle-attributes';

export const COLLAPSED_SPECS = 6;

const Compare = () => {
	const { classes, cx } = useStyles();
	const { query } = useRouter();
	const adsParam = query.ad;
	const adsParamCount = Array.isArray(adsParam) ? adsParam.length : adsParam ? 1 : 0;

	const { compareAdIds } = useContext(CompareDataCtx);
	const { setStatus } = useContext(CompareApiCtx);
	const [ads, setAds] = useState<Ad[]>([]);

	const [Basic, setBasic] = useState<boolean>(false);
	const [Tech, setTech] = useState<boolean>(false);
	const [differences, setDifferences] = useState<boolean>(false);

	const getAfValue = useGetAfValue();

	const [findAllAdsFn, { loading }] = useFindAllAdsLazyQuery();

	const vehicleAttributes = useVehicleAttributes('Compare', COMPARE_PAGE_CHIDREN_VEHICLE_ATTRIBUTES) as Record<
		typeof COMPARE_PAGE_CHIDREN_VEHICLE_ATTRIBUTES[number],
		string[]
	> | null;

	const filterPredicate = useCallback(
		(attribute: string) => {
			const values = ads.map((ad) => getAfValue(ad, attribute));
			return _.uniq(values).length === values.length ? true : false;
		},
		[ads, getAfValue],
	);

	const basicDifferences = vehicleAttributes?.Basic.filter(filterPredicate);
	const techDifferences = vehicleAttributes?.Tech.filter(filterPredicate);

	useIsomorphicEffect(() => {
		setStatus('visited');
		(async () => {
			const { data } = await findAllAdsFn({
				variables: {
					where: {
						OR: compareAdIds.slice(0, 3).map((ad) => ({
							ad_id: {
								equals: _.toNumber(ad),
							},
						})),
					},
				},
			});
			setAds((data?.findAllAds as Ad[] | undefined) ?? []);
		})();
	}, [adsParam, findAllAdsFn, adsParamCount, compareAdIds.length]);

	return (
		<div>
			<Container fluid className={cx(classes.headerBar, classes.bgColorDark2)}>
				<Container className={cx(classes.flex, classes.alignItemsCenter, classes.justifyBetween)}>
					<Text>Compare</Text>
					<Link href={'listings/search'}>
						<UnstyledButton className={cx(classes.flex, classes.alignItemsCenter, classes.gap05)}>
							<Text>Add Ad</Text>
							<IoAddCircleOutline />
						</UnstyledButton>
					</Link>
					<UnstyledButton
						className={cx(classes.flex, classes.alignItemsCenter, classes.gap05)}
						onClick={() =>
							showNotification({
								title: 'Print',
								message: 'Functionality is not implemented yet',
							})
						}
					>
						<Text>Print</Text>
						<IoPrintOutline />
					</UnstyledButton>
				</Container>
			</Container>
			<Section first>
				<LoadingOverlay visible={loading} />
				<div className={cx(classes.flex, classes.flexColumn)}>
					<SpecGridRow className={classes.marginB2}>
						<div className={cx(classes.width15, classes.height297)} />
						{ads.map((ad) => (
							<CompareCard ad={ad} key={ad.ad_id} />
						))}
						{adsParamCount === 0 && !loading && <Text className={classes.margin0}>Please click on Add Ad+ to compare up to 3 ads</Text>}
					</SpecGridRow>
					{ads && ads.length > 1 ? (
						<>
							<SpecGridRow className={cx(classes.marginB2, classes.flex, classes.justifyCenter)}>
								<Button onClick={() => setDifferences((prev) => !prev)} color={differences ? 'green' : undefined}>
									Show only differences
								</Button>
							</SpecGridRow>
						</>
					) : null}
					<Title order={3}>BASICS</Title>
					{((differences ? basicDifferences : vehicleAttributes?.Basic) ?? []).slice(0, Basic ? undefined : COLLAPSED_SPECS).map((attribute) => (
						<SpecGridRow key={attribute}>
							<SpecField>
								<AfKey weight={'bold'} transform={'uppercase'} attribute={attribute} />
							</SpecField>
							{ads.map((ad) => (
								<SpecField key={ad.ad_id}>
									<AfValue attribute={attribute} ad={ad} />
								</SpecField>
							))}
						</SpecGridRow>
					))}
					<SpecGridRow className={cx(classes.marginB4, classes.flex, classes.alignItemsCenter, classes.justifyCenter, classes.paddingT2)}>
						<Anchor
							underline
							align={'center'}
							onClick={() => {
								setBasic(!Basic);
							}}
							className={cx({ [classes.visibilityHidden]: ads.length === 0 })}
						>
							{Basic ? 'VIEW LESS' : 'VIEW MORE'}
						</Anchor>
					</SpecGridRow>
					<Title order={3}>TECH</Title>
					{((differences ? techDifferences : vehicleAttributes?.Tech) ?? []).slice(0, Tech ? undefined : COLLAPSED_SPECS).map((attribute) => (
						<SpecGridRow key={attribute}>
							<SpecField>
								<AfKey weight={'bold'} transform={'uppercase'} attribute={attribute} />
							</SpecField>
							{ads.map((ad) => (
								<SpecField key={ad.ad_id}>
									<AfValue attribute={attribute} ad={ad} />
								</SpecField>
							))}
						</SpecGridRow>
					))}
					<SpecGridRow className={cx(classes.marginB4, classes.flex, classes.alignItemsCenter, classes.justifyCenter, classes.paddingT2)}>
						<Anchor
							underline
							align={'center'}
							onClick={() => {
								setTech(!Tech);
							}}
							className={cx({ [classes.visibilityHidden]: ads.length === 0 })}
						>
							{Tech ? 'VIEW LESS' : 'VIEW MORE'}
						</Anchor>
					</SpecGridRow>
					<Title order={3}>FEATURES</Title>
				</div>
			</Section>
		</div>
	);
};

export default Compare;
