import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { LoadingOverlay } from '@mantine/core';
import { useRouter } from 'next/router';

const AuthCheck = (Component: any) => {
	const WithAuthComponent: React.FC = () => {
		const auth = useAuth();

		const router = useRouter();

		useEffect(() => {
			if (!auth.isLoading && !auth.isAuthenticated) {
				router.push('/login');
			}
		}, [auth, router]);

		if (auth.isAuthenticated) return <Component />;

		return <LoadingOverlay visible />;
	};

	return WithAuthComponent;
};

export default AuthCheck;
