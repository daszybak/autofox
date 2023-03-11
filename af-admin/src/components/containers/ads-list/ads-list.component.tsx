import React from 'react';
import { useStyles } from '../ads-list/ads-list.style';
import { Ad, RemoveAdMutationFn, SortOrder, UpdateAdMutationFn } from 'af-shared/lib/graphql/generated/generated';
import { Tooltip, ActionIcon, Table } from '@mantine/core';
import { BsPencilFill } from 'react-icons/bs';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { TbArrowsSort } from 'react-icons/tb';
import { MdOutlineRestore } from 'react-icons/md';
import { timeConverter } from 'af-shared/src/components/utils/time-converter';
import { useRouter } from 'next/router';

interface AdsListProps {
	adsList: Ad[];
	removeAdMutation: RemoveAdMutationFn;
	updateAdMutation: UpdateAdMutationFn;
	orderByQuery: any;
	setOrderByQuery(data: any): any;
}

const AdsList: React.FC<AdsListProps> = ({ removeAdMutation, adsList, updateAdMutation, orderByQuery, setOrderByQuery }) => {
	const { classes } = useStyles();
	const router = useRouter();

	const renderedAds = adsList?.map(({ ad_id, ...ad }: Ad) => {
		const path = `https://web.autofox.iddqd.hr/products/${ad_id}`;

		return (
			<tr key={ad_id} className={ad.deleted_at !== null ? classes.deletedItem : ''}>
				<td>{ad_id}</td>
				<td>{ad.user?.name}</td>
				<td>
					<a href={path}>{path}</a>
				</td>

				<td>
					{ad.is_sold == true ? (
						<span className={classes.soldAd}>sold</span>
					) : ad.deleted_at !== null ? (
						<span className={classes.deletedAd}>deleted</span>
					) : (
						<span className={classes.activeAd}>active</span>
					)}
				</td>
				<td>{timeConverter(ad.created_at)}</td>
				{ad.deleted_at !== null ? (
					<td>
						<span className={classes.restoreBox}>
							<span>
								<Tooltip label="Restore">
									<ActionIcon
										color="blue"
										variant="filled"
										onClick={() =>
											updateAdMutation({
												variables: {
													id: Number(ad_id),
													data: {
														deleted_at: {
															set: null,
														},
													},
												},
											})
										}
									>
										<MdOutlineRestore />
									</ActionIcon>
								</Tooltip>
							</span>
							<span></span>
						</span>
					</td>
				) : (
					<td>
						<span className={classes.actionsIcons}>
							{/*<Tooltip label="Edit">
								<ActionIcon color="green" variant="light" onClick={() => ({})}>
									<BsPencilFill />
								</ActionIcon>
							</Tooltip>*/}
							<Tooltip label="Delete">
								<ActionIcon
									color="red"
									variant="light"
									onClick={() =>
										removeAdMutation({
											variables: {
												id: Number(ad_id),
											},
										})
									}
								>
									<RiDeleteBin4Line />
								</ActionIcon>
							</Tooltip>
						</span>
					</td>
				)}
			</tr>
		);
	});

	const checkSortDirection = (field: string) => {
		const [tableName, subFieldName] = field.split('.');
		//tableName: user, subfieldName: name // user.name

		let sortDirection = SortOrder.Asc;
		if (subFieldName) {
			sortDirection = ((orderByQuery.orderBy || {})[tableName] || {})[subFieldName] === SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc;
		} else {
			sortDirection = (orderByQuery.orderBy || {})[tableName] == SortOrder.Desc ? SortOrder.Asc : SortOrder.Desc;
		}

		if (orderByQuery.orderBy) {
			let field_key = Object.keys(orderByQuery.orderBy)[0];
			if (typeof orderByQuery.orderBy[field_key] === 'object' && orderByQuery.orderBy[field_key] !== null) {
				let field_key2 = Object.keys(orderByQuery.orderBy[field_key]);
				field_key = field_key + '_' + field_key2;
			}
			let { ['order_' + field_key]: key, ...otherQueries } = router.query;
			router.push({ query: { ...otherQueries, ...{ ['order_' + field]: sortDirection } } });
		} else {
			router.push({ query: { ...router.query, ...{ ['order_' + field]: sortDirection } } });
		}
		return sortDirection;
	};

	return (
		<div>
			<div className={classes.tableBox}>
				<Table horizontalSpacing="xl" verticalSpacing="xs">
					<thead className={classes.listHeader}>
						<tr>
							<th
								className={classes.titleBox}
								onClick={() => {
									setOrderByQuery({ field_name: 'ad_id', payload: checkSortDirection('ad_id') });
								}}
							>
								<span className={classes.titleWithIcon}>
									ID
									<span className={classes.icon}>
										{(orderByQuery.orderBy || {}).ad_id ? orderByQuery.orderBy.ad_id == 'asc' ? <IoIosArrowDown /> : <IoIosArrowUp /> : <TbArrowsSort />}
									</span>
								</span>
							</th>
							<th
								className={classes.titleBox}
								onClick={() => {
									setOrderByQuery({ field_name: 'user.name', payload: checkSortDirection('user.name') });
								}}
							>
								<span className={classes.titleWithIcon}>
									SELLER USERNAME
									<span className={classes.icon}>
										{(orderByQuery.orderBy || {}).user ? orderByQuery.orderBy.user.name == 'asc' ? <IoIosArrowDown /> : <IoIosArrowUp /> : <TbArrowsSort />}
									</span>
								</span>
							</th>
							<th>LINK ON WEB</th>
							<th>STATUS</th>
							<th
								className={classes.titleBox}
								onClick={() => {
									setOrderByQuery({ field_name: 'created_at', payload: checkSortDirection('created_at') });
								}}
							>
								<span className={classes.titleWithIcon}>
									DATE ADDED
									<span className={classes.icon}>
										{(orderByQuery.orderBy || {}).created_at ? orderByQuery.orderBy.created_at == 'asc' ? <IoIosArrowDown /> : <IoIosArrowUp /> : <TbArrowsSort />}
									</span>
								</span>
							</th>
							<th>ACTIONS</th>
						</tr>
					</thead>
					<tbody>{renderedAds}</tbody>
				</Table>
			</div>
		</div>
	);
};

export default AdsList;
