import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutListsInput } from './user-update-without-lists.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutListsInput } from './user-create-without-lists.input';

@InputType()
export class UserUpsertWithoutListsInput {

    @Field(() => UserUpdateWithoutListsInput, {nullable:false})
    @Type(() => UserUpdateWithoutListsInput)
    update!: UserUpdateWithoutListsInput;

    @Field(() => UserCreateWithoutListsInput, {nullable:false})
    @Type(() => UserCreateWithoutListsInput)
    create!: UserCreateWithoutListsInput;
}
