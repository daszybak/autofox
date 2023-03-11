import { Category } from '../../graphql';

export const filterCategories = (categories: Category[], code: string, parentCategoryId?: string) =>
	categories.filter((category) => (parentCategoryId ? category.code === code && category.parent_category_id?.toString() === parentCategoryId : category.code === code));
