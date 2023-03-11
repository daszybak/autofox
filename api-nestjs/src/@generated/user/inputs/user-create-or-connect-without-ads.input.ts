import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAdsInput } from './user-create-without-ads.input';

@InputType()
export class UserCreateOrConnectWithoutAdsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAdsInput, {nullable:false})
    @Type(() => UserCreateWithoutAdsInput)
    create!: UserCreateWithoutAdsInput;
}
