import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { CategoryOrderByWithRelationInput } from '../../category/inputs/category-order-by-with-relation.input';
import { HideField } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from '../../user/inputs/user-order-by-with-relation.input';

@InputType()
export class BlogOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    blog_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language_cid?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    language?: CategoryOrderByWithRelationInput;

    @HideField()
    user_sub?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @HideField()
    moderation_flag?: keyof typeof SortOrder;
}
