import type { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextPageWithLayout } from 'af-shared/lib/components/types/next-page-with-layout';
import { DEFAULT_LOCALE } from '../../components/constants/locale';
import Dashboard from '../../components/containers/dashboard/dashboard.component';
import MyAds from '../../components/containers/dashboard/my-ads/my-ads.component';
import { getAttributeDefinitions } from '../../components/api/get-attribute-definitions';

const MyAdsPage: NextPageWithLayout = () => <MyAds />;

MyAdsPage.getLayout = (page: React.ReactElement) => {
	return <Dashboard>{page}</Dashboard>;
};
export default MyAdsPage;

export const getServerSideProps: GetServerSideProps = async ({ locale = DEFAULT_LOCALE }) => {
	const attributeDefinitions = await getAttributeDefinitions();

	return {
		props: {
			isProtected: true,
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
};
