import type { NextPage } from 'next';
import AuthCheck from '../components/layouts/auth_check/auth_check.component';

const Home: NextPage = () => {
	return (
		<div style={{ marginLeft: '300px' }}>
			<h1>Admin Home Screen</h1>
		</div>
	);
};

export default AuthCheck(Home);
