import { Button } from '@mantine/core';
import { useAuth } from 'react-oidc-context';
import { useStyles } from '../../styles/login.style';

function Login() {
	const auth = useAuth();
	const { classes } = useStyles();

	return (
		<div className={classes.container}>
			<div>
				<h2>You are not authorized, please log in to continue!</h2>
				<Button color="cyan" size="lg" onClick={() => void auth.signinRedirect()}>
					Sign in
				</Button>
			</div>
		</div>
	);
}

export default Login;
