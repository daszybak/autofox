import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { addApolloState, initializeApollo } from 'af-shared/lib/graphql/apollo/client';
import { FindAllCategoriesDocument, FindAllCategoriesQuery, FindAllCategoriesQueryVariables } from 'af-shared/lib/graphql';
import { NextPageWithLayout } from 'af-shared/lib/components/types/next-page-with-layout';
import { DEFAULT_LOCALE } from '../../components/constants/locale';
import Dashboard from '../../components/containers/dashboard/dashboard.component';
import SavedSearches from '../../components/containers/dashboard/saved-searches/saved-searches.component';
import { getAttributeDefinitions } from '../../components/api/get-attribute-definitions';

const SavedSearchesPage: NextPageWithLayout = () => <SavedSearches />;

SavedSearchesPage.getLayout = (page: React.ReactElement) => {
	return <Dashboard>{page}</Dashboard>;
};
export default SavedSearchesPage;

export const getServerSideProps: GetServerSideProps = async ({ locale = DEFAULT_LOCALE }) => {
	const client = initializeApollo();

	await client.query<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>({
		query: FindAllCategoriesDocument,
	});

	const attributeDefinitions = await getAttributeDefinitions();

	return addApolloState(client, {
		props: {
			attributeDefinitions,
			isProtected: true,
			...(await serverSideTranslations(locale, ['common'])),
		},
	});
};
