import AuthCheck from '../../components/layouts/auth_check/auth_check.component';
import React, { useState } from 'react';
import { useStyles } from '../../styles/blogs.style';
import { Button, Modal, LoadingOverlay, Alert, Select } from '@mantine/core';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BlogsForm, BlogsList, PaginationCont } from '../../components/containers';
import { useCreateBlogMutation, useRemoveBlogMutation, FindAllBlogsDocument, Blog, useFindAllBlogsQuery, useUpdateBlogMutation } from 'af-shared/lib/graphql/generated/generated';
import { MdOutlineError } from 'react-icons/md';
import { SortOrder } from 'af-shared/src/graphql/generated/generated';

function ManageBlogs() {
	const { classes } = useStyles();
	const [openModal, setOpenModal] = useState(false);
	const [method, setMethod] = useState('create');
	const [blogData, setBlogData] = useState({});
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

	//find blogs using sort and pagination
	const { page, ...paginationFields } = pagination;
	const blogsQueriesData = useFindAllBlogsQuery({
		variables: { ...orderByQuery, ...paginationFields },
	});
	const blogsQueriesList: Blog[] = (blogsQueriesData.data?.findAllBlogs as Blog[]) ?? [];

	//find all blogs
	const blogsData = useFindAllBlogsQuery({});
	const allBlogsList: Blog[] = (blogsData.data?.findAllBlogs as Blog[]) ?? [];

	const [createBlogMutation, createdBlogData] = useCreateBlogMutation({
		onCompleted: () => {
			setOpenModal(false);
		},
		onError: ({ graphQLErrors, networkError }) => {},
		refetchQueries: [
			{
				query: FindAllBlogsDocument,
				variables: { ...orderByQuery, ...paginationFields },
			},
		],
	});

	const [removeBlogMutation, removeBlogData] = useRemoveBlogMutation({
		refetchQueries: [
			{
				query: FindAllBlogsDocument,
				variables: { ...orderByQuery, ...paginationFields },
			},
		],
		onError: ({ graphQLErrors, networkError }) => {},
	});

	const [updateBlogMutation, updatedBlogData] = useUpdateBlogMutation({
		onCompleted: () => {
			setOpenModal(false);
		},
		refetchQueries: [
			{
				query: FindAllBlogsDocument,
				variables: { ...orderByQuery, ...paginationFields },
			},
		],
		onError: ({ graphQLErrors, networkError }) => {},
	});

	const errors = removeBlogData.error?.graphQLErrors || createdBlogData.error?.graphQLErrors || updatedBlogData.error?.graphQLErrors;
	const errorAlert = errors?.map((error: Error, index: number) => {
		return (
			<Alert key={index} icon={<MdOutlineError />} title="Error" color="red">
				<div className={classes.alertBox}>
					<span>{error.message}</span>
				</div>
			</Alert>
		);
	});

	const setBlogsPagination = (perPage: number, page: number = 1) => {
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

	const createBlogsHandler = () => {
		setOpenModal(true);
		setMethod('create');
		setBlogData({});
	};

	return (
		<div className={classes.mainCont}>
			{errorAlert}
			<LoadingOverlay visible={createdBlogData.loading || blogsData.loading || removeBlogData.loading || updatedBlogData.loading} />
			<h1>Manage Blogs</h1>
			<div>
				<Button
					classNames={{
						root: classes.buttonBox,
					}}
					color="cyan"
					onClick={() => createBlogsHandler()}
					rightIcon={<BsFillPlusCircleFill />}
				>
					Create blog
				</Button>
				<div className={classes.PagSortBox}>
					<PaginationCont numberPerPage={pagination.take} page={pagination.page} totalItems={allBlogsList.length} setPagination={setBlogsPagination} />
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
					<BlogsForm createBlogMutation={createBlogMutation} method={method} updateBlogMutation={updateBlogMutation} blogData={blogData} />
				</Modal>
				<BlogsList
					blogsQueriesList={blogsQueriesList}
					removeBlogMutation={removeBlogMutation}
					updateBlogMutation={updateBlogMutation}
					setOpenModal={setOpenModal}
					setMethod={setMethod}
					setBlogData={setBlogData}
				/>
				<PaginationCont numberPerPage={pagination.take} page={pagination.page} totalItems={allBlogsList.length} setPagination={setBlogsPagination} />
			</div>
		</div>
	);
}

export default AuthCheck(ManageBlogs);
