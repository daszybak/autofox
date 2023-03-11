import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { DateTimeNullableFilter } from '../../prisma/inputs/date-time-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/inputs/string-nullable-filter.input';

@InputType()
export class AdPromotionScalarWhereInput {

    @Field(() => [AdPromotionScalarWhereInput], {nullable:true})
    AND?: Array<AdPromotionScalarWhereInput>;

    @Field(() => [AdPromotionScalarWhereInput], {nullable:true})
    OR?: Array<AdPromotionScalarWhereInput>;

    @Field(() => [AdPromotionScalarWhereInput], {nullable:true})
    NOT?: Array<AdPromotionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    promotion_plan_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    ad_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    user_sub?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    valid_from?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    valid_to?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    transaction_id?: StringNullableFilter;
}
