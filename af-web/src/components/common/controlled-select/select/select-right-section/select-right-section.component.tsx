import { CloseButton, MantineSize } from '@mantine/core';
import React, { CSSProperties } from 'react';
import DropdownIcon from 'src/components/common/dropdown-icon/dropdown-icon.component';
import useStyles from './select-right-section.styles';

export interface SelectRightSectionProps {
	shouldClear: boolean;
	clearButtonLabel?: string;
	onClear?: () => void;
	size: MantineSize;
	error?: any;
	// eslint-disable-next-line react/no-unused-prop-types
	disabled?: boolean;
	clearButtonTabIndex?: number;
	onDropdownClick?: () => void;
}

export function SelectRightSection({ shouldClear, clearButtonLabel, onClear, size, error, onDropdownClick, clearButtonTabIndex }: SelectRightSectionProps) {
	const { classes } = useStyles();
	const pointerEventStyles: CSSProperties = { pointerEvents: shouldClear ? undefined : 'none' };
	return shouldClear ? (
		<CloseButton
			variant="transparent"
			aria-label={clearButtonLabel}
			onClick={onClear}
			size={size}
			tabIndex={clearButtonTabIndex}
			onMouseDown={(event) => event.preventDefault()}
			style={pointerEventStyles}
		/>
	) : (
		<DropdownIcon
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
			}}
			style={pointerEventStyles}
		/>
	);
}

SelectRightSection.displayName = '@mantine/core/SelectRightSection';
