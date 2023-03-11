import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdHouseMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    ad_house_id?: true;

    @Field(() => Boolean, {nullable:true})
    ad_id?: true;

    @Field(() => Boolean, {nullable:true})
    meters?: true;
}
