import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MessagingChannelWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    messaging_channel_id?: number;
}
