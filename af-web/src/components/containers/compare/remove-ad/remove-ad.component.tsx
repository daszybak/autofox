import { useContext } from 'react';
import { UnstyledButton } from '@mantine/core';
import { IoTrashOutline } from 'react-icons/io5';
import { CompareApiCtx } from '../../../context/compareCtx.component';
import { useStyles } from '../compare.styles';

interface Props {
	adId: string;
}

const RemovedAd: React.FC<Props> = ({ adId }) => {
	const { classes, cx } = useStyles();
	const { removeCompareAd } = useContext(CompareApiCtx);

	const handleRemovedAd = () => removeCompareAd(adId);

	return (
		<UnstyledButton onClick={handleRemovedAd} className={cx(classes.alignSelfStart, classes.alignItemsCenter, classes.flex)}>
			Delete&nbsp;
			<IoTrashOutline />
		</UnstyledButton>
	);
};
export default RemovedAd;
