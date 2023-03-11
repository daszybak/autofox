import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { DateTimeFilter } from '../../prisma/inputs/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/inputs/date-time-nullable-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { IntNullableFilter } from '../../prisma/inputs/int-nullable-filter.input';
import { CategoryRelationFilter } from '../../category/inputs/category-relation-filter.input';
import { HideField } from '@nestjs/graphql';
import { UserRelationFilter } from '../../user/inputs/user-relation-filter.input';

@InputType()
export class BlogWhereInput {

    @Field(() => [BlogWhereInput], {nullable:true})
    AND?: Array<BlogWhereInput>;

    @Field(() => [BlogWhereInput], {nullable:true})
    OR?: Array<BlogWhereInput>;

    @Field(() => [BlogWhereInput], {nullable:true})
    NOT?: Array<BlogWhereInput>;

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

    @Field(() => CategoryRelationFilter, {nullable:true})
    language?: CategoryRelationFilter;

    @HideField()
    user_sub?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @HideField()
    moderation_flag?: IntFilter;
}
