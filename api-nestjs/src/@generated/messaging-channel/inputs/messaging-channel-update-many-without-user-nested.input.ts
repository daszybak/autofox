import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingChannelCreateWithoutUserInput } from './messaging-channel-create-without-user.input';
import { Type } from 'class-transformer';
import { MessagingChannelCreateOrConnectWithoutUserInput } from './messaging-channel-create-or-connect-without-user.input';
import { MessagingChannelUpsertWithWhereUniqueWithoutUserInput } from './messaging-channel-upsert-with-where-unique-without-user.input';
import { MessagingChannelCreateManyUserInputEnvelope } from './messaging-channel-create-many-user-input-envelope.input';
import { MessagingChannelWhereUniqueInput } from './messaging-channel-where-unique.input';
import { MessagingChannelUpdateWithWhereUniqueWithoutUserInput } from './messaging-channel-update-with-where-unique-without-user.input';
import { MessagingChannelUpdateManyWithWhereWithoutUserInput } from './messaging-channel-update-many-with-where-without-user.input';
import { MessagingChannelScalarWhereInput } from './messaging-channel-scalar-where.input';

@InputType()
export class MessagingChannelUpdateManyWithoutUserNestedInput {

    @Field(() => [MessagingChannelCreateWithoutUserInput], {nullable:true})
    @Type(() => MessagingChannelCreateWithoutUserInput)
    create?: Array<MessagingChannelCreateWithoutUserInput>;

    @Field(() => [MessagingChannelCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => MessagingChannelCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<MessagingChannelCreateOrConnectWithoutUserInput>;

    @Field(() => [MessagingChannelUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => MessagingChannelUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<MessagingChannelUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => MessagingChannelCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => MessagingChannelCreateManyUserInputEnvelope)
    createMany?: MessagingChannelCreateManyUserInputEnvelope;

    @Field(() => [MessagingChannelWhereUniqueInput], {nullable:true})
    @Type(() => MessagingChannelWhereUniqueInput)
    set?: Array<MessagingChannelWhereUniqueInput>;

    @Field(() => [MessagingChannelWhereUniqueInput], {nullable:true})
    @Type(() => MessagingChannelWhereUniqueInput)
    disconnect?: Array<MessagingChannelWhereUniqueInput>;

    @Field(() => [MessagingChannelWhereUniqueInput], {nullable:true})
    @Type(() => MessagingChannelWhereUniqueInput)
    delete?: Array<MessagingChannelWhereUniqueInput>;

    @Field(() => [MessagingChannelWhereUniqueInput], {nullable:true})
    @Type(() => MessagingChannelWhereUniqueInput)
    connect?: Array<MessagingChannelWhereUniqueInput>;

    @Field(() => [MessagingChannelUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => MessagingChannelUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<MessagingChannelUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [MessagingChannelUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => MessagingChannelUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<MessagingChannelUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [MessagingChannelScalarWhereInput], {nullable:true})
    @Type(() => MessagingChannelScalarWhereInput)
    deleteMany?: Array<MessagingChannelScalarWhereInput>;
}
