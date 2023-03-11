import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPromotionCreateWithoutUserInput } from './user-promotion-create-without-user.input';
import { Type } from 'class-transformer';
import { UserPromotionCreateOrConnectWithoutUserInput } from './user-promotion-create-or-connect-without-user.input';
import { UserPromotionUpsertWithWhereUniqueWithoutUserInput } from './user-promotion-upsert-with-where-unique-without-user.input';
import { UserPromotionCreateManyUserInputEnvelope } from './user-promotion-create-many-user-input-envelope.input';
import { UserPromotionWhereUniqueInput } from './user-promotion-where-unique.input';
import { UserPromotionUpdateWithWhereUniqueWithoutUserInput } from './user-promotion-update-with-where-unique-without-user.input';
import { UserPromotionUpdateManyWithWhereWithoutUserInput } from './user-promotion-update-many-with-where-without-user.input';
import { UserPromotionScalarWhereInput } from './user-promotion-scalar-where.input';

@InputType()
export class UserPromotionUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [UserPromotionCreateWithoutUserInput], {nullable:true})
    @Type(() => UserPromotionCreateWithoutUserInput)
    create?: Array<UserPromotionCreateWithoutUserInput>;

    @Field(() => [UserPromotionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserPromotionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserPromotionCreateOrConnectWithoutUserInput>;

    @Field(() => [UserPromotionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserPromotionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserPromotionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserPromotionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserPromotionCreateManyUserInputEnvelope)
    createMany?: UserPromotionCreateManyUserInputEnvelope;

    @Field(() => [UserPromotionWhereUniqueInput], {nullable:true})
    @Type(() => UserPromotionWhereUniqueInput)
    set?: Array<UserPromotionWhereUniqueInput>;

    @Field(() => [UserPromotionWhereUniqueInput], {nullable:true})
    @Type(() => UserPromotionWhereUniqueInput)
    disconnect?: Array<UserPromotionWhereUniqueInput>;

    @Field(() => [UserPromotionWhereUniqueInput], {nullable:true})
    @Type(() => UserPromotionWhereUniqueInput)
    delete?: Array<UserPromotionWhereUniqueInput>;

    @Field(() => [UserPromotionWhereUniqueInput], {nullable:true})
    @Type(() => UserPromotionWhereUniqueInput)
    connect?: Array<UserPromotionWhereUniqueInput>;

    @Field(() => [UserPromotionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserPromotionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserPromotionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserPromotionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserPromotionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserPromotionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserPromotionScalarWhereInput], {nullable:true})
    @Type(() => UserPromotionScalarWhereInput)
    deleteMany?: Array<UserPromotionScalarWhereInput>;
}
