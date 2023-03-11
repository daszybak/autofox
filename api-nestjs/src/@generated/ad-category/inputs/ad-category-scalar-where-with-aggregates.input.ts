import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../../prisma/inputs/int-with-aggregates-filter.input';

@InputType()
export class AdCategoryScalarWhereWithAggregatesInput {

    @Field(() => [AdCategoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AdCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [AdCategoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AdCategoryScalarWhereWithAggregatesInput>;

    @Field(() => [AdCategoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AdCategoryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ad_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    category_id?: IntWithAggregatesFilter;
}
