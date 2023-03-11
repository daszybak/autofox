import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { DefaultProps, Input, MantineSize, MantineTransition, Selectors } from '@mantine/core';
import { useDidUpdate, useId, useMergedRef, useScrollIntoView } from '@mantine/hooks';

import { SelectPopover } from './select-popover/select-popover.component';
import useStyles from './select.styles';
import { AfSelectItem } from './select.types';
import PlaceholderOrValueWrapper from './placeholder-or-value-wrapper/placeholder-or-value-wrapper.component';
import Item from './item/item.component';
import SelectItems from './select-items/select-items.component';
import { groupOptions } from './utils/group-data';
import { filterData } from './utils/filter-data';
import { SelectScrollArea } from './select-scroll-area/select-scroll-area.component';
import { SelectRightSection } from './select-right-section/select-right-section.component';

type SelectStylesNames = Selectors<typeof useStyles>;

export interface SelectProps extends DefaultProps<SelectStylesNames> {
	data: AfSelectItem[];

	placeholder?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	name?: string;
	ItemComponent?: React.FC<any>;

	clearable?: boolean;
	searchable?: boolean;
	allowDeselect?: boolean;

	size?: MantineSize;
	transition?: MantineTransition;
	transitionDuration?: number;
	transitionTimingFunction?: string;
	shadow?: string;
	limit?: number;
	filter?(value: string, item: AfSelectItem): boolean;
	filterDataOnExactSearchMatch?: boolean;

	controlledComponent?: React.ReactNode;

	onDropdownClose?(): void;
	onDropdownOpen?(): void;

	dropdownPosition?: 'bottom' | 'top' | 'flip';
	withinPortal?: boolean;
	zIndex?: React.CSSProperties['zIndex'];
	maxDropdownHeight?: number;
	className?: string;

	withGroupName?: boolean;
	value?: string;

	disabled?: boolean;

	children?: React.ReactNode;
}

export function defaultFilter(value: string, item: AfSelectItem) {
	return item.label !== undefined && item.label.toLowerCase().trim().includes(value.toLowerCase().trim());
}

const componentName = 'AfSelect';

const Select: React.FC<SelectProps> = forwardRef<HTMLInputElement, SelectProps>(
	(
		{
			classNames,
			styles,
			unstyled,
			data,
			placeholder,
			controlledComponent,
			ItemComponent = Item,
			allowDeselect,
			clearable,
			searchable,
			limit,
			filter = defaultFilter,
			filterDataOnExactSearchMatch = false,
			onDropdownClose,
			onDropdownOpen,
			onChange,
			size,
			dropdownPosition = 'flip',
			transition,
			transitionDuration,
			zIndex = 300,
			withinPortal,
			maxDropdownHeight = 220,
			className,
			withGroupName = true,
			value: valueProp,
			disabled = false,
			name,
			children,
		},
		ref,
	) => {
		const { classes, cx, theme } = useStyles(undefined, {
			name: componentName,
			classNames,
			styles,
			unstyled,
		});
		const [hovered, setHovered] = useState<number>(-1);
		const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);
		const [value, setValue] = useState<string>(valueProp ?? '');
		const [searchValue, setSearchValue] = useState<string>('');
		const inputRef = useRef<HTMLInputElement>(null);
		const itemsRefs = useRef<Record<string, HTMLDivElement>>({});
		const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<HTMLDivElement, HTMLDivElement>({
			duration: 0,
			offset: 5,
			cancelable: false,
			isList: true,
		});
		useEffect(() => {
			setValue(valueProp ?? '');
		}, [valueProp]);

		const handleDropdownOpened = (opened: boolean) => {
			if (dropdownOpened !== opened) {
				setDropdownOpened(opened);
				const handler = opened ? onDropdownOpen : onDropdownClose;
				typeof handler === 'function' && handler();
			}
		};

		const handleValueOnChange = (value: string) => {
			setValue(value);
			onChange?.({ target: { value, name } } as React.ChangeEvent<HTMLInputElement>);
		};

		const sortedData = groupOptions({ data }) as AfSelectItem[];

		const filteredData = filterData({
			data: sortedData,
			searchable: searchable ?? false,
			limit: limit ?? Infinity,
			searchValue,
			filter,
			filterDataOnExactSearchMatch,
			value,
		});

		const selectedItemIndex = value ? filteredData.findIndex((el) => el.value === value) : 0;
		const selectedValue = sortedData.find((item) => item.value === value);
		const isDeselectable = allowDeselect === undefined ? clearable : allowDeselect;
		const handleItemSelect = (item: AfSelectItem) => {
			if (isDeselectable && selectedValue?.value === item.value) {
				handleValueOnChange('');
				handleDropdownOpened(false);
			} else {
				handleValueOnChange(item.value);
				setHovered(-1);
				handleDropdownOpened(false);
			}
		};
		const handleSearchChange = (val: string) => {
			setSearchValue(val);
			//if (searchable && typeof onSearchChange === 'function') {
			//	onSearchChange(val);
			//}
		};
		const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			handleSearchChange(event.currentTarget.value);

			// if (clearable && event.currentTarget.value === '') {
			// 	handleValueOnChange('');
			// }

			setHovered(-1);
		};

		const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
			if (filteredData[hovered] && dropdownOpened) {
				handleItemSelect(filteredData[hovered]);
			}
			handleSearchChange('');
			handleDropdownOpened(false);
		};

		const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
			//	typeof onFocus === 'function' && onFocus(event);
			// console.log('handleFocusClick', 'searchable', searchable);
			// if (searchable) {
			// 	handleDropdownOpened(true);
			// }
		};

		const handleInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
			handleDropdownOpened(!dropdownOpened);

			if (value && !dropdownOpened) {
				setHovered(selectedItemIndex);
			}
		};

		const id = useId();
		const scrollSelectedItemIntoView = () =>
			window.setTimeout(() => {
				targetRef.current = itemsRefs.current[filteredData[selectedItemIndex]?.value];
				scrollIntoView({ alignment: 'end' });
			}, 0);

		const shouldShowDropdown = filteredData.length > 0 ? dropdownOpened : dropdownOpened;

		useDidUpdate(() => {
			if (shouldShowDropdown) scrollSelectedItemIntoView();
		}, [shouldShowDropdown]);

		const getNextIndex = (index: number, nextItem: (index: number) => number, compareFn: (index: number) => boolean) => {
			let i = index;
			while (compareFn(i)) {
				i = nextItem(i);
				if (!filteredData[i].disabled) return i;
			}
			return index;
		};

		const handlePrevious = () => {
			setHovered((current) => {
				const nextIndex = getNextIndex(
					current,
					(index) => index - 1,
					(index) => index > 0,
				);

				targetRef.current = itemsRefs.current[filteredData[nextIndex]?.value];
				shouldShowDropdown && scrollIntoView({ alignment: 'start' });
				return nextIndex;
			});
		};

		const handleNext = () => {
			setHovered((current) => {
				const nextIndex = getNextIndex(
					current,
					(index) => index + 1,
					(index) => index < filteredData.length - 1,
				);

				targetRef.current = itemsRefs.current[filteredData[nextIndex]?.value];
				shouldShowDropdown && scrollIntoView({ alignment: 'end' });
				return nextIndex;
			});
		};

		const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
			//	typeof onKeyDown === 'function' && onKeyDown(event);
			switch (event.key) {
				case 'ArrowUp': {
					event.preventDefault();

					if (!dropdownOpened) {
						setHovered(selectedItemIndex);
						setDropdownOpened(true);
						scrollSelectedItemIntoView();
					} else {
						handlePrevious();
					}

					break;
				}

				case 'ArrowDown': {
					event.preventDefault();

					if (!dropdownOpened) {
						setHovered(selectedItemIndex);
						setDropdownOpened(true);
						scrollSelectedItemIntoView();
					} else {
						handleNext();
					}

					break;
				}

				case 'Home': {
					if (!searchable) {
						event.preventDefault();

						if (!dropdownOpened) {
							setDropdownOpened(true);
						}

						const firstItemIndex = filteredData.findIndex((item) => !item.disabled);
						setHovered(firstItemIndex);
						shouldShowDropdown && scrollIntoView({ alignment: 'end' });
					}
					break;
				}

				case 'End': {
					if (!searchable) {
						event.preventDefault();

						if (!dropdownOpened) {
							setDropdownOpened(true);
						}

						const lastItemIndex = filteredData.map((item) => !!item.disabled).lastIndexOf(false);
						setHovered(lastItemIndex);
						shouldShowDropdown && scrollIntoView({ alignment: 'end' });
					}
					break;
				}

				case 'Escape': {
					event.preventDefault();
					setDropdownOpened(false);
					setHovered(-1);
					break;
				}

				case ' ': {
					if (!searchable) {
						event.preventDefault();
						if (filteredData[hovered] && dropdownOpened) {
							handleItemSelect(filteredData[hovered]);
						} else {
							setDropdownOpened(true);
							setHovered(selectedItemIndex);
							scrollSelectedItemIntoView();
						}
					}

					break;
				}

				case 'Enter': {
					if (!searchable) {
						event.preventDefault();
					}

					if (!dropdownOpened) {
						setDropdownOpened(true);
						setHovered(selectedItemIndex);
						scrollSelectedItemIntoView();
					}

					if (filteredData[hovered] && dropdownOpened) {
						event.preventDefault();
						handleItemSelect(filteredData[hovered]);
					}
				}
			}
		};

		const renderInputOrSelectedItem: boolean = disabled ? false : shouldShowDropdown;
		const mergedRef = useMergedRef(inputRef, ref);
		return (
			<Input.Wrapper
				style={{
					lineHeight: '1.5rem',
				}}
			>
				<SelectPopover
					opened={shouldShowDropdown}
					transition={transition}
					transitionDuration={transitionDuration}
					shadow="sm"
					withinPortal={withinPortal}
					__staticSelector={componentName}
					zIndex={zIndex}
					dropdownPosition={dropdownPosition}
					unstyled={unstyled}
					onChange={handleDropdownOpened}
				>
					<SelectPopover.Target>
						<PlaceholderOrValueWrapper
							className={cx(classes.placeholderOrValueWrapper, className)}
							__staticSelector={componentName}
							onClick={handleInputClick}
							setHovered={setHovered}
							id={id}
							shouldShowDropdown={shouldShowDropdown}
							rightSection={<SelectRightSection shouldClear={false} size={size ?? 'md'} />}
							data-disabled={disabled || undefined}
							data-selected={!!selectedValue && !renderInputOrSelectedItem}
						>
							{renderInputOrSelectedItem ? (
								<Input<'input'>
									className={classes.input}
									autoComplete="off"
									type="search"
									classNames={{
										input: classes.input,
									}}
									value={searchValue}
									ref={mergedRef}
									onChange={handleInputChange}
									autoFocus
									onKeyDown={handleInputKeydown}
								/>
							) : (
								<ItemComponent item={selectedValue} placeholder={placeholder} tabIndex={0} onKeyDown={handleInputKeydown} />
							)}
						</PlaceholderOrValueWrapper>
					</SelectPopover.Target>
					<SelectPopover.Dropdown component={SelectScrollArea} maxHeight={maxDropdownHeight} direction={'column'} id={id} innerRef={scrollableRef} __staticSelector="Select">
						<SelectItems
							data={filteredData}
							hovered={hovered}
							isItemSelected={(val) => val === value}
							uuid={id}
							__staticSelector="Select"
							onItemHover={setHovered}
							onItemSelect={handleItemSelect}
							itemsRefs={itemsRefs}
							itemComponent={ItemComponent}
							size={size ?? 'md'}
							unstyled={unstyled}
							groupName={withGroupName ? placeholder : undefined}
						/>
						{children}
					</SelectPopover.Dropdown>
				</SelectPopover>
			</Input.Wrapper>
		);
	},
);

Select.displayName = componentName;

export default Select;
