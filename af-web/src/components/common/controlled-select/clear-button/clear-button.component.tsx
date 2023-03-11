import { UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import { MdOutlineClear } from 'react-icons/md';
import IconWrapper from '../../icon-wrapper/icon-wrapper.component';
import useStyles from './clear-button.styles';
import React from 'react';

interface ClearButtonProps extends UnstyledButtonProps, React.ComponentPropsWithoutRef<'button'> {}

const ClearButton: React.FC<ClearButtonProps> = (props) => {
	const { classes } = useStyles();
	return (
		<UnstyledButton aria-label="Clear" onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault()} {...props}>
			<IconWrapper Icon={<MdOutlineClear className={classes.clearButton} />} />
		</UnstyledButton>
	);
};

export default ClearButton;
