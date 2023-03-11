import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { AdAutoCountOrderByAggregateInput } from './ad-auto-count-order-by-aggregate.input';
import { AdAutoAvgOrderByAggregateInput } from './ad-auto-avg-order-by-aggregate.input';
import { AdAutoMaxOrderByAggregateInput } from './ad-auto-max-order-by-aggregate.input';
import { AdAutoMinOrderByAggregateInput } from './ad-auto-min-order-by-aggregate.input';
import { AdAutoSumOrderByAggregateInput } from './ad-auto-sum-order-by-aggregate.input';

@InputType()
export class AdAutoOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    ad_auto_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ad_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    condition_type_cid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vehicle_type_cid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fuel_type_cid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transmission_type_cid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    make_cid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    model_cid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    year?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    km?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    power_kw?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    body_type_cid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    variant_cid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    registered_until?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    doors_num?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    seats_num?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_first_owner?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_service_book_available?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_vehicle_garaged?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    engine_displacement_cm3?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emission_class_cid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    battery_capacity_kwh?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    conditioning_cid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color_exterior_cid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color_interior_cid?: keyof typeof SortOrder;

    @Field(() => AdAutoCountOrderByAggregateInput, {nullable:true})
    _count?: AdAutoCountOrderByAggregateInput;

    @Field(() => AdAutoAvgOrderByAggregateInput, {nullable:true})
    _avg?: AdAutoAvgOrderByAggregateInput;

    @Field(() => AdAutoMaxOrderByAggregateInput, {nullable:true})
    _max?: AdAutoMaxOrderByAggregateInput;

    @Field(() => AdAutoMinOrderByAggregateInput, {nullable:true})
    _min?: AdAutoMinOrderByAggregateInput;

    @Field(() => AdAutoSumOrderByAggregateInput, {nullable:true})
    _sum?: AdAutoSumOrderByAggregateInput;
}
