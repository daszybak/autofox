import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPromotionCreateWithoutPromotion_planInput } from './user-promotion-create-without-promotion-plan.input';
import { Type } from 'class-transformer';
import { UserPromotionCreateOrConnectWithoutPromotion_planInput } from './user-promotion-create-or-connect-without-promotion-plan.input';
import { UserPromotionUpsertWithWhereUniqueWithoutPromotion_planInput } from './user-promotion-upsert-with-where-unique-without-promotion-plan.input';
import { UserPromotionCreateManyPromotion_planInputEnvelope } from './user-promotion-create-many-promotion-plan-input-envelope.input';
import { UserPromotionWhereUniqueInput } from './user-promotion-where-unique.input';
import { UserPromotionUpdateWithWhereUniqueWithoutPromotion_planInput } from './user-promotion-update-with-where-unique-without-promotion-plan.input';
import { UserPromotionUpdateManyWithWhereWithoutPromotion_planInput } from './user-promotion-update-many-with-where-without-promotion-plan.input';
import { UserPromotionScalarWhereInput } from './user-promotion-scalar-where.input';

@InputType()
export class UserPromotionUpdateManyWithoutPromotion_planNestedInput {

    @Field(() => [UserPromotionCreateWithoutPromotion_planInput], {nullable:true})
    @Type(() => UserPromotionCreateWithoutPromotion_planInput)
    create?: Array<UserPromotionCreateWithoutPromotion_planInput>;

    @Field(() => [UserPromotionCreateOrConnectWithoutPromotion_planInput], {nullable:true})
    @Type(() => UserPromotionCreateOrConnectWithoutPromotion_planInput)
    connectOrCreate?: Array<UserPromotionCreateOrConnectWithoutPromotion_planInput>;

    @Field(() => [UserPromotionUpsertWithWhereUniqueWithoutPromotion_planInput], {nullable:true})
    @Type(() => UserPromotionUpsertWithWhereUniqueWithoutPromotion_planInput)
    upsert?: Array<UserPromotionUpsertWithWhereUniqueWithoutPromotion_planInput>;

    @Field(() => UserPromotionCreateManyPromotion_planInputEnvelope, {nullable:true})
    @Type(() => UserPromotionCreateManyPromotion_planInputEnvelope)
    createMany?: UserPromotionCreateManyPromotion_planInputEnvelope;

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

    @Field(() => [UserPromotionUpdateWithWhereUniqueWithoutPromotion_planInput], {nullable:true})
    @Type(() => UserPromotionUpdateWithWhereUniqueWithoutPromotion_planInput)
    update?: Array<UserPromotionUpdateWithWhereUniqueWithoutPromotion_planInput>;

    @Field(() => [UserPromotionUpdateManyWithWhereWithoutPromotion_planInput], {nullable:true})
    @Type(() => UserPromotionUpdateManyWithWhereWithoutPromotion_planInput)
    updateMany?: Array<UserPromotionUpdateManyWithWhereWithoutPromotion_planInput>;

    @Field(() => [UserPromotionScalarWhereInput], {nullable:true})
    @Type(() => UserPromotionScalarWhereInput)
    deleteMany?: Array<UserPromotionScalarWhereInput>;
}
