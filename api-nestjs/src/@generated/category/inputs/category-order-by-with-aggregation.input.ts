import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { CategoryCountOrderByAggregateInput } from './category-count-order-by-aggregate.input';
import { CategoryAvgOrderByAggregateInput } from './category-avg-order-by-aggregate.input';
import { CategoryMaxOrderByAggregateInput } from './category-max-order-by-aggregate.input';
import { CategoryMinOrderByAggregateInput } from './category-min-order-by-aggregate.input';
import { CategorySumOrderByAggregateInput } from './category-sum-order-by-aggregate.input';

@InputType()
export class CategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parent_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weight?: keyof typeof SortOrder;

    @Field(() => CategoryCountOrderByAggregateInput, {nullable:true})
    _count?: CategoryCountOrderByAggregateInput;

    @Field(() => CategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: CategoryAvgOrderByAggregateInput;

    @Field(() => CategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: CategoryMaxOrderByAggregateInput;

    @Field(() => CategoryMinOrderByAggregateInput, {nullable:true})
    _min?: CategoryMinOrderByAggregateInput;

    @Field(() => CategorySumOrderByAggregateInput, {nullable:true})
    _sum?: CategorySumOrderByAggregateInput;
}
