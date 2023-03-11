import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { AdRelationFilter } from '../../ad/inputs/ad-relation-filter.input';
import { Type } from 'class-transformer';
import { IntNullableFilter } from '../../prisma/inputs/int-nullable-filter.input';
import { CategoryRelationFilter } from '../../category/inputs/category-relation-filter.input';
import { DateTimeNullableFilter } from '../../prisma/inputs/date-time-nullable-filter.input';
import { BoolNullableFilter } from '../../prisma/inputs/bool-nullable-filter.input';

@InputType()
export class AdAutoWhereInput {

    @Field(() => [AdAutoWhereInput], {nullable:true})
    AND?: Array<AdAutoWhereInput>;

    @Field(() => [AdAutoWhereInput], {nullable:true})
    OR?: Array<AdAutoWhereInput>;

    @Field(() => [AdAutoWhereInput], {nullable:true})
    NOT?: Array<AdAutoWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ad_auto_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    ad_id?: IntFilter;

    @Field(() => AdRelationFilter, {nullable:true})
    @Type(() => AdRelationFilter)
    ad?: AdRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    condition_type_cid?: IntNullableFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    condition_type?: CategoryRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    vehicle_type_cid?: IntNullableFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    vehicle_type?: CategoryRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fuel_type_cid?: IntNullableFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    fuel_type?: CategoryRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    transmission_type_cid?: IntNullableFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    transmission_type?: CategoryRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    make_cid?: IntNullableFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    make?: CategoryRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    model_cid?: IntNullableFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    model?: CategoryRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    year?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    km?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    power_kw?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    body_type_cid?: IntNullableFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    body_type?: CategoryRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    variant_cid?: IntNullableFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    variant?: CategoryRelationFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    registered_until?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    doors_num?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    seats_num?: IntNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    is_first_owner?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    is_service_book_available?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    is_vehicle_garaged?: BoolNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    engine_displacement_cm3?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    emission_class_cid?: IntNullableFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    emission_class?: CategoryRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    battery_capacity_kwh?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    conditioning_cid?: IntNullableFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    conditioning?: CategoryRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    color_exterior_cid?: IntNullableFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    color_exterior?: CategoryRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    color_interior_cid?: IntNullableFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    color_interior?: CategoryRelationFilter;
}
