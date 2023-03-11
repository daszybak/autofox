import { DefaultProps, UnstyledButton, UnstyledButtonProps } from '@mantine/core';
import { forwardRef } from 'react';
import { IconBaseProps, IconType } from 'react-icons';
import { useStyles } from './label-icon-button.styles';

interface LabelIconButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	label: string;
	Icon: IconType;
}

const LabelIconButton: React.FC<LabelIconButtonProps> = forwardRef<HTMLButtonElement, LabelIconButtonProps>(({ Icon, label, ...other }, ref) => {
	const { classes, cx } = useStyles();
	return (
		<UnstyledButton {...other} className={classes.button} ref={ref}>
			{label}&nbsp;
			<Icon />
		</UnstyledButton>
	);
});

LabelIconButton.displayName = 'LabelIconButton';

export default LabelIconButton;
