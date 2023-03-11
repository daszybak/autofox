import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingChannelCreateWithoutUserInput } from './messaging-channel-create-without-user.input';
import { Type } from 'class-transformer';
import { MessagingChannelCreateOrConnectWithoutUserInput } from './messaging-channel-create-or-connect-without-user.input';
import { MessagingChannelCreateManyUserInputEnvelope } from './messaging-channel-create-many-user-input-envelope.input';
import { MessagingChannelWhereUniqueInput } from './messaging-channel-where-unique.input';

@InputType()
export class MessagingChannelUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [MessagingChannelCreateWithoutUserInput], {nullable:true})
    @Type(() => MessagingChannelCreateWithoutUserInput)
    create?: Array<MessagingChannelCreateWithoutUserInput>;

    @Field(() => [MessagingChannelCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => MessagingChannelCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<MessagingChannelCreateOrConnectWithoutUserInput>;

    @Field(() => MessagingChannelCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => MessagingChannelCreateManyUserInputEnvelope)
    createMany?: MessagingChannelCreateManyUserInputEnvelope;

    @Field(() => [MessagingChannelWhereUniqueInput], {nullable:true})
    @Type(() => MessagingChannelWhereUniqueInput)
    connect?: Array<MessagingChannelWhereUniqueInput>;
}
