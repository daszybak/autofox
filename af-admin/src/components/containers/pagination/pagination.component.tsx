import React, { useState } from 'react';
import useStyles from './pagination.style';
import { Pagination, NativeSelect } from '@mantine/core';

interface PaginationProps {
	numberPerPage: number;
	totalItems: number;
	page: number;
	setPagination(perPage: number, page?: number): any;
}

const PaginationCont: React.FC<PaginationProps> = ({ setPagination, numberPerPage, totalItems, page }) => {
	const { classes } = useStyles();
	const itemPerPage = ['10', '25', '50', '100', '200'];

	return (
		<div className={classes.paginationBox}>
			<NativeSelect
				classNames={{
					input: classes.selectInput,
				}}
				label="Items per page"
				data={itemPerPage}
				size="xs"
				value={numberPerPage}
				onChange={(e) => {
					setPagination(Number(e.target.value), 1);
				}}
			/>
			<Pagination
				className={classes.pagination}
				total={Math.ceil((totalItems ?? numberPerPage) / numberPerPage)}
				size="sm"
				color="cyan"
				page={page}
				onChange={(page) => {
					setPagination(numberPerPage, page);
				}}
			/>
		</div>
	);
};

export default PaginationCont;
