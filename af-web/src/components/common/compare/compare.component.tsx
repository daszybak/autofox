import { UnstyledButton } from '@mantine/core';
import { useContext } from 'react';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import { CompareApiCtx, CompareDataCtx } from '../../context/compareCtx.component';

interface Props {
	adId: string;
}

const Compare: React.FC<Props> = ({ adId }) => {
	const { addCompareAd, removeCompareAd } = useContext(CompareApiCtx);
	const { compareAdIds } = useContext(CompareDataCtx);
	const isCompared = compareAdIds.includes(adId);
	return (
		<UnstyledButton onClick={() => (isCompared ? removeCompareAd(adId) : addCompareAd(adId))}>
			<HiOutlineSwitchHorizontal size={isCompared ? 20 : 16} color={isCompared ? 'green' : ''} />
		</UnstyledButton>
	);
};
export default Compare;
