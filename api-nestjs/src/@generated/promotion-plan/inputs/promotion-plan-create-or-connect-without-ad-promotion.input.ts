import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateWithoutAdPromotionInput } from './promotion-plan-create-without-ad-promotion.input';

@InputType()
export class PromotionPlanCreateOrConnectWithoutAdPromotionInput {

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanWhereUniqueInput)
    where!: PromotionPlanWhereUniqueInput;

    @Field(() => PromotionPlanCreateWithoutAdPromotionInput, {nullable:false})
    @Type(() => PromotionPlanCreateWithoutAdPromotionInput)
    create!: PromotionPlanCreateWithoutAdPromotionInput;
}
