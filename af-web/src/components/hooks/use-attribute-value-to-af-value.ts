import { AttributeDefinition } from 'af-shared/lib/components/types/attribute-definitions';
import { Category, useFindAllCategoriesQuery } from 'af-shared/lib/graphql';
import { isValid, parseISO, addHours, format as formatFns } from 'date-fns';
import _ from 'lodash';
import { useCallback } from 'react';

export const useAttributeValueToAfValue = () => {
	const { data: findAllCategoriesData } = useFindAllCategoriesQuery();
	const categories = findAllCategoriesData?.findAllCategories as Category[] | undefined;

	const convertAfValue = useCallback(
		(value: any, attributeDefintion: AttributeDefinition | undefined, format?: (value: any) => string) => {
			const getCategoryName = (categoryId: Category['category_id']) => categories?.find((c) => c.category_id === _.toString(categoryId))?.name;
			const output =
				attributeDefintion?.dataType === 'Category'
					? getCategoryName(value)
					: attributeDefintion?.dataType === 'DateTime'
					? isValid(parseISO(value))
						? addHours(parseISO(value), 2)
						: ''
					: value;
			const formattedOutput = output ? (attributeDefintion?.dataType === 'DateTime' ? formatFns(output, 'dd.MM.yyyy') : format ? format(output) : output) : '';
			return formattedOutput;
		},
		[categories],
	);

	return convertAfValue;
};
