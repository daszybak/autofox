import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFilesInput } from './user-create-without-files.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFilesInput } from './user-create-or-connect-without-files.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFilesInput {

    @Field(() => UserCreateWithoutFilesInput, {nullable:true})
    @Type(() => UserCreateWithoutFilesInput)
    create?: UserCreateWithoutFilesInput;

    @Field(() => UserCreateOrConnectWithoutFilesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFilesInput)
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
