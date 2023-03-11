import React from 'react';
import { MdOutlineNoPhotography } from 'react-icons/md';
import IconWrapper from '../icon-wrapper/icon-wrapper.component';
import { useStyles } from './no-image.styles';

interface NoImageProps extends React.HTMLAttributes<HTMLDivElement> {}

const NoImage: React.FC<NoImageProps> = ({ className, ...other }) => {
	const { classes, cx } = useStyles();
	return (
		<div className={cx(classes.flex, className)} {...other}>
			<IconWrapper Icon={<MdOutlineNoPhotography size={48} />} />
		</div>
	);
};
export default NoImage;
