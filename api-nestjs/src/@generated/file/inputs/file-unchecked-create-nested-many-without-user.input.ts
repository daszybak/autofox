import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutUserInput } from './file-create-without-user.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutUserInput } from './file-create-or-connect-without-user.input';
import { FileCreateManyUserInputEnvelope } from './file-create-many-user-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [FileCreateWithoutUserInput], {nullable:true})
    @Type(() => FileCreateWithoutUserInput)
    create?: Array<FileCreateWithoutUserInput>;

    @Field(() => [FileCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutUserInput>;

    @Field(() => FileCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyUserInputEnvelope)
    createMany?: FileCreateManyUserInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
}
