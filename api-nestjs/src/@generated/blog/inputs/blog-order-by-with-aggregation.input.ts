import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { BlogCountOrderByAggregateInput } from './blog-count-order-by-aggregate.input';
import { BlogAvgOrderByAggregateInput } from './blog-avg-order-by-aggregate.input';
import { BlogMaxOrderByAggregateInput } from './blog-max-order-by-aggregate.input';
import { BlogMinOrderByAggregateInput } from './blog-min-order-by-aggregate.input';
import { BlogSumOrderByAggregateInput } from './blog-sum-order-by-aggregate.input';

@InputType()
export class BlogOrderByWithAggregationInput {

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

    @HideField()
    user_sub?: keyof typeof SortOrder;

    @HideField()
    moderation_flag?: keyof typeof SortOrder;

    @Field(() => BlogCountOrderByAggregateInput, {nullable:true})
    _count?: BlogCountOrderByAggregateInput;

    @Field(() => BlogAvgOrderByAggregateInput, {nullable:true})
    _avg?: BlogAvgOrderByAggregateInput;

    @Field(() => BlogMaxOrderByAggregateInput, {nullable:true})
    _max?: BlogMaxOrderByAggregateInput;

    @Field(() => BlogMinOrderByAggregateInput, {nullable:true})
    _min?: BlogMinOrderByAggregateInput;

    @Field(() => BlogSumOrderByAggregateInput, {nullable:true})
    _sum?: BlogSumOrderByAggregateInput;
}
