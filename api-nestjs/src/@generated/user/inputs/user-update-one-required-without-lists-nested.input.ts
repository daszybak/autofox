import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutListsInput } from './user-create-without-lists.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutListsInput } from './user-create-or-connect-without-lists.input';
import { UserUpsertWithoutListsInput } from './user-upsert-without-lists.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutListsInput } from './user-update-without-lists.input';

@InputType()
export class UserUpdateOneRequiredWithoutListsNestedInput {

    @Field(() => UserCreateWithoutListsInput, {nullable:true})
    @Type(() => UserCreateWithoutListsInput)
    create?: UserCreateWithoutListsInput;

    @Field(() => UserCreateOrConnectWithoutListsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutListsInput)
    connectOrCreate?: UserCreateOrConnectWithoutListsInput;

    @Field(() => UserUpsertWithoutListsInput, {nullable:true})
    @Type(() => UserUpsertWithoutListsInput)
    upsert?: UserUpsertWithoutListsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutListsInput, {nullable:true})
    @Type(() => UserUpdateWithoutListsInput)
    update?: UserUpdateWithoutListsInput;
}
