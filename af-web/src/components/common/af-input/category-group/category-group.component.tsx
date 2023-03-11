import { useState } from 'react';
import { Checkbox, DefaultProps, Selectors } from '@mantine/core';
import { useFormContext } from 'react-hook-form';

import { AttributeDefinition } from 'af-shared/lib/components/types/attribute-definitions';
import { Category, useFindAllCategoriesQuery } from 'af-shared/lib/graphql';

import { useStyles } from './category-group.styles';

interface CategoryGroup extends DefaultProps<Selectors<typeof useStyles>> {
	attributeDefinition: AttributeDefinition;
	type: 'radio' | 'checkbox';
	icons?: Record<string, React.ReactNode>;
	withHiddenInput?: boolean;
	withLabel?: boolean;
}

const CategoryGroup: React.FC<CategoryGroup> = ({ attributeDefinition, classNames, className, unstyled, type, withLabel = true, withHiddenInput = false, icons, ...other }) => {
	const { classes, cx } = useStyles(undefined, { name: 'CategoryRadioGroup', classNames, unstyled });
	const { data } = useFindAllCategoriesQuery();
	const categories = data?.findAllCategories as Category[] | undefined;
	const { register, watch } = useFormContext();
	const [checkbox, setCheckbox] = useState<string>(watch(`${attributeDefinition.model}.${attributeDefinition.attribute}`));

	const renderedRadios = categories
		?.filter((category) => category.code === attributeDefinition.categoryCode)
		?.map(({ name, category_id }, i) => {
			const nameLower = name.toLocaleLowerCase();
			const unqName = name + category_id;
			return (
				<span className={classes.wrapper} key={category_id + i}>
					<Checkbox
						className={cx({ [classes.visuallyHidden]: withHiddenInput })}
						value={category_id}
						key={category_id}
						id={unqName}
						checked={category_id === checkbox}
						{...register(`${attributeDefinition.model}.${attributeDefinition.attribute}`, {
							onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
								const value = e.currentTarget.value;
								if (value === checkbox) return setCheckbox('');
								setCheckbox(value);
							},
						})}
					/>
					{(withLabel || icons) && (
						<label className={classes.label} htmlFor={unqName}>
							{name}
							{icons && icons[nameLower]}
						</label>
					)}
				</span>
			);
		});
	return (
		<div className={cx(className, classes.radioGroupContainer)} {...other}>
			{renderedRadios}
		</div>
	);
};

CategoryGroup.displayName = 'CategoryRadios';

export default CategoryGroup;
