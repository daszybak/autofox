import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MessagingChannelAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    messaging_channel_id?: true;

    @Field(() => Boolean, {nullable:true})
    device_type?: true;
}
