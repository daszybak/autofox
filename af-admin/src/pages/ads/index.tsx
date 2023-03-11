//import type { NextPage } from 'next';
import AuthCheck from '../../components/layouts/auth_check/auth_check.component';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Ad, useFindAllAdsQuery, useRemoveAdMutation, FindAllAdsDocument, AdWhereInput, SortOrder, useUpdateAdMutation } from 'af-shared/lib/graphql/generated/generated';
import { LoadingOverlay, Alert, NumberInput } from '@mantine/core';
import { useStyles } from '../../styles/ads.style';
import { MdOutlineError } from 'react-icons/md';
import { AdsList, AdsTypesView, PaginationCont } from '../../components/containers';
import { BsSearch } from 'react-icons/bs';
import { Select } from '@mantine/core';
import { useRouter } from 'next/router';

type Error = {
	message: string;
};

type QueryFilters = {
	orderBy?: any;
	where?: AdWhereInput;
};

function whereQueryReducer(state: any, action: any) {
	if (action.field_name) {
		return { ...state, where: { ...state.where, [action.field_name]: action.payload } };
	}
	return {};
}

function orderByQueryReducer(state: QueryFilters, action: any) {
	const [tableName, subFieldName] = action.field_name.split('.');
	//tableName: user, subfieldName: name // user.name

	if (subFieldName) {
		let sortDirection = ((state.orderBy || {})[tableName] || {})[subFieldName] === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc;
		if (action.payload) {
			sortDirection = action.payload == 'asc' ? SortOrder.Asc : SortOrder.Desc;
		}
		return { ...state, orderBy: { [tableName]: { [subFieldName]: sortDirection } } };
	} else {
		let sortDirection = (state.orderBy || {})[tableName] == SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc;
		if (action.payload) {
			sortDirection = action.payload == 'asc' ? SortOrder.Asc : SortOrder.Desc;
		}
		return { ...state, orderBy: { [tableName]: sortDirection } };
	}
	return {};
}

function ManageAds() {
	const { classes } = useStyles();
	const router = useRouter();
	const [whereQuery, setWhereQuery] = useReducer(whereQueryReducer, {});
	const [orderByQuery, setOrderByQuery] = useReducer(orderByQueryReducer, {});
	const [visible, setLoaderVisible] = useState(false);
	const [pagination, setPaginationFields] = useState({
		page: 1,
		take: 10,
		skip: 0,
	});

	const getQueryParams = () => {
		const whereFields = ['deleted_at', 'is_sold', 'ad_id'];
		const orderbyFields = ['order_created_at', 'order_ad_id', 'order_user.name'];
		const paginationFields = ['take', 'skip', 'page'];

		for (const queryParam in router.query) {
			if (whereFields.includes(queryParam)) {
				let [firstValue, secondValue] = (router.query[queryParam] as any).split('_');
				if (secondValue == 'null') {
					secondValue = JSON.parse(secondValue);
				}
				if (Number(secondValue)) {
					secondValue = Number(secondValue);
				}
				if (secondValue === 'true' || secondValue === 'false') {
					secondValue = secondValue === 'true';
				}

				setWhereQuery({ field_name: queryParam, payload: { [firstValue]: secondValue } });
			} else if (orderbyFields.includes(queryParam)) {
				let newField = queryParam.replace('order_', '');
				setOrderByQuery({ field_name: newField, payload: router.query[queryParam] });
			} else {
				setPaginationFields((prevState) => ({
					...prevState,
					[queryParam]: Number(router.query[queryParam]),
				}));
			}
		}
	};

	if (router.isReady && Object.keys(whereQuery).length < 1 && Object.keys(orderByQuery).length < 1 && Object.keys(router.query).length > 0) {
		getQueryParams();
	}

	const searchidref = useRef<any>(null);
	//find ads using only filters
	const adsCounter = useFindAllAdsQuery({
		variables: whereQuery,
	});
	const adsListCount: Ad[] = (adsCounter.data?.findAllAds as Ad[]) ?? [];

	//find ads using filters, pagination, sort
	const { page, ...paginationFields } = pagination;
	const adsData = useFindAllAdsQuery({
		variables: { ...whereQuery, ...paginationFields, ...orderByQuery },
	});
	const adsList: Ad[] = (adsData.data?.findAllAds as Ad[]) ?? [];

	//find all ads
	const allAdsData = useFindAllAdsQuery();
	const allAdsList: Ad[] = (allAdsData.data?.findAllAds as Ad[]) ?? [];

	const [removeAdMutation, removeAdData] = useRemoveAdMutation({
		refetchQueries: [
			{
				query: FindAllAdsDocument,
			},
		],
		onError: ({ graphQLErrors, networkError }) => {},
	});

	const [updateAdMutation, updatedData] = useUpdateAdMutation({
		refetchQueries: [
			{
				query: FindAllAdsDocument,
			},
		],
		onError: ({ graphQLErrors, networkError }) => {},
	});

	const searchById = () => {
		let ad_id = searchidref.current ? searchidref.current.value : '';
		setWhereQuery({ field_name: 'ad_id', payload: ad_id ? { equals: Number(ad_id) } : {} });
		if ((router.query || {}).ad_id && !ad_id) {
			const { ad_id, ...otherQueries } = router.query;
			router.push({ query: otherQueries });
		} else {
			router.push({ query: { ...router.query, ...{ ad_id: 'equals_' + ad_id } } });
		}
	};

	useEffect(() => {
		if (removeAdData.loading || adsData.loading || updatedData.loading) {
			setLoaderVisible(true);
		} else {
			setLoaderVisible(false);
		}
	}, [setLoaderVisible, removeAdData.loading, adsData.loading, updatedData.loading]);

	const errors = removeAdData.error?.graphQLErrors;
	const errorAlert = errors?.map((error: Error, index: number) => {
		return (
			<Alert key={index} icon={<MdOutlineError />} title="Error" color="red">
				<div className={classes.alertBox}>
					<span>{error.message}</span>
				</div>
			</Alert>
		);
	});

	const setAdsPagination = (perPage: number, page: number = 1) => {
		const newPagination = {
			page: page,
			take: perPage,
			skip: (page - 1) * perPage,
		};
		router.push({ query: { ...router.query, ...newPagination } });
		setPaginationFields((prevState) => ({
			...prevState,
			...newPagination,
		}));
	};

	const setAdFilter = (selectedValue: string) => {
		let filtersArr = [];
		let queryParams: { [key: string]: any } = {};
		let prevQuery = router.query;
		switch (selectedValue) {
			case 'deleted':
				filtersArr.push({ field_name: 'deleted_at', payload: { not: null } });
				queryParams['deleted_at'] = 'not_null';
				break;
			case 'not_deleted':
				filtersArr.push({ field_name: 'deleted_at', payload: { equals: null } });
				queryParams['deleted_at'] = 'equals_null';
				break;
			case 'sold':
				filtersArr.push({ field_name: 'is_sold', payload: { equals: true } });
				queryParams['is_sold'] = 'equals_true';
				break;
			case 'active':
				filtersArr.push({ field_name: 'is_sold', payload: { equals: false } }, { field_name: 'deleted_at', payload: { equals: null } });
				queryParams['is_sold'] = 'equals_false';
				queryParams['deleted_at'] = 'equals_null';
				break;
			default:
				const { deleted_at, is_sold, ...otherQueries } = router.query;
				prevQuery = otherQueries;
				filtersArr.push({ field_name: 'deleted_at', payload: {} }, { field_name: 'is_sold', payload: {} });
				break;
		}

		router.push({ query: { ...prevQuery, ...queryParams } });
		filtersArr.forEach((filter) => {
			setWhereQuery(filter);
		});
	};

	const getFieldValue = (field: string) => {
		if (!(whereQuery.where || {})[field]) {
			return;
		}

		switch (field) {
			case 'deleted_at':
				if (Object.keys(whereQuery.where[field])[0] == 'not' && Object.values(whereQuery.where[field])[0] == null) {
					return 'deleted';
				} else if (Object.keys(whereQuery.where[field])[0] == 'equals' && Object.values(whereQuery.where[field])[0] == null) {
					return 'not_deleted';
				}
				break;
			case 'is_sold':
				if (Object.keys(whereQuery.where[field])[0] == 'equals' && Object.values(whereQuery.where[field])[0] == true) {
					return 'sold';
				} else if (Object.keys(whereQuery.where[field])[0] == 'equals' && Object.values(whereQuery.where[field])[0] == false) {
					return 'active';
				}
				break;
			case 'ad_id':
				if (whereQuery.where[field]) {
					return Number(Object.values(whereQuery.where[field])[0]);
				}
				return;
				break;
		}
	};

	return (
		<div className={classes.mainCont}>
			{errorAlert}
			<LoadingOverlay visible={visible} />
			<h1>Manage ads</h1>
			<div className={classes.searchBox}>
				<BsSearch
					onClick={() => {
						searchById();
					}}
				/>
				<div className={classes.inputBox}>
					<NumberInput
						size="md"
						variant="unstyled"
						hideControls
						placeholder="Search ad by ID"
						// @ts-ignore
						value={getFieldValue('ad_id')}
						ref={searchidref}
						onKeyUp={(event) => {
							if (event.key === 'Enter') {
								searchById();
							}
						}}
					/>
				</div>
			</div>
			<AdsTypesView adsList={allAdsList} setWhereQuery={setWhereQuery} />
			<div className={classes.filtersBox}>
				<Select
					defaultValue="all"
					classNames={{
						root: classes.selectBox,
					}}
					label="Ad status"
					// @ts-ignore
					value={getFieldValue('deleted_at')}
					data={[
						{ value: 'all', label: 'All' },
						{ value: 'deleted', label: 'Deleted' },
						{ value: 'not_deleted', label: 'Not deleted' },
					]}
					onChange={setAdFilter}
				/>
				<Select
					defaultValue="all"
					classNames={{
						root: classes.selectBox,
					}}
					label="User facing status"
					// @ts-ignore
					value={getFieldValue('is_sold')}
					data={[
						{ value: 'all', label: 'All' },
						{ value: 'sold', label: 'Sold' },
						{ value: 'active', label: 'Active' },
					]}
					onChange={setAdFilter}
				/>
				<Select
					classNames={{
						root: classes.selectBox,
					}}
					label="Ad lifetime status"
					data={[
						{ value: 'not_moderated', label: 'Not moderated' },
						{ value: 'blocked', label: 'Blocked' },
						{ value: 'auto_moderated_success', label: 'Auto moderated success' },
						{ value: 'auto_moderated_error', label: 'Auto moderated error' },
						{ value: 'manually_moderated_success', label: 'Manually moderated success' },
						{ value: 'manually_moderated_error', label: 'Manually moderated error' },
					]}
				/>
			</div>
			<PaginationCont numberPerPage={pagination.take} page={pagination.page} totalItems={adsListCount.length} setPagination={setAdsPagination} />
			<AdsList adsList={adsList} updateAdMutation={updateAdMutation} removeAdMutation={removeAdMutation} orderByQuery={orderByQuery} setOrderByQuery={setOrderByQuery} />
			<PaginationCont numberPerPage={pagination.take} page={pagination.page} totalItems={adsListCount.length} setPagination={setAdsPagination} />
		</div>
	);
}

export default AuthCheck(ManageAds);
