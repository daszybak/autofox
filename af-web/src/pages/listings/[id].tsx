import { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { addApolloState, initializeApollo } from 'af-shared/lib/graphql/apollo/client';
import { DEFAULT_LOCALE } from '../../components/constants/locale';
import AdDetails from '../../components/containers/ad-details/ad-details.component';
import { FindAllCategoriesDocument, FindAllCategoriesQuery, FindAllCategoriesQueryVariables, FindUniqueAdWhereAdIdEqualsQuery } from 'af-shared/lib/graphql/generated/generated';
import { FindUniqueAdWhereAdIdEqualsDocument } from 'af-shared/lib/graphql/generated/generated';
import { FindUniqueAdWhereAdIdEqualsQueryVariables } from 'af-shared/lib/graphql/generated/generated';
import { getAttributeDefinitions } from '../../components/api/get-attribute-definitions';

const Ad: NextPage = () => <AdDetails />;

export const getServerSideProps: GetServerSideProps = async ({ query, locale = DEFAULT_LOCALE }) => {
	const client = initializeApollo();

	const attributeDefinitions = await getAttributeDefinitions();

	const variables: FindUniqueAdWhereAdIdEqualsQueryVariables = {
		where: {
			ad_id: Number(query.id),
		},
	};

	await client.query<FindUniqueAdWhereAdIdEqualsQuery, FindUniqueAdWhereAdIdEqualsQueryVariables>({
		query: FindUniqueAdWhereAdIdEqualsDocument,
		variables,
	});

	await client.query<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>({
		query: FindAllCategoriesDocument,
	});

	return addApolloState(client, {
		props: {
			attributeDefinitions,
			...(await serverSideTranslations(locale, ['common'])),
		},
	});
};

export default Ad;
