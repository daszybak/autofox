import type { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAttributeDefinitions } from '../../components/api/get-attribute-definitions';
import { DEFAULT_LOCALE } from '../../components/constants/locale';

const Agent: NextPage = () => <div>Agent</div>;

export default Agent;

export const getServerSideProps: GetServerSideProps = async ({ locale = DEFAULT_LOCALE }) => {
	const attributeDefinitions = await getAttributeDefinitions();

	return {
		props: {
			attributeDefinitions,
			// isProtected: true,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};
