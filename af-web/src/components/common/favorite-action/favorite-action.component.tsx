import React, { useContext } from 'react';
import _ from 'lodash';
import { Text, UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { UserFavoritesCtx } from '../../context/userFavoritesCtx.component';
import { useStyles } from './favorite.styles';

interface Props extends UnstyledButtonProps {
	ad_id: string;
	saveLabel?: string;
	removeLabel?: string;
	withLabel?: boolean;
}

const FavoriteAction: React.FC<Props> = ({ ad_id, saveLabel, removeLabel, withLabel = false, ...other }) => {
	const { classes, theme } = useStyles();
	const { addToFavorites, removeFromFavorites, favoriteAdIds } = useContext(UserFavoritesCtx);
	const isFavorited = favoriteAdIds?.findIndex((adId) => _.toNumber(ad_id) === adId) === -1 ? false : true;

	const handleFavoriteOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		isFavorited ? removeFromFavorites(ad_id) : addToFavorites(ad_id);
	};

	return (
		<UnstyledButton
			onClick={handleFavoriteOnClick}
			style={{
				zIndex: 5,
				...(withLabel
					? {
							display: 'inline-flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							width: 'auto',
							gap: '0.5rem',
					  }
					: {
							maxHeight: '24px',
							maxWidth: '24px',
					  }),
			}}
			tabIndex={-1}
			{...other}
		>
			{withLabel ? <Text>{isFavorited ? removeLabel : saveLabel}</Text> : null}
			{isFavorited ? <FaHeart size={24} color={theme.fn.primaryColor()} /> : <FaRegHeart size={24} color={theme.fn.primaryColor()} className={classes.emptyIcon} />}
		</UnstyledButton>
	);
};
export default FavoriteAction;
