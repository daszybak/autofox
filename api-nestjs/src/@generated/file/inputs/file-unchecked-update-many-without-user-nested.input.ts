import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutUserInput } from './file-create-without-user.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutUserInput } from './file-create-or-connect-without-user.input';
import { FileUpsertWithWhereUniqueWithoutUserInput } from './file-upsert-with-where-unique-without-user.input';
import { FileCreateManyUserInputEnvelope } from './file-create-many-user-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithWhereUniqueWithoutUserInput } from './file-update-with-where-unique-without-user.input';
import { FileUpdateManyWithWhereWithoutUserInput } from './file-update-many-with-where-without-user.input';
import { FileScalarWhereInput } from './file-scalar-where.input';

@InputType()
export class FileUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [FileCreateWithoutUserInput], {nullable:true})
    @Type(() => FileCreateWithoutUserInput)
    create?: Array<FileCreateWithoutUserInput>;

    @Field(() => [FileCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutUserInput>;

    @Field(() => [FileUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => FileCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyUserInputEnvelope)
    createMany?: FileCreateManyUserInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    set?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    disconnect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    delete?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [FileUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}
