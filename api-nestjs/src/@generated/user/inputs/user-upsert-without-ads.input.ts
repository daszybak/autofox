import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAdsInput } from './user-update-without-ads.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAdsInput } from './user-create-without-ads.input';

@InputType()
export class UserUpsertWithoutAdsInput {

    @Field(() => UserUpdateWithoutAdsInput, {nullable:false})
    @Type(() => UserUpdateWithoutAdsInput)
    update!: UserUpdateWithoutAdsInput;

    @Field(() => UserCreateWithoutAdsInput, {nullable:false})
    @Type(() => UserCreateWithoutAdsInput)
    create!: UserCreateWithoutAdsInput;
}
