import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { AdOrderByWithRelationInput } from '../../ad/inputs/ad-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { CategoryOrderByWithRelationInput } from '../../category/inputs/category-order-by-with-relation.input';

@InputType()
export class AdAutoOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    ad_auto_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ad_id?: keyof typeof SortOrder;

    @Field(() => AdOrderByWithRelationInput, {nullable:true})
    @Type(() => AdOrderByWithRelationInput)
    ad?: AdOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    condition_type_cid?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    condition_type?: CategoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    vehicle_type_cid?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    vehicle_type?: CategoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    fuel_type_cid?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    fuel_type?: CategoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    transmission_type_cid?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    transmission_type?: CategoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    make_cid?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    make?: CategoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    model_cid?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    model?: CategoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    year?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    km?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    power_kw?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    body_type_cid?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    body_type?: CategoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    variant_cid?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    variant?: CategoryOrderByWithRelationInput;

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

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    emission_class?: CategoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    battery_capacity_kwh?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    conditioning_cid?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    conditioning?: CategoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    color_exterior_cid?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    color_exterior?: CategoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    color_interior_cid?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    color_interior?: CategoryOrderByWithRelationInput;
}
