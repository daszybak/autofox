import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutUserInput } from './file-create-without-user.input';

@InputType()
export class FileCreateOrConnectWithoutUserInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutUserInput, {nullable:false})
    @Type(() => FileCreateWithoutUserInput)
    create!: FileCreateWithoutUserInput;
}
