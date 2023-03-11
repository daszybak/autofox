import { useFindMyListsQuery } from 'af-shared/lib/graphql';

import { findMyListsWhere } from '../../../constants/saved-searches';
import { useAuthHelpers } from '../../../hooks/use-auth-helpers';
import Link from '../link/link.component';

interface Props {
	url?: string;
}

const MySearchesLink: React.FC<Props> = ({ url = '/account/saved-searches' }) => {
	const { isAuthenticated } = useAuthHelpers();
	const { data: findMyListsData } = useFindMyListsQuery({
		variables: {
			where: findMyListsWhere,
		},
		skip: !isAuthenticated,
	});
	const mySearchesCount = findMyListsData?.findMyLists.length;

	return <Link href={url} navName={'my-searches'} format={(value) => `${value}${mySearchesCount ? `(${mySearchesCount})` : ''}`} />;
};
export default MySearchesLink;
