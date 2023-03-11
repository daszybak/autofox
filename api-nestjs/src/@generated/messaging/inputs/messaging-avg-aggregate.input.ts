import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MessagingAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    messaging_id?: true;

    @Field(() => Boolean, {nullable:true})
    device_type?: true;
}
