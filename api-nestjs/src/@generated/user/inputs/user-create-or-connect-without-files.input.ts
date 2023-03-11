import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFilesInput } from './user-create-without-files.input';

@InputType()
export class UserCreateOrConnectWithoutFilesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFilesInput, {nullable:false})
    @Type(() => UserCreateWithoutFilesInput)
    create!: UserCreateWithoutFilesInput;
}
