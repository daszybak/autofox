import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { NativeSelect, TextInput, SelectItem, Button, NumberInput, Select } from '@mantine/core';
import { LOCATION } from 'af-shared/src/components/constants/category-codes';
import { CategoryCreateInput, Category } from 'af-shared/src/graphql/generated/generated';

type CategoryData = CategoryCreateInput & { category_id?: number; parent_category_id?: number };

type CategoryProp = Omit<Category, '_count'>;

interface CategoryFormProps {
	categoryList: CategoryProp[];
	categoryData: Partial<CategoryData>;
	method: string;
	createCategoryMutation(data: any): any;
	updateCategoryMutation(data: any): any;
	getParentName(data: any): any;
	allCategories: CategoryProp[];
	queryFilters: any;
	AUTO: any;
}

const CategoriesForm: React.FC<CategoryFormProps> = ({
	categoryData,
	method,
	createCategoryMutation,
	updateCategoryMutation,
	getParentName,
	allCategories,
	queryFilters,
	AUTO,
}) => {
	const { register, getValues, handleSubmit, setValue } = useForm<CategoryData>({ defaultValues: categoryData });

	for (const key in categoryData) {
		// @ts-ignore
		setValue(key, categoryData[key]);
	}

	const onSubmit: SubmitHandler<CategoryData> = (formInputs) => {
		if (method == 'create') {
			let category_form_data = {
				data: {
					weight: Number(formInputs.weight),
					name: formInputs.name,
					code: formInputs.code,
					parent: {},
				},
			};
			if (formInputs.parent && Number(formInputs.parent)) {
				category_form_data.data.parent = {
					connect: {
						category_id: Number(formInputs.parent),
					},
				};
			} else if (formInputs.parent) {
				category_form_data.data.parent = {
					connect: {
						category_id: Number(formInputs.parent_category_id),
					},
				};
			}
			createCategoryMutation({
				variables: category_form_data,
			});
		} else {
			if (categoryData.category_id) {
				let category_form_data = {
					id: Number(categoryData.category_id),
					data: {
						name: {
							set: formInputs.name,
						},
						code: {
							set: formInputs.code,
						},
						weight: {
							set: Number(formInputs.weight),
						},
						parent: {},
					},
				};
				if (Number(formInputs.parent)) {
					category_form_data.data.parent = {
						connect: {
							category_id: Number(formInputs.parent),
						},
					};
				} else if (formInputs.parent_category_id && !formInputs.parent) {
					category_form_data.data.parent = {
						disconnect: true,
					};
				}
				console.log(formInputs);

				updateCategoryMutation({
					variables: category_form_data,
				});
			}
		}
	};

	const selectItems: SelectItem[] = allCategories.map((category: any) => {
		return {
			label: category['name'],
			value: category['category_id'],
		};
	});

	let CategoriesCodes = {
		...AUTO,
		...LOCATION,
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<NativeSelect
					data={Object.values(CategoriesCodes)}
					label="Category code"
					placeholder="Choose one"
					required
					{...register('code')}
					value={queryFilters.cat_code ? queryFilters.cat_code : getValues('code')}
				/>
				<TextInput label="New category" required placeholder="Name" {...register('name')} />
				<Select
					data={selectItems}
					label="Parent category"
					placeholder="Choose one"
					clearable
					searchable
					{...register('parent')}
					defaultValue={categoryData.parent_category_id ? categoryData.parent_category_id.toString() : ''}
					// @ts-ignore
					onChange={(parentId) => setValue('parent', parentId)}
				/>
				<NumberInput label="Weight" {...register('weight')} min={0} max={999999} onChange={() => {}} hideControls />
				<Button type="submit" color="cyan">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default CategoriesForm;
