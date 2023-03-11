//import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useStyles } from '../../styles/categories.style';
import { CategoriesForm, CategoriesList } from '../../components/containers';
import { LoadingOverlay, Button, Modal, Alert, Select } from '@mantine/core';
import {
	Category,
	useRemoveCategoryMutation,
	useCreateCategoryMutation,
	useUpdateCategoryMutation,
	FindAllCategoriesOrderByWeightDocument,
	useFindAllCategoriesOrderByWeightQuery,
	SortOrder,
	useUpdateManyCategoriesMutation,
} from 'af-shared/lib/graphql/generated/generated';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { MdOutlineError } from 'react-icons/md';
import AuthCheck from '../../components/layouts/auth_check/auth_check.component';
import { useRouter } from 'next/router';
import { LOCATION } from 'af-shared/src/components/constants/category-codes';

type CategoryProp = Omit<Category, '_count'>;
type Error = {
	message: string;
};
type QueryFilters = {
	sortOrder: SortOrder;
	cat_code?: string;
};

function ManageCategories() {
	const { classes } = useStyles();
	const router = useRouter();
	const [method, setMethod] = useState('create');
	const [opened, setOpened] = useState(false);
	const [visible, setLoaderVisible] = useState(false);
	const [catCodes, setCatCodes] = useState([]);
	const [queryFilters, setQueryFilter] = useState<QueryFilters>({
		sortOrder: SortOrder.Asc,
	});
	const initialCategoryData = {
		weight: 999,
	};
	const [categoryData, setCategoryData] = useState(initialCategoryData); //for update category ('edit' button)

	const defaultData: CategoryProp[] = [];

	const categoriesData = useFindAllCategoriesOrderByWeightQuery({
		variables: queryFilters,
	});

	const allCategories = useFindAllCategoriesOrderByWeightQuery({
		variables: {
			sortOrder: SortOrder.Asc,
		},
	});

	useEffect(() => {
		const getCategoriesCodes = async () => {
			const response = await fetch('https://repocdn.blob.core.windows.net/files/directory/configuration/category_codes.json');
			setCatCodes(await response.json());
		};
		getCategoriesCodes();
	}, []);

	const [removeCategoryMutation, removeCategoryData] = useRemoveCategoryMutation({
		refetchQueries: [
			{
				query: FindAllCategoriesOrderByWeightDocument,
				variables: queryFilters,
			},
			{
				query: FindAllCategoriesOrderByWeightDocument,
				variables: {
					sortOrder: SortOrder.Asc,
				},
			},
		],
		onError: ({ graphQLErrors, networkError }) => {},
	});

	const [createCategoryMutation, createdData] = useCreateCategoryMutation({
		onCompleted: () => {
			setOpened(false);
		},
		onError: ({ graphQLErrors, networkError }) => {},
		refetchQueries: [
			{
				query: FindAllCategoriesOrderByWeightDocument,
				variables: queryFilters,
			},
			{
				query: FindAllCategoriesOrderByWeightDocument,
				variables: {
					sortOrder: SortOrder.Asc,
				},
			},
		],
	});

	const [updateCategoryMutation, updatedData] = useUpdateCategoryMutation({
		onCompleted: () => {
			setOpened(false);
		},
		onError: ({ graphQLErrors, networkError }) => {},
		refetchQueries: [
			{
				query: FindAllCategoriesOrderByWeightDocument,
				variables: queryFilters,
			},
			{
				query: FindAllCategoriesOrderByWeightDocument,
				variables: {
					sortOrder: SortOrder.Asc,
				},
			},
		],
	});

	const [updateManyCategoriesMutation, updateManyData] = useUpdateManyCategoriesMutation({
		refetchQueries: [
			{
				query: FindAllCategoriesOrderByWeightDocument,
				variables: queryFilters,
			},
			{
				query: FindAllCategoriesOrderByWeightDocument,
				variables: {
					sortOrder: SortOrder.Asc,
				},
			},
		],
	});

	const createCategoriesHandler = (category?: CategoryProp) => {
		const initCatData = {
			...initialCategoryData,
			parent_category_id: category?.category_id,
		};

		setCategoryData(initCatData);
		setOpened(true);
		setMethod('create');
	};

	useEffect(() => {
		if (router.query) {
			setQueryFilter((prevState) => ({
				...prevState,
				...router.query,
			}));
		}
	}, [router.query]);

	const errors = createdData.error?.graphQLErrors || updatedData.error?.graphQLErrors || removeCategoryData.error?.graphQLErrors;
	const errorAlert = errors?.map((error: Error, index: number) => {
		return (
			<Alert key={index} icon={<MdOutlineError />} title="Error" color="red">
				<div className={classes.alertBox}>
					<span>{error.message}</span>
				</div>
			</Alert>
		);
	});

	useEffect(() => {
		if (removeCategoryData.loading || createdData.loading || updatedData.loading || updateManyData.loading) {
			setLoaderVisible(true);
		} else {
			setLoaderVisible(false);
		}
	}, [setLoaderVisible, removeCategoryData.loading, createdData.loading, updatedData.loading, updateManyData.loading]);

	const getParentName = (parent_category_id: number) => {
		let parent = categoriesData.data?.findAllCategories.find((category) => Number(category.category_id) === parent_category_id);
		return parent?.name;
	};

	const setFilter = (code: any, filter_name: string) => {
		if (code) {
			router.push({ query: { [filter_name]: code } });
		} else {
			setQueryFilter((current) => {
				const filters = { ...current };
				delete filters[filter_name as keyof typeof current];
				return filters;
			});
			router.replace('/categories', undefined, { shallow: true });
		}
	};

	let AUTO: any = {};
	catCodes.forEach((codeObject: any) => {
		AUTO[codeObject.code] = codeObject.code;
	});

	let CategoriesCodes = {
		...AUTO,
		...LOCATION,
	};

	return (
		<div className={classes.mainCont}>
			{errorAlert}
			<LoadingOverlay visible={visible} />
			<h1>Manage categories</h1>
			<div className={classes.buttonSelectBox}>
				<Button color="cyan" onClick={() => createCategoriesHandler()} rightIcon={<BsFillPlusCircleFill />}>
					Create category
				</Button>
				<Select
					data={Object.values(CategoriesCodes)}
					label="Filter by category code"
					placeholder="Choose one"
					searchable
					value={queryFilters.cat_code}
					clearable
					onChange={(code) => {
						setFilter(code, 'cat_code');
					}}
				/>
			</div>
			<Modal opened={opened} onClose={() => setOpened(false)} size="xl">
				{errorAlert}
				<CategoriesForm
					queryFilters={queryFilters}
					categoryList={categoriesData.data ? categoriesData.data.findAllCategories : defaultData}
					categoryData={categoryData}
					method={method}
					createCategoryMutation={createCategoryMutation}
					updateCategoryMutation={updateCategoryMutation}
					getParentName={getParentName}
					allCategories={allCategories.data ? allCategories.data.findAllCategories : defaultData}
					AUTO={AUTO}
				/>
			</Modal>
			{queryFilters.cat_code && (
				<CategoriesList
					categoryList={categoriesData.data ? categoriesData.data.findAllCategories : defaultData}
					setCategoryData={setCategoryData}
					setOpened={setOpened}
					setMethod={setMethod}
					removeCategoryMutation={removeCategoryMutation}
					updateManyCategoriesMutation={updateManyCategoriesMutation}
					getParentName={getParentName}
					createCategoriesHandler={createCategoriesHandler}
					allCategories={allCategories.data ? allCategories.data.findAllCategories : defaultData}
				/>
			)}
		</div>
	);
}

export default AuthCheck(ManageCategories);
