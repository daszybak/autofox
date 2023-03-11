import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPromotionWhereUniqueInput } from './user-promotion-where-unique.input';
import { Type } from 'class-transformer';
import { UserPromotionCreateWithoutPromotion_planInput } from './user-promotion-create-without-promotion-plan.input';

@InputType()
export class UserPromotionCreateOrConnectWithoutPromotion_planInput {

    @Field(() => UserPromotionWhereUniqueInput, {nullable:false})
    @Type(() => UserPromotionWhereUniqueInput)
    where!: UserPromotionWhereUniqueInput;

    @Field(() => UserPromotionCreateWithoutPromotion_planInput, {nullable:false})
    @Type(() => UserPromotionCreateWithoutPromotion_planInput)
    create!: UserPromotionCreateWithoutPromotion_planInput;
}
