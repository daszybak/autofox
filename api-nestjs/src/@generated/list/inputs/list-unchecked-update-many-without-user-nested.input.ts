import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListCreateWithoutUserInput } from './list-create-without-user.input';
import { Type } from 'class-transformer';
import { ListCreateOrConnectWithoutUserInput } from './list-create-or-connect-without-user.input';
import { ListUpsertWithWhereUniqueWithoutUserInput } from './list-upsert-with-where-unique-without-user.input';
import { ListCreateManyUserInputEnvelope } from './list-create-many-user-input-envelope.input';
import { ListWhereUniqueInput } from './list-where-unique.input';
import { ListUpdateWithWhereUniqueWithoutUserInput } from './list-update-with-where-unique-without-user.input';
import { ListUpdateManyWithWhereWithoutUserInput } from './list-update-many-with-where-without-user.input';
import { ListScalarWhereInput } from './list-scalar-where.input';

@InputType()
export class ListUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ListCreateWithoutUserInput], {nullable:true})
    @Type(() => ListCreateWithoutUserInput)
    create?: Array<ListCreateWithoutUserInput>;

    @Field(() => [ListCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ListCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ListCreateOrConnectWithoutUserInput>;

    @Field(() => [ListUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ListUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ListUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ListCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ListCreateManyUserInputEnvelope)
    createMany?: ListCreateManyUserInputEnvelope;

    @Field(() => [ListWhereUniqueInput], {nullable:true})
    @Type(() => ListWhereUniqueInput)
    set?: Array<ListWhereUniqueInput>;

    @Field(() => [ListWhereUniqueInput], {nullable:true})
    @Type(() => ListWhereUniqueInput)
    disconnect?: Array<ListWhereUniqueInput>;

    @Field(() => [ListWhereUniqueInput], {nullable:true})
    @Type(() => ListWhereUniqueInput)
    delete?: Array<ListWhereUniqueInput>;

    @Field(() => [ListWhereUniqueInput], {nullable:true})
    @Type(() => ListWhereUniqueInput)
    connect?: Array<ListWhereUniqueInput>;

    @Field(() => [ListUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ListUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ListUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ListUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ListUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ListUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ListScalarWhereInput], {nullable:true})
    @Type(() => ListScalarWhereInput)
    deleteMany?: Array<ListScalarWhereInput>;
}
