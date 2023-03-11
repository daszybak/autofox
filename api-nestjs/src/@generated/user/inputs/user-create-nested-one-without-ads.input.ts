import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAdsInput } from './user-create-without-ads.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAdsInput } from './user-create-or-connect-without-ads.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAdsInput {

    @Field(() => UserCreateWithoutAdsInput, {nullable:true})
    @Type(() => UserCreateWithoutAdsInput)
    create?: UserCreateWithoutAdsInput;

    @Field(() => UserCreateOrConnectWithoutAdsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAdsInput)
    connectOrCreate?: UserCreateOrConnectWithoutAdsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
