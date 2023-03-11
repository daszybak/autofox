import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../../prisma/inputs/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/inputs/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/inputs/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/inputs/string-nullable-with-aggregates-filter.input';

@InputType()
export class UserPromotionScalarWhereWithAggregatesInput {

    @Field(() => [UserPromotionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserPromotionScalarWhereWithAggregatesInput>;

    @Field(() => [UserPromotionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserPromotionScalarWhereWithAggregatesInput>;

    @Field(() => [UserPromotionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserPromotionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    promotion_plan_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_sub?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    valid_from?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    valid_to?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    transaction_id?: StringNullableWithAggregatesFilter;
}
