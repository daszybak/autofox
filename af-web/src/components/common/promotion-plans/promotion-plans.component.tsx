import React from 'react';
import { useFindAllPromotionPlansQuery, PromotionPlan } from 'af-shared/lib/graphql/generated/generated';
import { CreateAdFormInputs } from 'src/components/containers/create-ad/create-ad.types';
import { useFormContext } from 'react-hook-form';
import { Button, Flex, Title, Text } from '@mantine/core';
import { useStyles } from '../promotion-plans/promotion-plans.style';

const PromotionPlans = () => {
	const { classes } = useStyles();
	const { register, setValue, getValues } = useFormContext<CreateAdFormInputs>();

	const promoPlansData = useFindAllPromotionPlansQuery({
		variables: { where: { deleted_at: { equals: null } } },
	});
	const allPromoPlansList = (promoPlansData?.data?.findAllPromotionPlans as PromotionPlan[] | undefined) ?? [];

	const renderedPromotionPlans = allPromoPlansList.map((promotionPlan: PromotionPlan) => {
		return (
			<div key={promotionPlan.promotion_plan_id} className={classes.promoBox}>
				<Title order={3}>{promotionPlan.title}</Title>
				<Text dangerouslySetInnerHTML={{ __html: promotionPlan.text }}></Text>
				<div className={classes.btnAndPrice}>
					<p>
						<span>€</span> {promotionPlan.price}
					</p>
					<Button onClick={() => setValue('AdPromotion.promotion_plan_id', promotionPlan.promotion_plan_id)}>SELECT</Button>
				</div>
			</div>
		);
	});

	return (
		<div>
			<Title order={2}>PROMOTION PLANS</Title>
			<Flex direction="row" justify="center">
				{renderedPromotionPlans}
			</Flex>
		</div>
	);
};
export default PromotionPlans;
