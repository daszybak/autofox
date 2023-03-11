import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPromotionCreateWithoutPromotion_planInput } from './user-promotion-create-without-promotion-plan.input';
import { Type } from 'class-transformer';
import { UserPromotionCreateOrConnectWithoutPromotion_planInput } from './user-promotion-create-or-connect-without-promotion-plan.input';
import { UserPromotionCreateManyPromotion_planInputEnvelope } from './user-promotion-create-many-promotion-plan-input-envelope.input';
import { UserPromotionWhereUniqueInput } from './user-promotion-where-unique.input';

@InputType()
export class UserPromotionCreateNestedManyWithoutPromotion_planInput {

    @Field(() => [UserPromotionCreateWithoutPromotion_planInput], {nullable:true})
    @Type(() => UserPromotionCreateWithoutPromotion_planInput)
    create?: Array<UserPromotionCreateWithoutPromotion_planInput>;

    @Field(() => [UserPromotionCreateOrConnectWithoutPromotion_planInput], {nullable:true})
    @Type(() => UserPromotionCreateOrConnectWithoutPromotion_planInput)
    connectOrCreate?: Array<UserPromotionCreateOrConnectWithoutPromotion_planInput>;

    @Field(() => UserPromotionCreateManyPromotion_planInputEnvelope, {nullable:true})
    @Type(() => UserPromotionCreateManyPromotion_planInputEnvelope)
    createMany?: UserPromotionCreateManyPromotion_planInputEnvelope;

    @Field(() => [UserPromotionWhereUniqueInput], {nullable:true})
    @Type(() => UserPromotionWhereUniqueInput)
    connect?: Array<UserPromotionWhereUniqueInput>;
}
