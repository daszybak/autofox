import type { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { addApolloState, initializeApollo } from 'af-shared/lib/graphql/apollo/client';
import { FindAllCategoriesDocument, FindAllCategoriesQuery, FindAllCategoriesQueryVariables } from 'af-shared/lib/graphql';
import { CreateAd } from '../../components';
import { DEFAULT_LOCALE } from '../../components/constants/locale';
import { getAttributeDefinitions } from '../../components/api/get-attribute-definitions';

const Sell: NextPage = () => <CreateAd />;

export default Sell;

export const getServerSideProps: GetServerSideProps = async ({ locale = DEFAULT_LOCALE }) => {
	const client = initializeApollo();

	const attributeDefinitions = await getAttributeDefinitions();

	await client.query<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>({
		query: FindAllCategoriesDocument,
	});

	return addApolloState(client, {
		props: {
			attributeDefinitions,
			isProtected: true,
			...(await serverSideTranslations(locale, ['common'])),
		},
	});
};
