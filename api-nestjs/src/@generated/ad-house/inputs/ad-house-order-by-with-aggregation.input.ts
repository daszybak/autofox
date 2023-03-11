import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { AdHouseCountOrderByAggregateInput } from './ad-house-count-order-by-aggregate.input';
import { AdHouseAvgOrderByAggregateInput } from './ad-house-avg-order-by-aggregate.input';
import { AdHouseMaxOrderByAggregateInput } from './ad-house-max-order-by-aggregate.input';
import { AdHouseMinOrderByAggregateInput } from './ad-house-min-order-by-aggregate.input';
import { AdHouseSumOrderByAggregateInput } from './ad-house-sum-order-by-aggregate.input';

@InputType()
export class AdHouseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    ad_house_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ad_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    meters?: keyof typeof SortOrder;

    @Field(() => AdHouseCountOrderByAggregateInput, {nullable:true})
    _count?: AdHouseCountOrderByAggregateInput;

    @Field(() => AdHouseAvgOrderByAggregateInput, {nullable:true})
    _avg?: AdHouseAvgOrderByAggregateInput;

    @Field(() => AdHouseMaxOrderByAggregateInput, {nullable:true})
    _max?: AdHouseMaxOrderByAggregateInput;

    @Field(() => AdHouseMinOrderByAggregateInput, {nullable:true})
    _min?: AdHouseMinOrderByAggregateInput;

    @Field(() => AdHouseSumOrderByAggregateInput, {nullable:true})
    _sum?: AdHouseSumOrderByAggregateInput;
}
