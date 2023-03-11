import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { IntNullableFilter } from '../../prisma/inputs/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../../prisma/inputs/date-time-nullable-filter.input';
import { BoolNullableFilter } from '../../prisma/inputs/bool-nullable-filter.input';

@InputType()
export class AdAutoScalarWhereInput {

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    AND?: Array<AdAutoScalarWhereInput>;

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    OR?: Array<AdAutoScalarWhereInput>;

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    NOT?: Array<AdAutoScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ad_auto_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    ad_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    condition_type_cid?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    vehicle_type_cid?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fuel_type_cid?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    transmission_type_cid?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    make_cid?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    model_cid?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    year?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    km?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    power_kw?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    body_type_cid?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    variant_cid?: IntNullableFilter;

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

    @Field(() => IntNullableFilter, {nullable:true})
    battery_capacity_kwh?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    conditioning_cid?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    color_exterior_cid?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    color_interior_cid?: IntNullableFilter;
}
