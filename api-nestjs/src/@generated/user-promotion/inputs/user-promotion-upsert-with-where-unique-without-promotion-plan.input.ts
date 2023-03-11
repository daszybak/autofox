import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPromotionWhereUniqueInput } from './user-promotion-where-unique.input';
import { Type } from 'class-transformer';
import { UserPromotionUpdateWithoutPromotion_planInput } from './user-promotion-update-without-promotion-plan.input';
import { UserPromotionCreateWithoutPromotion_planInput } from './user-promotion-create-without-promotion-plan.input';

@InputType()
export class UserPromotionUpsertWithWhereUniqueWithoutPromotion_planInput {

    @Field(() => UserPromotionWhereUniqueInput, {nullable:false})
    @Type(() => UserPromotionWhereUniqueInput)
    where!: UserPromotionWhereUniqueInput;

    @Field(() => UserPromotionUpdateWithoutPromotion_planInput, {nullable:false})
    @Type(() => UserPromotionUpdateWithoutPromotion_planInput)
    update!: UserPromotionUpdateWithoutPromotion_planInput;

    @Field(() => UserPromotionCreateWithoutPromotion_planInput, {nullable:false})
    @Type(() => UserPromotionCreateWithoutPromotion_planInput)
    create!: UserPromotionCreateWithoutPromotion_planInput;
}
