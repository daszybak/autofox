import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ListSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    list_id?: true;

    @Field(() => Boolean, {nullable:true})
    list_type?: true;
}
