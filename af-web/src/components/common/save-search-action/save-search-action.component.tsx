import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

import { AdWhereInput, FindMyListsDocument, useCreateListMutation } from 'af-shared/lib/graphql';

import { findMyListsWhere } from 'src/components/constants/saved-searches';
import { useAuthHelpers } from 'src/components/hooks/use-auth-helpers';

interface SaveSearchActionProps {
	where: AdWhereInput;
}

const SaveSearchAction: React.FC<SaveSearchActionProps> = ({ where }) => {
	const { handleSignIn, isAuthenticated, user } = useAuthHelpers();

	const [createListFn] = useCreateListMutation({
		refetchQueries: [
			{
				query: FindMyListsDocument,
				variables: {
					where: findMyListsWhere,
				},
			},
		],
	});

	const handleSaveSearchActionOnClick = async () => {
		if (!isAuthenticated) {
			handleSignIn();
		}
		if (!user?.profile.sub) return;
		const response = await createListFn({
			variables: {
				data: {
					title: 'Saved Search',
					list_type: 1,
					user: {
						create: {
							user_sub: user?.profile.sub,
						},
					},
					search_params: JSON.stringify(where),
				},
			},
		});
		console.log('bookmark response data', response.data);
		showNotification({
			title: 'Saved Search',
			message: 'Your search was saved',
		});
	};

	return <Button onClick={handleSaveSearchActionOnClick}>Bookmark Search</Button>;
};

export default SaveSearchAction;
