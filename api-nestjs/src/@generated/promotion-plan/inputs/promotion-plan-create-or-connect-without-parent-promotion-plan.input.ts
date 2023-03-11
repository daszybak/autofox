import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateWithoutParentPromotionPlanInput } from './promotion-plan-create-without-parent-promotion-plan.input';

@InputType()
export class PromotionPlanCreateOrConnectWithoutParentPromotionPlanInput {

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanWhereUniqueInput)
    where!: PromotionPlanWhereUniqueInput;

    @Field(() => PromotionPlanCreateWithoutParentPromotionPlanInput, {nullable:false})
    @Type(() => PromotionPlanCreateWithoutParentPromotionPlanInput)
    create!: PromotionPlanCreateWithoutParentPromotionPlanInput;
}
