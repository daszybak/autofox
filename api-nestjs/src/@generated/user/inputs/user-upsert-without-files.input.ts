import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFilesInput } from './user-update-without-files.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFilesInput } from './user-create-without-files.input';

@InputType()
export class UserUpsertWithoutFilesInput {

    @Field(() => UserUpdateWithoutFilesInput, {nullable:false})
    @Type(() => UserUpdateWithoutFilesInput)
    update!: UserUpdateWithoutFilesInput;

    @Field(() => UserCreateWithoutFilesInput, {nullable:false})
    @Type(() => UserCreateWithoutFilesInput)
    create!: UserCreateWithoutFilesInput;
}
