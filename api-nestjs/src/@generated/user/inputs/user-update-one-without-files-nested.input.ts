import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFilesInput } from './user-create-without-files.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFilesInput } from './user-create-or-connect-without-files.input';
import { UserUpsertWithoutFilesInput } from './user-upsert-without-files.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFilesInput } from './user-update-without-files.input';

@InputType()
export class UserUpdateOneWithoutFilesNestedInput {

    @Field(() => UserCreateWithoutFilesInput, {nullable:true})
    @Type(() => UserCreateWithoutFilesInput)
    create?: UserCreateWithoutFilesInput;

    @Field(() => UserCreateOrConnectWithoutFilesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFilesInput)
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput;

    @Field(() => UserUpsertWithoutFilesInput, {nullable:true})
    @Type(() => UserUpsertWithoutFilesInput)
    upsert?: UserUpsertWithoutFilesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFilesInput, {nullable:true})
    @Type(() => UserUpdateWithoutFilesInput)
    update?: UserUpdateWithoutFilesInput;
}
