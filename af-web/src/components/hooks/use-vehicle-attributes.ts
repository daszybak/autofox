import { useMemo } from 'react';
import _ from 'lodash';

import { Category, useFindAllCategoriesQuery } from 'af-shared/lib/graphql';

const MAX_WEIGHT = 999;

type CategoryWithoutName = Omit<Category, 'name'>;
type CategoryNameType<T> = CategoryWithoutName & { name: T };

class CategoryTreeNode<T extends string = string, K extends CategoryNameType<T> = CategoryNameType<T>> {
	public parent: CategoryTreeNode | null = null;
	public children: CategoryTreeNode[] = [];
	public data: K;

	constructor(data: K, parent?: CategoryTreeNode | null, children?: CategoryTreeNode[]) {
		this.data = data;
		this.parent = parent ?? null;
		this.children = children ?? [];
	}
}

const findCategoryChildren = <T extends Pick<Category, 'parent_category_id' | 'category_id'>>(categories: T[], parentCategory: T) =>
	_(categories).filter((category) => category.parent_category_id?.toString() === parentCategory.category_id);

export const useVehicleAttributes = <T extends string>(root: string, children: readonly T[]) => {
	const { data: categoriesData } = useFindAllCategoriesQuery();

	const output = useMemo(() => {
		const categories = (categoriesData?.findAllCategories as Category[] | undefined) ?? [];
		const vehicleAttributes = _.filter(categories, (category) => category.code === 'VehicleAttributes');
		const rootCategory = _.find(vehicleAttributes, (vehicleAttribute) => vehicleAttribute.name === root);
		if (!rootCategory) return null;
		const rootVehicleAttribute = new CategoryTreeNode(rootCategory, null);
		let childrenVehicleAttributes: CategoryTreeNode<T>[];
		if (children) {
			childrenVehicleAttributes = _(vehicleAttributes)
				.filter((vehicleAttribute) => children.includes(vehicleAttribute.name as T))
				.filter((category) => category.parent_category_id?.toString() === rootVehicleAttribute.data.category_id)
				.map((vehicleAttribute) => new CategoryTreeNode<T>(vehicleAttribute as CategoryNameType<T>, rootVehicleAttribute as CategoryTreeNode<string>))
				.value();
		} else {
			childrenVehicleAttributes = findCategoryChildren(vehicleAttributes, rootVehicleAttribute.data)
				.map((vehicleAttribute) => new CategoryTreeNode<T>(vehicleAttribute as CategoryNameType<T>, rootVehicleAttribute))
				.value();
		}

		rootVehicleAttribute.children = childrenVehicleAttributes;
		rootVehicleAttribute.children.forEach((child) => {
			child.children = findCategoryChildren(vehicleAttributes, child.data)
				.map((vehicleAttribute) => {
					return new CategoryTreeNode<string>(vehicleAttribute, child);
				})
				.sort((a, b) => {
					const aWeight = a.data.weight ?? MAX_WEIGHT;
					const bWeight = b.data.weight ?? MAX_WEIGHT;
					return aWeight - bWeight;
				})
				.value();
		});

		console.log('useVehicleAttributes rendered');

		return {
			..._.map(childrenVehicleAttributes, (child) => {
				return {
					[child.data.name as T]: child.children.map((grandChild) => grandChild.data.name),
				};
			}).reduce((acc, cur) => ({ ...acc, ...cur })),
		};
	}, [children, categoriesData?.findAllCategories, root]);

	return output;
};
