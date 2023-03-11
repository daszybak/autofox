import React from 'react';
import { MdOutlineNoPhotography } from 'react-icons/md';
import { useStyles } from './no-image.styles';

interface NoImageProps {
	className?: string;
}

const NoImage: React.FC<NoImageProps> = ({ className }) => {
	const { classes, cx } = useStyles();
	return (
		<div className={cx(classes.flexAlignJustifyCenter, className)}>
			<MdOutlineNoPhotography size={48} />
		</div>
	);
};
export default NoImage;
