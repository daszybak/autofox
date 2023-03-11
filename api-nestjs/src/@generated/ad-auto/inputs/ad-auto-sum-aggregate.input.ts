import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdAutoSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    ad_auto_id?: true;

    @Field(() => Boolean, {nullable:true})
    ad_id?: true;

    @Field(() => Boolean, {nullable:true})
    condition_type_cid?: true;

    @Field(() => Boolean, {nullable:true})
    vehicle_type_cid?: true;

    @Field(() => Boolean, {nullable:true})
    fuel_type_cid?: true;

    @Field(() => Boolean, {nullable:true})
    transmission_type_cid?: true;

    @Field(() => Boolean, {nullable:true})
    make_cid?: true;

    @Field(() => Boolean, {nullable:true})
    model_cid?: true;

    @Field(() => Boolean, {nullable:true})
    year?: true;

    @Field(() => Boolean, {nullable:true})
    km?: true;

    @Field(() => Boolean, {nullable:true})
    power_kw?: true;

    @Field(() => Boolean, {nullable:true})
    body_type_cid?: true;

    @Field(() => Boolean, {nullable:true})
    variant_cid?: true;

    @Field(() => Boolean, {nullable:true})
    doors_num?: true;

    @Field(() => Boolean, {nullable:true})
    seats_num?: true;

    @Field(() => Boolean, {nullable:true})
    engine_displacement_cm3?: true;

    @Field(() => Boolean, {nullable:true})
    emission_class_cid?: true;

    @Field(() => Boolean, {nullable:true})
    battery_capacity_kwh?: true;

    @Field(() => Boolean, {nullable:true})
    conditioning_cid?: true;

    @Field(() => Boolean, {nullable:true})
    color_exterior_cid?: true;

    @Field(() => Boolean, {nullable:true})
    color_interior_cid?: true;
}
