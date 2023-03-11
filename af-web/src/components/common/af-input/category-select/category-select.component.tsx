import { useMemo, useContext, memo } from 'react';
import { useTranslation } from 'next-i18next';
import { useFormContext, FieldPath } from 'react-hook-form';

import { createCategorySelectData } from 'af-shared/lib/components/utils/create-category-select-data';
import { filterCategories } from 'af-shared/lib/components/utils/filter-categories';
import { Category, useFindAllCategoriesQuery } from 'af-shared/lib/graphql';
import { AttributeDefinition, CategoryCode } from 'af-shared/lib/components/types/attribute-definitions';

import { AttributeDefinitionsCtx } from '../../../context/attributeDefinitionsCtx.component';
import { useResetAfSuccessors } from '../../../hooks/use-reset-af-successors';
import ControlledSelect from '../../controlled-select/controlled-select.component';
import { SearchFormInputs } from 'af-shared/lib/components/types/form-inputs';
import { SelectProps } from '../../controlled-select/select/select.component';
import { SearchFormInputKeys } from 'src/components/types/search-form-inputs';

export interface CategorySelectProps extends Omit<SelectProps, 'data' | 'onChange'> {
	attributeDefinition: AttributeDefinition;
	withTranslatedOption?: boolean;
	className?: string;
	predecessors?: CategoryCode[];
	successors?: CategoryCode[];
}

const CategorySelect: React.FC<CategorySelectProps> = ({ attributeDefinition, predecessors, successors, withTranslatedOption = false, className, ...other }) => {
	const { t } = useTranslation();
	const { watch, control } = useFormContext<SearchFormInputs>();
	const attributeDefinitions = useContext(AttributeDefinitionsCtx);
	const hasPredecessors = predecessors && predecessors.length > 0;
	const lastPredecessorVocabulary: AttributeDefinition | undefined = hasPredecessors ? attributeDefinitions.find((a) => a.categoryCode === predecessors.slice(-1)[0]) : undefined;
	const lastPredecessorCid = lastPredecessorVocabulary ? watch(`${lastPredecessorVocabulary.model}.${lastPredecessorVocabulary.attribute}` as SearchFormInputKeys) : undefined;
	const { data } = useFindAllCategoriesQuery();
	const categories = data?.findAllCategories as Category[] | undefined;

	const selectData = useMemo(() => {
		if (!attributeDefinition.categoryCode) return [];
		return createCategorySelectData(
			filterCategories(categories ?? [], attributeDefinition.categoryCode, lastPredecessorCid?.toString()),
			withTranslatedOption ? t<string>(`common:filter.${attributeDefinition.attribute}`) : undefined,
		);
	}, [categories, attributeDefinition, lastPredecessorCid, t, withTranslatedOption]);

	const resetAfSuccessors = useResetAfSuccessors();

	const objectPath = `${attributeDefinition.model}.${attributeDefinition.attribute}` as SearchFormInputKeys;

	return (
		<ControlledSelect<SearchFormInputs>
			name={objectPath as any}
			key={objectPath}
			control={control}
			disabled={hasPredecessors && !lastPredecessorCid}
			rules={{
				onChange: (event) => {
					if (event.target.value === '') {
						resetAfSuccessors(successors);
						console.log('reset af successors', successors);
					}
				},
			}}
			data={selectData}
			withTranslatedOption={withTranslatedOption}
			{...other}
		/>
	);
};

export default memo(CategorySelect);
