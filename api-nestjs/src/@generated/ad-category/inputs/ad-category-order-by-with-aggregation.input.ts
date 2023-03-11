import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { AdCategoryCountOrderByAggregateInput } from './ad-category-count-order-by-aggregate.input';
import { AdCategoryAvgOrderByAggregateInput } from './ad-category-avg-order-by-aggregate.input';
import { AdCategoryMaxOrderByAggregateInput } from './ad-category-max-order-by-aggregate.input';
import { AdCategoryMinOrderByAggregateInput } from './ad-category-min-order-by-aggregate.input';
import { AdCategorySumOrderByAggregateInput } from './ad-category-sum-order-by-aggregate.input';

@InputType()
export class AdCategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    ad_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => AdCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: AdCategoryCountOrderByAggregateInput;

    @Field(() => AdCategoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: AdCategoryAvgOrderByAggregateInput;

    @Field(() => AdCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: AdCategoryMaxOrderByAggregateInput;

    @Field(() => AdCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: AdCategoryMinOrderByAggregateInput;

    @Field(() => AdCategorySumOrderByAggregateInput, {nullable:true})
    _sum?: AdCategorySumOrderByAggregateInput;
}
