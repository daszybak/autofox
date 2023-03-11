import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingCreateWithoutUserInput } from './messaging-create-without-user.input';
import { Type } from 'class-transformer';
import { MessagingCreateOrConnectWithoutUserInput } from './messaging-create-or-connect-without-user.input';
import { MessagingCreateManyUserInputEnvelope } from './messaging-create-many-user-input-envelope.input';
import { MessagingWhereUniqueInput } from './messaging-where-unique.input';

@InputType()
export class MessagingUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [MessagingCreateWithoutUserInput], {nullable:true})
    @Type(() => MessagingCreateWithoutUserInput)
    create?: Array<MessagingCreateWithoutUserInput>;

    @Field(() => [MessagingCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => MessagingCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<MessagingCreateOrConnectWithoutUserInput>;

    @Field(() => MessagingCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => MessagingCreateManyUserInputEnvelope)
    createMany?: MessagingCreateManyUserInputEnvelope;

    @Field(() => [MessagingWhereUniqueInput], {nullable:true})
    @Type(() => MessagingWhereUniqueInput)
    connect?: Array<MessagingWhereUniqueInput>;
}
