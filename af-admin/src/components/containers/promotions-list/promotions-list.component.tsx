import React from 'react';
import { List, TypographyStylesProvider, Tooltip, ActionIcon } from '@mantine/core';
import useStyles from '../promotions-list/promotions-list.style';
import { PromotionPlan, RemovePromotionPlanMutationFn, UpdatePromotionPlanMutationFn } from 'af-shared/lib/graphql/generated/generated';
import { MdOutlineRestore } from 'react-icons/md';
import { BsPencilFill } from 'react-icons/bs';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { timeConverter } from 'af-shared/src/components/utils/time-converter';

interface PromPlansListProps {
	promPlansQueriesList: PromotionPlan[];
	removePromotionPlanMutation: RemovePromotionPlanMutationFn;
	updatePromotionPlanMutation: UpdatePromotionPlanMutationFn;
	setMethod(data: string): any;
	setOpenModal(data: boolean): any;
	setPromotionData(data: any): any;
}

const PromotionsList: React.FC<PromPlansListProps> = ({
	promPlansQueriesList,
	removePromotionPlanMutation,
	updatePromotionPlanMutation,
	setPromotionData,
	setOpenModal,
	setMethod,
}) => {
	const { classes } = useStyles();

	const updatePromotionPlanHandler = (promotionPlan: any) => {
		setPromotionData(promotionPlan);
		setOpenModal(true);
		setMethod('update');
	};

	const renderedPromPlansList = promPlansQueriesList.map((promotionPlan: any) => {
		return (
			<div key={promotionPlan.promotion_plan_id} className={promotionPlan.deleted_at !== null ? classes.deletedItem : classes.listItem}>
				<div className={classes.listItemBox}>
					<div>
						<h3>{promotionPlan.title}</h3>
						<TypographyStylesProvider>
							<p
								className={classes.listText}
								dangerouslySetInnerHTML={{ __html: promotionPlan.text.length > 69 ? promotionPlan.text.slice(0, 90) + '...' : promotionPlan.text }}
							></p>
						</TypographyStylesProvider>
						<div className={classes.priceValidityBox}>
							<p className={classes.priceP}>Price: € {promotionPlan.price}</p>
							<p>Validity period: {promotionPlan.validity_period} days</p>
						</div>
						<p className={classes.date}>Date edited: {timeConverter(promotionPlan.created_at)}</p>
					</div>
					<div>
						{promotionPlan.deleted_at !== null ? (
							<span className={classes.restoreBox}>
								<span>
									<Tooltip label="Restore">
										<ActionIcon
											color="blue"
											variant="filled"
											onClick={() =>
												updatePromotionPlanMutation({
													variables: {
														data: {
															deleted_at: {
																set: null,
															},
														},
														id: Number(promotionPlan.promotion_plan_id),
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
						) : (
							<span className={classes.actionsIcons}>
								<Tooltip label="Edit">
									<ActionIcon color="green" variant="light" onClick={() => updatePromotionPlanHandler(promotionPlan)}>
										<BsPencilFill />
									</ActionIcon>
								</Tooltip>
								<Tooltip label="Delete">
									<ActionIcon
										color="red"
										variant="light"
										onClick={() =>
											removePromotionPlanMutation({
												variables: {
													id: Number(promotionPlan.promotion_plan_id),
												},
											})
										}
									>
										<RiDeleteBin4Line />
									</ActionIcon>
								</Tooltip>
							</span>
						)}
					</div>
				</div>
			</div>
		);
	});

	return (
		<div>
			<List listStyleType="none" size="sm">
				{renderedPromPlansList}
			</List>
		</div>
	);
};

export default PromotionsList;
