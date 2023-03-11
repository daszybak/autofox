import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateWithoutParentPromotionPlanInput } from './promotion-plan-create-without-parent-promotion-plan.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateOrConnectWithoutParentPromotionPlanInput } from './promotion-plan-create-or-connect-without-parent-promotion-plan.input';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';

@InputType()
export class PromotionPlanCreateNestedOneWithoutParentPromotionPlanInput {

    @Field(() => PromotionPlanCreateWithoutParentPromotionPlanInput, {nullable:true})
    @Type(() => PromotionPlanCreateWithoutParentPromotionPlanInput)
    create?: PromotionPlanCreateWithoutParentPromotionPlanInput;

    @Field(() => PromotionPlanCreateOrConnectWithoutParentPromotionPlanInput, {nullable:true})
    @Type(() => PromotionPlanCreateOrConnectWithoutParentPromotionPlanInput)
    connectOrCreate?: PromotionPlanCreateOrConnectWithoutParentPromotionPlanInput;

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    connect?: PromotionPlanWhereUniqueInput;
}
