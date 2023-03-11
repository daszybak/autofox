import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileUpdateWithoutUserInput } from './file-update-without-user.input';
import { FileCreateWithoutUserInput } from './file-create-without-user.input';

@InputType()
export class FileUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutUserInput, {nullable:false})
    @Type(() => FileUpdateWithoutUserInput)
    update!: FileUpdateWithoutUserInput;

    @Field(() => FileCreateWithoutUserInput, {nullable:false})
    @Type(() => FileCreateWithoutUserInput)
    create!: FileCreateWithoutUserInput;
}
