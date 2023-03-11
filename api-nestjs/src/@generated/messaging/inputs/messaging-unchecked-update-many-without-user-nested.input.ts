import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingCreateWithoutUserInput } from './messaging-create-without-user.input';
import { Type } from 'class-transformer';
import { MessagingCreateOrConnectWithoutUserInput } from './messaging-create-or-connect-without-user.input';
import { MessagingUpsertWithWhereUniqueWithoutUserInput } from './messaging-upsert-with-where-unique-without-user.input';
import { MessagingCreateManyUserInputEnvelope } from './messaging-create-many-user-input-envelope.input';
import { MessagingWhereUniqueInput } from './messaging-where-unique.input';
import { MessagingUpdateWithWhereUniqueWithoutUserInput } from './messaging-update-with-where-unique-without-user.input';
import { MessagingUpdateManyWithWhereWithoutUserInput } from './messaging-update-many-with-where-without-user.input';
import { MessagingScalarWhereInput } from './messaging-scalar-where.input';

@InputType()
export class MessagingUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [MessagingCreateWithoutUserInput], {nullable:true})
    @Type(() => MessagingCreateWithoutUserInput)
    create?: Array<MessagingCreateWithoutUserInput>;

    @Field(() => [MessagingCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => MessagingCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<MessagingCreateOrConnectWithoutUserInput>;

    @Field(() => [MessagingUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => MessagingUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<MessagingUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => MessagingCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => MessagingCreateManyUserInputEnvelope)
    createMany?: MessagingCreateManyUserInputEnvelope;

    @Field(() => [MessagingWhereUniqueInput], {nullable:true})
    @Type(() => MessagingWhereUniqueInput)
    set?: Array<MessagingWhereUniqueInput>;

    @Field(() => [MessagingWhereUniqueInput], {nullable:true})
    @Type(() => MessagingWhereUniqueInput)
    disconnect?: Array<MessagingWhereUniqueInput>;

    @Field(() => [MessagingWhereUniqueInput], {nullable:true})
    @Type(() => MessagingWhereUniqueInput)
    delete?: Array<MessagingWhereUniqueInput>;

    @Field(() => [MessagingWhereUniqueInput], {nullable:true})
    @Type(() => MessagingWhereUniqueInput)
    connect?: Array<MessagingWhereUniqueInput>;

    @Field(() => [MessagingUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => MessagingUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<MessagingUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [MessagingUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => MessagingUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<MessagingUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [MessagingScalarWhereInput], {nullable:true})
    @Type(() => MessagingScalarWhereInput)
    deleteMany?: Array<MessagingScalarWhereInput>;
}
