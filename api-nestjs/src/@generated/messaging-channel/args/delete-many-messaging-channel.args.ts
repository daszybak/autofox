import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingChannelWhereInput } from '../inputs/messaging-channel-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMessagingChannelArgs {

    @Field(() => MessagingChannelWhereInput, {nullable:true})
    @Type(() => MessagingChannelWhereInput)
    where?: MessagingChannelWhereInput;
}
