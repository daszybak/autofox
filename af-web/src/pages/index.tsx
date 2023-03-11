import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
	FindAllAdsDocument,
	FindAllAdsQuery,
	FindAllAdsQueryVariables,
	FindAllCategoriesDocument,
	FindAllCategoriesQuery,
	AggregateAdsWhereQuery,
	AggregateAdsWhereDocument,
	InputMaybe,
	AdWhereInput,
	FindAllCategoriesQueryVariables,
	AggregateAdsWhereQueryVariables,
} from 'af-shared/lib/graphql';
import { addApolloState, initializeApollo } from 'af-shared/lib/graphql/apollo/client';
import { searchFormInputsToAdWhereInput } from 'af-shared/lib/components/utils/search-form-input-to-ad-where-input';
import { skipItems } from 'af-shared/lib/components/utils/skip-items';
import { queryToFormData } from 'af-shared/lib/components/utils/query-to-form-data';
import { removeFalsyValues } from 'af-shared/lib/components/utils/remove-falsy-values';
import { queryDefaultValues } from 'af-shared/lib/components/constants/query-params';

import { ADS_PER_PAGE } from 'src/components/constants/ads-per-page';
import { getAttributeDefinitions } from 'src/components/api/get-attribute-definitions';
import Search from 'src/components/containers/search/search.component';
import { DEFAULT_LOCALE } from 'src/components/constants/locale';
import BlogPostsSection from 'src/components/containers/blog-posts-section/blog-posts-section.component';

const Home: NextPage = () => {
	const { asPath } = useRouter();
	return (
		<>
			<Search key={asPath} />
			<BlogPostsSection />
		</>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ locale = DEFAULT_LOCALE, query }) => {
	const client = initializeApollo();

	const attributeDefinitions = await getAttributeDefinitions();

	const formData = {
		...queryDefaultValues,
		...queryToFormData(query),
	};

	const where: InputMaybe<AdWhereInput> | undefined = searchFormInputsToAdWhereInput(formData, attributeDefinitions);

	const variables: FindAllAdsQueryVariables = {
		where,
		orderBy: removeFalsyValues(formData.Sort),
		take: ADS_PER_PAGE,
		skip: skipItems(ADS_PER_PAGE, formData.Page),
	};

	await client.query<FindAllAdsQuery, FindAllAdsQueryVariables>({
		query: FindAllAdsDocument,
		variables,
	});

	await client.query<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>({
		query: FindAllCategoriesDocument,
	});

	await client.query<AggregateAdsWhereQuery, AggregateAdsWhereQueryVariables>({
		query: AggregateAdsWhereDocument,
		variables: {
			where,
		},
	});

	return addApolloState(client, {
		props: {
			attributeDefinitions,
			...(await serverSideTranslations(locale, ['common', 'home'])),
		},
	});
};
