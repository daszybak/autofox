import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingChannelCreateManyUserInput } from './messaging-channel-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class MessagingChannelCreateManyUserInputEnvelope {

    @Field(() => [MessagingChannelCreateManyUserInput], {nullable:false})
    @Type(() => MessagingChannelCreateManyUserInput)
    data!: Array<MessagingChannelCreateManyUserInput>;
}
