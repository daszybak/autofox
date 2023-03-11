import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { DateTimeFilter } from '../../prisma/inputs/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/inputs/date-time-nullable-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { DecimalFilter } from '../../prisma/inputs/decimal-filter.input';
import { IntNullableFilter } from '../../prisma/inputs/int-nullable-filter.input';
import { CategoryRelationFilter } from '../../category/inputs/category-relation-filter.input';
import { PromotionPlanRelationListRelationFilter } from '../../promotion-plan-relation/inputs/promotion-plan-relation-list-relation-filter.input';
import { AdPromotionListRelationFilter } from '../../ad-promotion/inputs/ad-promotion-list-relation-filter.input';
import { UserPromotionListRelationFilter } from '../../user-promotion/inputs/user-promotion-list-relation-filter.input';

@InputType()
export class PromotionPlanWhereInput {

    @Field(() => [PromotionPlanWhereInput], {nullable:true})
    @Type(() => PromotionPlanWhereInput)
    AND?: Array<PromotionPlanWhereInput>;

    @Field(() => [PromotionPlanWhereInput], {nullable:true})
    @Type(() => PromotionPlanWhereInput)
    OR?: Array<PromotionPlanWhereInput>;

    @Field(() => [PromotionPlanWhereInput], {nullable:true})
    @Type(() => PromotionPlanWhereInput)
    NOT?: Array<PromotionPlanWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    promotion_plan_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted_at?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => IntFilter, {nullable:true})
    validity_period?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    promotion_region_cid?: IntNullableFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    promotion_region?: CategoryRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    promotion_plan_type?: IntFilter;

    @Field(() => PromotionPlanRelationListRelationFilter, {nullable:true})
    ParentPromotionPlan?: PromotionPlanRelationListRelationFilter;

    @Field(() => PromotionPlanRelationListRelationFilter, {nullable:true})
    ChildPromotionPlan?: PromotionPlanRelationListRelationFilter;

    @Field(() => AdPromotionListRelationFilter, {nullable:true})
    AdPromotion?: AdPromotionListRelationFilter;

    @Field(() => UserPromotionListRelationFilter, {nullable:true})
    UserPromotion?: UserPromotionListRelationFilter;
}
