import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class AdMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    ad_id?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    deleted_at?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    text?: true;

    @Field(() => Boolean, {nullable:true})
    coords_latitude?: true;

    @Field(() => Boolean, {nullable:true})
    coords_longitude?: true;

    @Field(() => Boolean, {nullable:true})
    coords_radius?: true;

    @Field(() => Boolean, {nullable:true})
    address?: true;

    @Field(() => Boolean, {nullable:true})
    price_eurocent?: true;

    @Field(() => Boolean, {nullable:true})
    user_sub?: true;

    @Field(() => Boolean, {nullable:true})
    is_sold?: true;

    @HideField()
    moderation_flag?: true;

    @Field(() => Boolean, {nullable:true})
    price_rating?: true;
}
