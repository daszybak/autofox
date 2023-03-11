import { Navbar, Footer } from '../../common';

interface Props {
	children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>

			<Footer />
		</>
	);
};
export default MainLayout;
