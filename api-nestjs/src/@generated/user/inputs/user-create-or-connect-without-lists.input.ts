import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutListsInput } from './user-create-without-lists.input';

@InputType()
export class UserCreateOrConnectWithoutListsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutListsInput, {nullable:false})
    @Type(() => UserCreateWithoutListsInput)
    create!: UserCreateWithoutListsInput;
}
