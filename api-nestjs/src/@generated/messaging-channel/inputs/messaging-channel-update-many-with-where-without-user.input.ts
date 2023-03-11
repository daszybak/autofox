import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingChannelScalarWhereInput } from './messaging-channel-scalar-where.input';
import { Type } from 'class-transformer';
import { MessagingChannelUpdateManyMutationInput } from './messaging-channel-update-many-mutation.input';

@InputType()
export class MessagingChannelUpdateManyWithWhereWithoutUserInput {

    @Field(() => MessagingChannelScalarWhereInput, {nullable:false})
    @Type(() => MessagingChannelScalarWhereInput)
    where!: MessagingChannelScalarWhereInput;

    @Field(() => MessagingChannelUpdateManyMutationInput, {nullable:false})
    @Type(() => MessagingChannelUpdateManyMutationInput)
    data!: MessagingChannelUpdateManyMutationInput;
}
