import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MessagingChannelAvgAggregate {

    @Field(() => Float, {nullable:true})
    messaging_channel_id?: number;

    @Field(() => Float, {nullable:true})
    device_type?: number;
}
