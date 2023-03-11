import { forwardRef } from 'react';
import { Button, ButtonProps } from '@mantine/core';
import DropdownIcon from '../dropdown-icon/dropdown-icon.component';
import useStyles from './toggle-button.styles';
import { useHover, useMergedRef } from '@mantine/hooks';

type ToggleButtonProps = ButtonProps & {
	open?: boolean;
} & Omit<JSX.IntrinsicElements['button'], keyof ButtonProps | 'ref'>;

const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(({ children, open, form, ...other }, ref) => {
	const { classes, cx } = useStyles();
	const { hovered, ref: hoverRef } = useHover<HTMLButtonElement>();
	const _ref = useMergedRef(ref, hoverRef);

	return (
		<Button
			variant="white"
			ref={_ref}
			className={classes.toggleButton}
			uppercase={false}
			rightIcon={<DropdownIcon className={cx({ [classes.toggleButtonActive]: hovered })} />}
			{...other}
		>
			{children}
		</Button>
	);
});

ToggleButton.displayName = 'ToggleButton';

export default ToggleButton;
