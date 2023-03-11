import { Text } from '@mantine/core';
import { useAuth } from 'react-oidc-context';
import { useFindUniqueUserWhereUserIdEqualsQuery } from 'af-shared/lib/graphql';

const Settings = () => {
	const auth = useAuth();
	const { data: userData } = useFindUniqueUserWhereUserIdEqualsQuery({
		variables: {
			where: {
				user_sub: auth.user?.profile.sub,
			},
		},
	});
	const name = userData?.findUniqueUser?.name ?? auth.user?.profile.name ?? '';
	const email = auth.user?.profile.email ?? '';

	return (
		<div>
			<Text>Name: {name}</Text>
			<Text>Email: {email}</Text>
		</div>
	);
};
export default Settings;
