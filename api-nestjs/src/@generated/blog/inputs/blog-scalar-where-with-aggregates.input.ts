import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../../prisma/inputs/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/inputs/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/inputs/date-time-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/inputs/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../../prisma/inputs/int-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class BlogScalarWhereWithAggregatesInput {

    @Field(() => [BlogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BlogScalarWhereWithAggregatesInput>;

    @Field(() => [BlogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BlogScalarWhereWithAggregatesInput>;

    @Field(() => [BlogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BlogScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    blog_id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deleted_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    language_cid?: IntNullableWithAggregatesFilter;

    @HideField()
    user_sub?: StringWithAggregatesFilter;

    @HideField()
    moderation_flag?: IntWithAggregatesFilter;
}
