import { GetServerSideProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { sortMap } from 'af-shared/lib/components/constants/select-item-sort-map';
import {
	FindAllAdsDocument,
	FindAllAdsQuery,
	FindAllAdsQueryVariables,
	FindAllCategoriesDocument,
	FindAllCategoriesQuery,
	FindAllCategoriesQueryVariables,
} from 'af-shared/lib/graphql';
import { addApolloState, initializeApollo } from 'af-shared/lib/graphql/apollo/client';
import { AdsCarousel } from '../../components';
import { getAttributeDefinitions } from '../../components/api/get-attribute-definitions';
import { DEFAULT_LOCALE } from '../../components/constants/locale';
import Compare from '../../components/containers/compare/compare.component';
import _ from 'lodash';

const ComparePage: NextPage = () => {
	const { t } = useTranslation();
	return (
		<>
			<Compare />
			<AdsCarousel title={t<string>('home:trending')} orderBy={sortMap.createdAtDesc} />
		</>
	);
};
export default ComparePage;

export const getServerSideProps: GetServerSideProps = async ({ locale = DEFAULT_LOCALE, query }) => {
	const client = initializeApollo();

	const attributeDefinitions = await getAttributeDefinitions();

	await client.query<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>({
		query: FindAllCategoriesDocument,
	});

	const adsParam = query.ads;
	const adsParamExists = !_.isNil(adsParam);
	const adsParamArray = Array.isArray(adsParam) ? adsParam : [adsParam];

	if (adsParamExists && adsParamArray.length > 0) {
		await client.query<FindAllAdsQuery, FindAllAdsQueryVariables>({
			variables: {
				where: {
					OR: adsParamArray.map((ad) => ({
						ad_id: {
							equals: _.toNumber(ad),
						},
					})),
				},
			},
			query: FindAllAdsDocument,
		});
	}

	return addApolloState(client, {
		props: {
			attributeDefinitions,
			...(await serverSideTranslations(locale, ['home', 'common'])),
		},
	});
};
