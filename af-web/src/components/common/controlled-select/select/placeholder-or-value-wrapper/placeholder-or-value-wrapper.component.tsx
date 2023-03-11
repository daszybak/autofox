import { DefaultProps, Selectors } from '@mantine/core';
import { forwardRef } from 'react';
import useStyles from './placeholder-or-value-wrapper.styles';

interface PlaceholderOrValueWrapperProps extends DefaultProps<Selectors<typeof useStyles>>, React.ComponentPropsWithoutRef<'div'> {
	__staticSelector: string;
	children: React.ReactNode;
	setHovered: (index: number) => void;
	shouldShowDropdown: boolean;
	id: string;
	className?: string;
	rightSection?: React.ReactNode;
}

const PlaceholderOrValueWrapper = forwardRef<HTMLDivElement, PlaceholderOrValueWrapperProps>(
	({ __staticSelector, styles, classNames, unstyled, children, id, setHovered, shouldShowDropdown, className, rightSection, onMouseDown, onBlur, ...other }, ref) => {
		const { classes } = useStyles();
		return (
			<div
				role="combobox"
				aria-haspopup="listbox"
				aria-owns={shouldShowDropdown ? `${id}-items` : undefined}
				aria-controls={id}
				aria-expanded={shouldShowDropdown}
				onMouseLeave={() => setHovered(-1)}
				{...other}
				ref={ref}
				className={className}
				tabIndex={-1}
			>
				{children}
				{rightSection && <div className={classes.rightSection}>{rightSection}</div>}
			</div>
		);
	},
);

PlaceholderOrValueWrapper.displayName = 'PlaceholderOrValueWrapper';

export default PlaceholderOrValueWrapper;
