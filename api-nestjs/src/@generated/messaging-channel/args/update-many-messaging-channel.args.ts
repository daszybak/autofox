import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingChannelUpdateManyMutationInput } from '../inputs/messaging-channel-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MessagingChannelWhereInput } from '../inputs/messaging-channel-where.input';

@ArgsType()
export class UpdateManyMessagingChannelArgs {

    @Field(() => MessagingChannelUpdateManyMutationInput, {nullable:false})
    @Type(() => MessagingChannelUpdateManyMutationInput)
    data!: MessagingChannelUpdateManyMutationInput;

    @Field(() => MessagingChannelWhereInput, {nullable:true})
    @Type(() => MessagingChannelWhereInput)
    where?: MessagingChannelWhereInput;
}
