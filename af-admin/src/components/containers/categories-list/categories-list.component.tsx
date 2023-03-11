import React, { useEffect, useRef, useState } from 'react';
import { useStyles } from './categories-list.style';
import { Category } from 'af-shared/src/graphql/generated/generated';
import { DndProvider } from 'react-dnd';
import { Tree, NodeModel, MultiBackend, getBackendOptions } from '@minoru/react-dnd-treeview';
import { CustomNode } from '../../containers/index';

type CategoryProp = Omit<Category, '_count'>;

interface CategoryListProps {
	categoryList: CategoryProp[];
	setCategoryData(data: any): any;
	setOpened(data: boolean): any;
	setMethod(data: string): any;
	removeCategoryMutation(data: any): any;
	getParentName(data: any): any;
	updateManyCategoriesMutation(data: any): any;
	createCategoriesHandler(data: any): any;
	allCategories: CategoryProp[];
}

const CategoriesList: React.FC<CategoryListProps> = ({
	categoryList,
	allCategories,
	setCategoryData,
	setOpened,
	setMethod,
	removeCategoryMutation,
	updateManyCategoriesMutation,
	getParentName,
	createCategoriesHandler,
}) => {
	const { classes } = useStyles();
	const [treeData, setTreeData] = useState<NodeModel[]>([]);
	const treeCategoriesData = useRef<NodeModel[]>([]);

	const handleDrop = (newTree: NodeModel[], dragdropdata: any) => {
		let newWeight = 0;
		let weightOldCat = 0;
		let updateItemsArr: any[] = [];

		newTree.forEach((category: any) => {
			if (category.parent == dragdropdata.dragSource.parent) {
				const item = generateUpdateItem(category, weightOldCat);
				updateItemsArr.push(item);
				weightOldCat++;
			}

			if (category.parent == dragdropdata.dropTargetId) {
				const item = generateUpdateItem(category, newWeight);
				updateItemsArr.push(item);
				newWeight++;
			}
		});

		updateManyCategoriesMutation({
			variables: {
				data: updateItemsArr,
			},
		});

		setTreeData(newTree);
	};

	const generateUpdateItem = (category: any, weight: number) => {
		let item = {
			where: {},
			data: {
				weight: {},
				parent: {},
			},
		};
		category.data.weight = weight;

		item = {
			where: { category_id: Number(category.id) },
			data: {
				weight: { set: weight },
				parent: {},
			},
		};
		const previous_tree_category = allCategories.find((item) => item.category_id == category.id);
		if (previous_tree_category?.parent_category_id != category.parent && category.parent != 0) {
			item.data.parent = {
				connect: {
					category_id: category.parent,
				},
			};
		}
		return item;
	};

	const getChildCategories = (category_id: number) => {
		allCategories.forEach((category) => {
			if (category_id == category.parent_category_id) {
				getCategoriesObject(category);
			}
		});
	};

	const getCategoriesObject = (category: CategoryProp, parent: any = null) => {
		const categoryData = {
			id: Number(category.category_id),
			parent: parent == null ? Number(category.parent_category_id) : parent,
			droppable: false,
			text: category.name,
			data: {
				weight: category.weight,
				category: category,
			},
		};

		if (category.parent_category_id) {
			const parentObject = treeCategoriesData.current.find((item) => item.id == category.parent_category_id);
			if (parentObject) {
				parentObject.droppable = true;
			} else {
			}
		}
		treeCategoriesData.current.push(categoryData);
		getChildCategories(Number(category.category_id));
	};

	useEffect(() => {
		treeCategoriesData.current = [];
		categoryList.forEach((category) => {
			let same_category_code = false;
			if (category.parent_category_id) {
				categoryList.forEach((item) => {
					if (Number(item.category_id) == Number(category.parent_category_id)) {
						same_category_code = true;
					}
				});
			}
			if (!same_category_code) {
				getCategoriesObject(category, 0);
			}
		});

		setTreeData(treeCategoriesData.current);
		// eslint-disable-next-line
	}, [categoryList, allCategories]);

	const updateCategoryHandler = (category: CategoryProp) => {
		setCategoryData(category);
		setOpened(true);
		setMethod('update');
	};

	return (
		<DndProvider backend={MultiBackend} options={getBackendOptions()}>
			<Tree
				classes={{ root: classes.tree_ul, draggingSource: classes.dragItem }}
				tree={treeData}
				rootId={0}
				render={(node: any, { depth, isOpen, onToggle }) => (
					<CustomNode
						item={node}
						depth={depth}
						isOpen={isOpen}
						onToggle={onToggle}
						removeCategoryMutation={removeCategoryMutation}
						updateCategoryHandler={updateCategoryHandler}
						createCategoriesHandler={createCategoriesHandler}
					/>
				)}
				dragPreviewRender={({ item }) => {
					return (
						<CustomNode
							item={item}
							removeCategoryMutation={removeCategoryMutation}
							updateCategoryHandler={updateCategoryHandler}
							createCategoriesHandler={createCategoriesHandler}
						/>
					);
				}}
				onDrop={handleDrop}
				canDrop={(tree, { dragSource, dropTargetId, dropTarget }) => {
					if (dragSource?.parent === dropTargetId) {
						return true;
					}
				}}
				initialOpen={true}
				insertDroppableFirst={false}
				sort={false}
				dropTargetOffset={25}
				placeholderRender={() => {
					return <div className={classes.placeholderBox}></div>;
				}}
			/>
		</DndProvider>
	);
};

export default CategoriesList;
