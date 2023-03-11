import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { PromotionPlanRelationFilter } from '../../promotion-plan/inputs/promotion-plan-relation-filter.input';
import { Type } from 'class-transformer';
import { AdRelationFilter } from '../../ad/inputs/ad-relation-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { UserRelationFilter } from '../../user/inputs/user-relation-filter.input';
import { DateTimeNullableFilter } from '../../prisma/inputs/date-time-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/inputs/string-nullable-filter.input';

@InputType()
export class AdPromotionWhereInput {

    @Field(() => [AdPromotionWhereInput], {nullable:true})
    AND?: Array<AdPromotionWhereInput>;

    @Field(() => [AdPromotionWhereInput], {nullable:true})
    OR?: Array<AdPromotionWhereInput>;

    @Field(() => [AdPromotionWhereInput], {nullable:true})
    NOT?: Array<AdPromotionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    promotion_plan_id?: IntFilter;

    @Field(() => PromotionPlanRelationFilter, {nullable:true})
    @Type(() => PromotionPlanRelationFilter)
    promotion_plan?: PromotionPlanRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    ad_id?: IntFilter;

    @Field(() => AdRelationFilter, {nullable:true})
    @Type(() => AdRelationFilter)
    ad?: AdRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    user_sub?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    valid_from?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    valid_to?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    transaction_id?: StringNullableFilter;
}
