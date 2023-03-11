import React from 'react';
import { useDragOver } from '@minoru/react-dnd-treeview';
import { ActionIcon, Tooltip } from '@mantine/core';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { BsPencilFill, BsFillPlusCircleFill, BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
import { useStyles } from '../../categories-list/categories-list.style';

interface CustomNodeProps {
	removeCategoryMutation(data: any): any;
	updateCategoryHandler(data: any): any;
	createCategoriesHandler(data: any): any;
	item: any;
	depth?: number;
	isOpen?: boolean;
	onToggle?: any;
}

const CustomNode: React.FC<CustomNodeProps> = ({ item, removeCategoryMutation, updateCategoryHandler, createCategoriesHandler, isOpen = false, onToggle }) => {
	const { classes } = useStyles();
	const dragOverProps = useDragOver(item, isOpen, onToggle);

	return (
		<div className={classes.categoryItems} {...dragOverProps}>
			<div className={classes.IconsWithName}>
				{item.droppable ? (
					<span className={classes.openCloseIcons} onClick={onToggle}>
						{isOpen ? <BsArrowLeftSquare /> : <BsArrowRightSquare />}
					</span>
				) : (
					<span className={classes.placeholderIcon}>
						<BsArrowLeftSquare />
					</span>
				)}
				<span className={classes.weightField}>{item.data.weight}</span>
				<span>{item.text}</span>
			</div>
			<span className={classes.actionsIcons}>
				<Tooltip label="Add child">
					<ActionIcon color="cyan" variant="light" onClick={() => createCategoriesHandler(item.data.category)}>
						<BsFillPlusCircleFill />
					</ActionIcon>
				</Tooltip>
				<Tooltip label="Edit">
					<ActionIcon color="green" variant="light" onClick={() => updateCategoryHandler(item.data.category)}>
						<BsPencilFill />
					</ActionIcon>
				</Tooltip>
				<Tooltip label="Delete">
					<ActionIcon
						color="red"
						variant="light"
						onClick={() =>
							removeCategoryMutation({
								variables: {
									id: Number(item.data.category.category_id),
								},
							})
						}
					>
						<RiDeleteBin4Line />
					</ActionIcon>
				</Tooltip>
			</span>
		</div>
	);
};

export default CustomNode;
