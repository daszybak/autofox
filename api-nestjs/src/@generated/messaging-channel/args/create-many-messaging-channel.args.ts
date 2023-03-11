import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingChannelCreateManyInput } from '../inputs/messaging-channel-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMessagingChannelArgs {

    @Field(() => [MessagingChannelCreateManyInput], {nullable:false})
    @Type(() => MessagingChannelCreateManyInput)
    data!: Array<MessagingChannelCreateManyInput>;
}
