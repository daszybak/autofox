import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { DateTimeFilter } from '../../prisma/inputs/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/inputs/date-time-nullable-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { DecimalFilter } from '../../prisma/inputs/decimal-filter.input';
import { IntNullableFilter } from '../../prisma/inputs/int-nullable-filter.input';

@InputType()
export class PromotionPlanScalarWhereInput {

    @Field(() => [PromotionPlanScalarWhereInput], {nullable:true})
    @Type(() => PromotionPlanScalarWhereInput)
    AND?: Array<PromotionPlanScalarWhereInput>;

    @Field(() => [PromotionPlanScalarWhereInput], {nullable:true})
    @Type(() => PromotionPlanScalarWhereInput)
    OR?: Array<PromotionPlanScalarWhereInput>;

    @Field(() => [PromotionPlanScalarWhereInput], {nullable:true})
    @Type(() => PromotionPlanScalarWhereInput)
    NOT?: Array<PromotionPlanScalarWhereInput>;

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

    @Field(() => IntFilter, {nullable:true})
    promotion_plan_type?: IntFilter;
}
