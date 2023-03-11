import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { AdCountOrderByAggregateInput } from './ad-count-order-by-aggregate.input';
import { Type } from 'class-transformer';
import { AdAvgOrderByAggregateInput } from './ad-avg-order-by-aggregate.input';
import { AdMaxOrderByAggregateInput } from './ad-max-order-by-aggregate.input';
import { AdMinOrderByAggregateInput } from './ad-min-order-by-aggregate.input';
import { AdSumOrderByAggregateInput } from './ad-sum-order-by-aggregate.input';

@InputType()
export class AdOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    ad_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coords_latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coords_longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coords_radius?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price_eurocent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_sub?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_sold?: keyof typeof SortOrder;

    @HideField()
    moderation_flag?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price_rating?: keyof typeof SortOrder;

    @Field(() => AdCountOrderByAggregateInput, {nullable:true})
    @Type(() => AdCountOrderByAggregateInput)
    _count?: AdCountOrderByAggregateInput;

    @Field(() => AdAvgOrderByAggregateInput, {nullable:true})
    @Type(() => AdAvgOrderByAggregateInput)
    _avg?: AdAvgOrderByAggregateInput;

    @Field(() => AdMaxOrderByAggregateInput, {nullable:true})
    @Type(() => AdMaxOrderByAggregateInput)
    _max?: AdMaxOrderByAggregateInput;

    @Field(() => AdMinOrderByAggregateInput, {nullable:true})
    @Type(() => AdMinOrderByAggregateInput)
    _min?: AdMinOrderByAggregateInput;

    @Field(() => AdSumOrderByAggregateInput, {nullable:true})
    @Type(() => AdSumOrderByAggregateInput)
    _sum?: AdSumOrderByAggregateInput;
}
