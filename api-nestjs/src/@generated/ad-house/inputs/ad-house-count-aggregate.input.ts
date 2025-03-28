import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdHouseCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    ad_house_id?: true;

    @Field(() => Boolean, {nullable:true})
    ad_id?: true;

    @Field(() => Boolean, {nullable:true})
    meters?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
