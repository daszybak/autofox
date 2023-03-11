import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPromotionCreateWithoutUserInput } from './user-promotion-create-without-user.input';
import { Type } from 'class-transformer';
import { UserPromotionCreateOrConnectWithoutUserInput } from './user-promotion-create-or-connect-without-user.input';
import { UserPromotionCreateManyUserInputEnvelope } from './user-promotion-create-many-user-input-envelope.input';
import { UserPromotionWhereUniqueInput } from './user-promotion-where-unique.input';

@InputType()
export class UserPromotionCreateNestedManyWithoutUserInput {

    @Field(() => [UserPromotionCreateWithoutUserInput], {nullable:true})
    @Type(() => UserPromotionCreateWithoutUserInput)
    create?: Array<UserPromotionCreateWithoutUserInput>;

    @Field(() => [UserPromotionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserPromotionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserPromotionCreateOrConnectWithoutUserInput>;

    @Field(() => UserPromotionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserPromotionCreateManyUserInputEnvelope)
    createMany?: UserPromotionCreateManyUserInputEnvelope;

    @Field(() => [UserPromotionWhereUniqueInput], {nullable:true})
    @Type(() => UserPromotionWhereUniqueInput)
    connect?: Array<UserPromotionWhereUniqueInput>;
}
