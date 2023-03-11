import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAdsInput } from './user-create-without-ads.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAdsInput } from './user-create-or-connect-without-ads.input';
import { UserUpsertWithoutAdsInput } from './user-upsert-without-ads.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAdsInput } from './user-update-without-ads.input';

@InputType()
export class UserUpdateOneWithoutAdsNestedInput {

    @Field(() => UserCreateWithoutAdsInput, {nullable:true})
    @Type(() => UserCreateWithoutAdsInput)
    create?: UserCreateWithoutAdsInput;

    @Field(() => UserCreateOrConnectWithoutAdsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAdsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAdsInput;

    @Field(() => UserUpsertWithoutAdsInput, {nullable:true})
    @Type(() => UserUpsertWithoutAdsInput)
    upsert?: UserUpsertWithoutAdsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAdsInput, {nullable:true})
    @Type(() => UserUpdateWithoutAdsInput)
    update?: UserUpdateWithoutAdsInput;
}
