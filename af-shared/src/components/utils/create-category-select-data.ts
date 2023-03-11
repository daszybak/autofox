import { SelectItem } from '@mantine/core';
import { Category } from '../../graphql';

export const createCategorySelectData = (categories: Category[], placeholder?: string): SelectItem[] => {
	if (!categories) return [];
	const output: SelectItem[] = categories.map((category: Category) => {
		return {
			label: category['name'],
			value: category['category_id'],
		};
	});
	if (placeholder !== undefined) {
		output.unshift({ label: placeholder ?? '', value: '' });
	}

	return output;
};
