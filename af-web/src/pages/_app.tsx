import '../styles/globals.css';

import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import nextI18nextConfig from '../../next-i18next.config';
import { oidcConfig } from '../config/oidc-config';
import { mantineTheme } from '../config/mantine-theme';

import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import { ApolloAuthProvider } from 'af-shared/lib/components';
import { NextPageWithLayout } from 'af-shared/lib/components/types/next-page-with-layout';

import { MainLayout } from '../components';
import AuthCheck from '../components/layouts/auth-check/auth-check.component';
import UserFavoritesCtxProvider from '../components/context/userFavoritesCtx.component';
import AttributeDefinitionsProvider from '../components/context/attributeDefinitionsCtx.component';
import { CompareCtxProvider } from '../components/context/compareCtx.component';

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<ApolloAuthProvider oidcConfig={oidcConfig} pageProps={pageProps}>
			<MantineProvider withNormalizeCSS theme={mantineTheme}>
				<NotificationsProvider autoClose={10000} zIndex={1500}>
					<AuthCheck isProtected={pageProps.isProtected}>
						<AttributeDefinitionsProvider attributeDefinitions={pageProps.attributeDefinitions}>
							<UserFavoritesCtxProvider>
								<CompareCtxProvider>
									<MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
								</CompareCtxProvider>
							</UserFavoritesCtxProvider>
						</AttributeDefinitionsProvider>
					</AuthCheck>
				</NotificationsProvider>
			</MantineProvider>
		</ApolloAuthProvider>
	);
}

export default appWithTranslation(MyApp, nextI18nextConfig);

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.log(metric);
}
