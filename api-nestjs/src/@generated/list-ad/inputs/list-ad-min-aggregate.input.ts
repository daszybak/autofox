import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ListAdMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    ad_id?: true;

    @Field(() => Boolean, {nullable:true})
    list_id?: true;
}
