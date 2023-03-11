import { DefaultProps, Divider, MantineSize, Selectors, Text } from '@mantine/core';
import Item from '../item/item.component';
import { AfSelectItem } from '../select.types';

import useStyles from './select-items.styles';

interface GroupNameProps {
	groupName: string;
}

export const GroupName: React.FC<GroupNameProps> = ({ groupName }) => {
	const { classes } = useStyles({ size: 'md' }, { name: 'AfSelect' });
	return (
		<div className={classes.item} key={`__mantine-divider-${groupName}`}>
			<Item
				item={{
					group: groupName,
					value: '',
				}}
				className={classes.separatorLabel}
			/>
		</div>
	);
};

interface SelectItemsProps extends DefaultProps<Selectors<typeof useStyles>> {
	data: AfSelectItem[];
	hovered: number;
	isItemSelected(itemValue: string): boolean;
	itemsRefs?: React.MutableRefObject<Record<string, HTMLDivElement>>;
	onItemHover(index: number): void;
	onItemSelect(item: AfSelectItem): void;
	size: MantineSize;
	itemComponent: React.FC<any>;
	uuid: string;
	__staticSelector: string;
	nothingFound?: React.ReactNode;
	groupName?: string;
}

const SelectItems: React.FC<SelectItemsProps> & {
	GroupName: typeof GroupName;
} = ({
	data,
	hovered,
	itemComponent = Item,
	onItemHover,
	onItemSelect,
	isItemSelected,
	size,
	itemsRefs,

	uuid,
	classNames,
	styles,
	unstyled,
	__staticSelector,
	nothingFound,
	groupName,
}) => {
	const { classes } = useStyles({ size }, { classNames, styles, unstyled, name: __staticSelector });
	const unGroupedItems: React.ReactElement<any>[] = [];
	const groupedItems: React.ReactElement<any>[] = [];

	const constructItemComponent = (item: AfSelectItem, index: number) => {
		const selected = isItemSelected(item.value);

		return (
			<Item
				key={item.value}
				className={classes.item}
				data-disabled={item.disabled || undefined}
				data-hovered={(!item.disabled && hovered === index) || undefined}
				data-selected={(!item.disabled && selected) || undefined}
				onMouseEnter={() => onItemHover(index)}
				onMouseLeave={() => onItemHover(-1)}
				id={`${uuid}-${index}`}
				role="option"
				// data-ignore-outside-clicks
				tabIndex={-1}
				aria-selected={hovered === index}
				ref={(node: HTMLDivElement) => {
					if (itemsRefs && itemsRefs.current) {
						// eslint-disable-next-line no-param-reassign
						itemsRefs.current[item.value] = node;
					}
				}}
				onMouseDown={
					!item.disabled
						? (event: React.MouseEvent<HTMLDivElement>) => {
								event.preventDefault();
								onItemSelect(item);
						  }
						: undefined
				}
				item={item}
			/>
		);
	};

	data.forEach((item, index) => {
		if (!groupName) {
			unGroupedItems.push(constructItemComponent(item, index));
		} else {
			groupedItems.push(constructItemComponent(item, index));
		}
	});

	if (groupName) {
		groupedItems.unshift(<GroupName key={`__mantine-divider-${groupName}`} groupName={groupName} />);
	}

	if (groupedItems.length > 0 && unGroupedItems.length > 0) {
		unGroupedItems.unshift(
			<div className={classes.separator} key="empty-group-separator">
				<Divider />
			</div>,
		);
	}

	return groupedItems.length > 0 || unGroupedItems.length > 0 ? (
		<>
			{groupedItems}
			{unGroupedItems}
		</>
	) : (
		<Text size={size} unstyled={unstyled} className={classes.nothingFound}>
			{nothingFound}
		</Text>
	);
};

SelectItems.displayName = '@mantine/core/SelectItems';
SelectItems.GroupName = GroupName;

export default SelectItems;
