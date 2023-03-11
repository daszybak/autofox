import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextPageWithLayout } from 'af-shared/lib/components/types/next-page-with-layout';
import { addApolloState, initializeApollo } from 'af-shared/lib/graphql/apollo/client';
import { FindAllCategoriesDocument, FindAllCategoriesQuery, FindAllCategoriesQueryVariables } from 'af-shared/lib/graphql';
import { DEFAULT_LOCALE } from '../../components/constants/locale';
import Dashboard from '../../components/containers/dashboard/dashboard.component';
import Favorites from '../../components/containers/dashboard/favorites/favorites.component';
import { getAttributeDefinitions } from '../../components/api/get-attribute-definitions';

const FavoritesPage: NextPageWithLayout = () => <Favorites />;

FavoritesPage.getLayout = (page: React.ReactElement) => {
	return <Dashboard>{page}</Dashboard>;
};

export default FavoritesPage;

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
