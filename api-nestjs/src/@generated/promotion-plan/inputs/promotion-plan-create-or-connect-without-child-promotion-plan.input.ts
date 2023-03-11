import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateWithoutChildPromotionPlanInput } from './promotion-plan-create-without-child-promotion-plan.input';

@InputType()
export class PromotionPlanCreateOrConnectWithoutChildPromotionPlanInput {

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanWhereUniqueInput)
    where!: PromotionPlanWhereUniqueInput;

    @Field(() => PromotionPlanCreateWithoutChildPromotionPlanInput, {nullable:false})
    @Type(() => PromotionPlanCreateWithoutChildPromotionPlanInput)
    create!: PromotionPlanCreateWithoutChildPromotionPlanInput;
}
