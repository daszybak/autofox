import { useEffect } from 'react';
import { Portal } from '@mantine/core';
import { AuthProvider, useAuth } from 'react-oidc-context';
import useStyles from './rocketchat-widget.styles';
import { rocketChatAuth } from 'src/components/api/rocketchat';
import { oidcConfig } from 'src/config/oidc-config';

interface RocketChatProps {
	className?: string;
}

const RocketChat: React.FC<RocketChatProps> = ({ className }) => {
	const { user, signinSilent } = useAuth();
	const { classes, cx } = useStyles();
	const access_token = user?.access_token;
	console.log('user', user);

	useEffect(() => {
		signinSilent();
	}, [signinSilent]);

	//if (!isAuthenticated || isLoading) return null;
	console.log('user', user);

	return (
		<Portal>
			<iframe className={cx(classes.rocketChatWidget, className)} src={`https://rocket.chat.mojauto.hr/channel/general/?layout=embedded`} width={500} height={500} />
		</Portal>
	);
};

const RocketChatAuthWrapper = ({ ...other }) => {
	return (
		<AuthProvider {...oidcConfig} client_id={'rocket-chat-client'}>
			<RocketChat {...other} />
		</AuthProvider>
	);
};

export default RocketChatAuthWrapper;
