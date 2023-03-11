import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MessagingSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    messaging_id?: true;

    @Field(() => Boolean, {nullable:true})
    device_type?: true;
}
