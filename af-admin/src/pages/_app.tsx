import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { MainLayout } from '../components';
import { ApolloAuthProvider } from 'af-shared/lib/components';
import { oidcConfig } from '../config/oidc-config';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloAuthProvider oidcConfig={oidcConfig} pageProps={pageProps}>
			<MantineProvider>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</MantineProvider>
		</ApolloAuthProvider>
	);
}

export default MyApp;
