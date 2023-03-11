import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../../prisma/inputs/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/inputs/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/inputs/date-time-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/inputs/string-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../../prisma/inputs/decimal-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../../prisma/inputs/int-nullable-with-aggregates-filter.input';

@InputType()
export class PromotionPlanScalarWhereWithAggregatesInput {

    @Field(() => [PromotionPlanScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PromotionPlanScalarWhereWithAggregatesInput)
    AND?: Array<PromotionPlanScalarWhereWithAggregatesInput>;

    @Field(() => [PromotionPlanScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PromotionPlanScalarWhereWithAggregatesInput)
    OR?: Array<PromotionPlanScalarWhereWithAggregatesInput>;

    @Field(() => [PromotionPlanScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => PromotionPlanScalarWhereWithAggregatesInput)
    NOT?: Array<PromotionPlanScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    promotion_plan_id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deleted_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: StringWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    price?: DecimalWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    validity_period?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    promotion_region_cid?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    promotion_plan_type?: IntWithAggregatesFilter;
}
