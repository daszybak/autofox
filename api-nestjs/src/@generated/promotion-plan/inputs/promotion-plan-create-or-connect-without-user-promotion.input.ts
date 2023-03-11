import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateWithoutUserPromotionInput } from './promotion-plan-create-without-user-promotion.input';

@InputType()
export class PromotionPlanCreateOrConnectWithoutUserPromotionInput {

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanWhereUniqueInput)
    where!: PromotionPlanWhereUniqueInput;

    @Field(() => PromotionPlanCreateWithoutUserPromotionInput, {nullable:false})
    @Type(() => PromotionPlanCreateWithoutUserPromotionInput)
    create!: PromotionPlanCreateWithoutUserPromotionInput;
}
