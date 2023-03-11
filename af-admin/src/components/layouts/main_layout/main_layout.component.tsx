import React from 'react';
import { Navbar } from '../../common';
import { Container } from 'af-shared/lib/components/ui';
import { useAuth } from 'react-oidc-context';

interface LayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
	const auth = useAuth();
	return (
		<Container>
			{auth.isAuthenticated && <Navbar />}
			{children}
		</Container>
	);
};

export default MainLayout;
