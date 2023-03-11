import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../../prisma/inputs/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/inputs/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/inputs/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/inputs/string-nullable-with-aggregates-filter.input';

@InputType()
export class AdPromotionScalarWhereWithAggregatesInput {

    @Field(() => [AdPromotionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AdPromotionScalarWhereWithAggregatesInput>;

    @Field(() => [AdPromotionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AdPromotionScalarWhereWithAggregatesInput>;

    @Field(() => [AdPromotionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AdPromotionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    promotion_plan_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ad_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_sub?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    valid_from?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    valid_to?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    transaction_id?: StringNullableWithAggregatesFilter;
}
