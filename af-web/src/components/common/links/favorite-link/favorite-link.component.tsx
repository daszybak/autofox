import { useContext } from 'react';
import { UserFavoritesCtx } from '../../../context/userFavoritesCtx.component';
import Link from '../link/link.component';

interface Props {
	url?: string;
}

const FavoriteLink: React.FC<Props> = ({ url = '/account/favorites' }) => {
	const { favoriteAdIds } = useContext(UserFavoritesCtx);
	const favoriteCount = favoriteAdIds.length;

	return <Link href={url} navName={'favorites'} format={(value) => `${value}${favoriteCount ? `(${favoriteCount})` : ''}`} />;
};
export default FavoriteLink;
