import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutListsInput } from './user-create-without-lists.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutListsInput } from './user-create-or-connect-without-lists.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutListsInput {

    @Field(() => UserCreateWithoutListsInput, {nullable:true})
    @Type(() => UserCreateWithoutListsInput)
    create?: UserCreateWithoutListsInput;

    @Field(() => UserCreateOrConnectWithoutListsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutListsInput)
    connectOrCreate?: UserCreateOrConnectWithoutListsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
