import React, { useEffect } from 'react';
import { useAuth, hasAuthParams } from 'react-oidc-context';
import { LoadingOverlay } from '@mantine/core';

interface Props {
	children: React.ReactNode;
	isProtected: boolean;
}

const AuthCheck: React.FC<Props> = ({ children, isProtected = false }) => {
	const auth = useAuth();

	useEffect(() => {
		if (isProtected && !hasAuthParams() && !auth.isLoading && !auth.isAuthenticated) {
			auth.signinRedirect({
				redirect_uri: location.href,
			});
		}
	}, [auth, isProtected]);

	if (!isProtected || (!auth.isLoading && auth.isAuthenticated)) return <>{children}</>;

	return <LoadingOverlay visible />;
};
export default AuthCheck;
