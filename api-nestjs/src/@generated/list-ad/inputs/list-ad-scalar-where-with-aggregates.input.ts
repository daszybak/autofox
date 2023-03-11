import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../../prisma/inputs/int-with-aggregates-filter.input';

@InputType()
export class ListAdScalarWhereWithAggregatesInput {

    @Field(() => [ListAdScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ListAdScalarWhereWithAggregatesInput>;

    @Field(() => [ListAdScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ListAdScalarWhereWithAggregatesInput>;

    @Field(() => [ListAdScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ListAdScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ad_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    list_id?: IntWithAggregatesFilter;
}
