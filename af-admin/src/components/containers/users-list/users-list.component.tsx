import React from 'react';
import { User } from 'af-shared/lib/graphql/generated/generated';
import { Table } from '@mantine/core';
import { useStyles } from './users-list.style';
import { useFindAllUsersQuery } from 'af-shared/src/graphql/generated/generated';

interface UsersListProps {
	paginationFields: any;
}

const UsersList: React.FC<UsersListProps> = ({ paginationFields }) => {
	const { classes } = useStyles();
	const usersData = useFindAllUsersQuery({
		variables: paginationFields,
	});
	const allUsersList: User[] = (usersData.data?.findAllUsers as User[]) ?? [];

	const renderedUsers = allUsersList?.map((user) => {
		return (
			<tr key={user.user_sub}>
				<td>{user.name}</td>
				<td>{user.user_sub}</td>
			</tr>
		);
	});

	return (
		<div>
			<div className={classes.tableBox}>
				<Table horizontalSpacing="xl" verticalSpacing="xs" fontSize="sm">
					<thead className={classes.listHeader}>
						<tr>
							<th>
								<span>USER NAME</span>
							</th>
							<th>
								<span>USER_SUB</span>
							</th>
						</tr>
					</thead>
					<tbody>{renderedUsers}</tbody>
				</Table>
			</div>
		</div>
	);
};

export default UsersList;
