import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../../prisma/inputs/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../../prisma/inputs/int-nullable-with-aggregates-filter.input';

@InputType()
export class AdHouseScalarWhereWithAggregatesInput {

    @Field(() => [AdHouseScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AdHouseScalarWhereWithAggregatesInput>;

    @Field(() => [AdHouseScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AdHouseScalarWhereWithAggregatesInput>;

    @Field(() => [AdHouseScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AdHouseScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ad_house_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ad_id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    meters?: IntNullableWithAggregatesFilter;
}
