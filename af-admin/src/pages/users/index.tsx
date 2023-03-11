//import type { NextPage } from 'next';
import React, { useState } from 'react';
import AuthCheck from '../../components/layouts/auth_check/auth_check.component';
import { UsersList, PaginationCont } from '../../components/containers';
import { useFindAllUsersQuery, User } from 'af-shared/lib/graphql/generated/generated';
import { LoadingOverlay } from '@mantine/core';
import { useStyles } from '../../styles/ads.style';

function ManageUsers() {
	const { classes } = useStyles();
	const [pagination, setPaginationFields] = useState({
		page: 1,
		take: 10,
		skip: 0,
	});
	const { page, ...paginationFields } = pagination;

	const usersData = useFindAllUsersQuery({
		variables: paginationFields,
	});
	const allUsersList: User[] = (usersData.data?.findAllUsers as User[]) ?? [];

	const setUsersPagination = (perPage: number, page: number = 1) => {
		setPaginationFields((prevState) => ({
			...prevState,
			page: page,
			take: perPage,
			skip: (page - 1) * perPage,
		}));
	};

	return (
		<div className={classes.mainCont}>
			<LoadingOverlay visible={usersData.loading} />
			<h1>Manage users</h1>
			<PaginationCont numberPerPage={paginationFields.take} page={pagination.page} totalItems={allUsersList.length} setPagination={setUsersPagination} />
			<UsersList paginationFields={paginationFields} />
		</div>
	);
}

export default AuthCheck(ManageUsers);
