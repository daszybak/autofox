import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingChannelCreateInput } from '../inputs/messaging-channel-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMessagingChannelArgs {

    @Field(() => MessagingChannelCreateInput, {nullable:false})
    @Type(() => MessagingChannelCreateInput)
    data!: MessagingChannelCreateInput;
}
