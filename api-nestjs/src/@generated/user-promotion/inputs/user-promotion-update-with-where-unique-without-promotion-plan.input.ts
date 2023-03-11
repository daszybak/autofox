import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPromotionWhereUniqueInput } from './user-promotion-where-unique.input';
import { Type } from 'class-transformer';
import { UserPromotionUpdateWithoutPromotion_planInput } from './user-promotion-update-without-promotion-plan.input';

@InputType()
export class UserPromotionUpdateWithWhereUniqueWithoutPromotion_planInput {

    @Field(() => UserPromotionWhereUniqueInput, {nullable:false})
    @Type(() => UserPromotionWhereUniqueInput)
    where!: UserPromotionWhereUniqueInput;

    @Field(() => UserPromotionUpdateWithoutPromotion_planInput, {nullable:false})
    @Type(() => UserPromotionUpdateWithoutPromotion_planInput)
    data!: UserPromotionUpdateWithoutPromotion_planInput;
}
