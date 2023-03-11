import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { DateTimeFilter } from '../../prisma/inputs/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/inputs/date-time-nullable-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { IntNullableFilter } from '../../prisma/inputs/int-nullable-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class BlogScalarWhereInput {

    @Field(() => [BlogScalarWhereInput], {nullable:true})
    AND?: Array<BlogScalarWhereInput>;

    @Field(() => [BlogScalarWhereInput], {nullable:true})
    OR?: Array<BlogScalarWhereInput>;

    @Field(() => [BlogScalarWhereInput], {nullable:true})
    NOT?: Array<BlogScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    blog_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted_at?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    language_cid?: IntNullableFilter;

    @HideField()
    user_sub?: StringFilter;

    @HideField()
    moderation_flag?: IntFilter;
}
