import { Input, Text } from '@mantine/core';
import { useIsomorphicEffect, useMergedRef } from '@mantine/hooks';
import { forwardRef, useRef, useState } from 'react';
import ClearButton from '../../clear-button/clear-button.component';
import Item from '../item/item.component';
import useStyles from './number-input-item.styles';

interface NumberInputProps {
	label?: string;
	inputPlaceholder?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	name?: string;
	value?: string;

	disabled?: boolean;
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(({ label, inputPlaceholder, onChange, name, value, disabled }, ref) => {
	const { classes } = useStyles();
	const inputRef = useRef<HTMLInputElement>(null);
	const mergedRef = useMergedRef(inputRef, ref);
	const [_value, setValue] = useState<string>(value || '');

	const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setValue(value);
	};

	useIsomorphicEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
				inputRef.current.blur();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	console.log('text input', value);

	return (
		<Item className={classes.item}>
			<Text className={classes.label}>{label?.toUpperCase()}</Text>
			<Input<'input'>
				type={'number'}
				placeholder={inputPlaceholder}
				ref={mergedRef}
				classNames={{
					wrapper: classes.wrapper,
					input: classes.input,
				}}
				onMouseDown={() => {
					if (inputRef.current) {
						inputRef.current.focus();
					}
				}}
				onBlur={(e) => {
					onChange?.(e);
				}}
				name={name}
				value={_value}
				disabled={disabled}
				rightSection={
					_value ? (
						<ClearButton
							onClick={() => {
								const event = { target: { value: '', name } } as React.ChangeEvent<HTMLInputElement>;
								handleInputOnChange(event);
								onChange?.(event);
							}}
						/>
					) : null
				}
				onChange={handleInputOnChange}
			/>
		</Item>
	);
});

NumberInput.displayName = 'NumberInput';

export default NumberInput;
