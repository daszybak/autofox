import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class AdAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    ad_id?: true;

    @Field(() => Boolean, {nullable:true})
    coords_latitude?: true;

    @Field(() => Boolean, {nullable:true})
    coords_longitude?: true;

    @Field(() => Boolean, {nullable:true})
    coords_radius?: true;

    @Field(() => Boolean, {nullable:true})
    price_eurocent?: true;

    @HideField()
    moderation_flag?: true;

    @Field(() => Boolean, {nullable:true})
    price_rating?: true;
}
