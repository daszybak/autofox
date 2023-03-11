import AuthCheck from '../../components/layouts/auth_check/auth_check.component';
import React, { useState } from 'react';
import { useStyles } from '../../styles/blogs.style';
import { Button, Modal, Alert, LoadingOverlay, Select } from '@mantine/core';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { MdOutlineError } from 'react-icons/md';
import { PromotionForm, PromotionsList, PaginationCont } from '../../components/containers';
import {
	SortOrder,
	useRemovePromotionPlanMutation,
	useUpdatePromotionPlanMutation,
	useFindAllPromotionPlansQuery,
	useCreatePromotionPlanMutation,
	FindAllPromotionPlansDocument,
	PromotionPlan,
} from 'af-shared/lib/graphql/generated/generated';

function ManageBlogs() {
	const { classes } = useStyles();
	const [openModal, setOpenModal] = useState(false);
	const [method, setMethod] = useState('create');
	const [promotionData, setPromotionData] = useState({});
	const [orderByQuery, setOrderByQuery] = useState<any>({
		orderBy: {
			created_at: SortOrder.Desc,
		},
	});
	const [pagination, setPaginationFields] = useState({
		page: 1,
		take: 10,
		skip: 0,
	});

	//find promotion plans using sort and pagination
	const { page, ...paginationFields } = pagination;
	const promPlansQueriesData = useFindAllPromotionPlansQuery({
		variables: { ...orderByQuery, ...paginationFields },
	});
	const promPlansQueriesList: PromotionPlan[] = (promPlansQueriesData.data?.findAllPromotionPlans as any) ?? [];

	//find all promotion plans
	const promPlansData = useFindAllPromotionPlansQuery({});
	const allPromPlansList: PromotionPlan[] = (promPlansData?.data?.findAllPromotionPlans as any) ?? [];

	const [createPromotionPlanMutation, createdPromPlanData] = useCreatePromotionPlanMutation({
		onCompleted: () => {
			setOpenModal(false);
		},
		onError: ({ graphQLErrors, networkError }) => {},
		refetchQueries: [
			{
				query: FindAllPromotionPlansDocument,
				variables: { ...orderByQuery, ...paginationFields },
			},
		],
	});

	const [removePromotionPlanMutation, removePromPlanData] = useRemovePromotionPlanMutation({
		refetchQueries: [
			{
				query: FindAllPromotionPlansDocument,
				variables: { ...orderByQuery, ...paginationFields },
			},
		],
		onError: ({ graphQLErrors, networkError }) => {},
	});

	const [updatePromotionPlanMutation, updatedPromPlanData] = useUpdatePromotionPlanMutation({
		onCompleted: () => {
			setOpenModal(false);
		},
		refetchQueries: [
			{
				query: FindAllPromotionPlansDocument,
				variables: { ...orderByQuery, ...paginationFields },
			},
		],
		onError: ({ graphQLErrors, networkError }) => {},
	});

	const setPromPlansPagination = (perPage: number, page: number = 1) => {
		const newPagination = {
			page: page,
			take: perPage,
			skip: (page - 1) * perPage,
		};
		setPaginationFields((prevState) => ({
			...prevState,
			...newPagination,
		}));
	};

	const createPromPlanHandler = () => {
		setOpenModal(true);
		setMethod('create');
		setPromotionData({});
	};

	const errors = createdPromPlanData.error?.graphQLErrors;
	const errorAlert = errors?.map((error: Error, index: number) => {
		return (
			<Alert key={index} icon={<MdOutlineError />} title="Error" color="red">
				<div className={classes.alertBox}>
					<span>{error.message}</span>
				</div>
			</Alert>
		);
	});

	return (
		<div className={classes.mainCont}>
			{errorAlert}
			<LoadingOverlay visible={createdPromPlanData.loading || promPlansData.loading || removePromPlanData.loading || updatedPromPlanData.loading} />
			<h1>Manage promotion plans</h1>
			<div>
				<Button
					classNames={{
						root: classes.buttonBox,
					}}
					color="cyan"
					rightIcon={<BsFillPlusCircleFill />}
					onClick={() => createPromPlanHandler()}
				>
					Create promotion plan
				</Button>
				<div className={classes.PagSortBox}>
					<PaginationCont numberPerPage={pagination.take} page={pagination.page} totalItems={allPromPlansList.length} setPagination={setPromPlansPagination} />
					<Select
						size="xs"
						classNames={{ root: classes.selectBox }}
						label="Sort by:"
						defaultValue={SortOrder.Desc}
						data={[
							{ value: SortOrder.Desc, label: 'Last edited' },
							{ value: SortOrder.Asc, label: 'First edited' },
						]}
						onChange={(value) => {
							setOrderByQuery({
								orderBy: {
									created_at: value,
								},
							});
						}}
					/>
				</div>
				<Modal opened={openModal} onClose={() => setOpenModal(false)} size="xl">
					<PromotionForm
						method={method}
						createPromotionPlanMutation={createPromotionPlanMutation}
						updatePromotionPlanMutation={updatePromotionPlanMutation}
						promotionData={promotionData}
					/>
				</Modal>
				<PromotionsList
					removePromotionPlanMutation={removePromotionPlanMutation}
					updatePromotionPlanMutation={updatePromotionPlanMutation}
					promPlansQueriesList={promPlansQueriesList}
					setOpenModal={setOpenModal}
					setMethod={setMethod}
					setPromotionData={setPromotionData}
				/>
				<PaginationCont numberPerPage={pagination.take} page={pagination.page} totalItems={allPromPlansList.length} setPagination={setPromPlansPagination} />
			</div>
		</div>
	);
}

export default AuthCheck(ManageBlogs);
