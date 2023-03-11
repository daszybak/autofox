import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBlogsInput } from './user-create-without-blogs.input';

@InputType()
export class UserCreateOrConnectWithoutBlogsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutBlogsInput, {nullable:false})
    @Type(() => UserCreateWithoutBlogsInput)
    create!: UserCreateWithoutBlogsInput;
}
