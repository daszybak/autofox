import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../../prisma/inputs/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/inputs/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../../prisma/inputs/bool-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ListScalarWhereWithAggregatesInput {

    @Field(() => [ListScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ListScalarWhereWithAggregatesInput>;

    @Field(() => [ListScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ListScalarWhereWithAggregatesInput>;

    @Field(() => [ListScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ListScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    list_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    list_type?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    search_params?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_notifiable_by_email?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_notifiable_by_push?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_notifiable_by_sms?: BoolWithAggregatesFilter;

    @HideField()
    user_sub?: StringWithAggregatesFilter;
}
