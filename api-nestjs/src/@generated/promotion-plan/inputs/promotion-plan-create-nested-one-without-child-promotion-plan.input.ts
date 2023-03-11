import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateWithoutChildPromotionPlanInput } from './promotion-plan-create-without-child-promotion-plan.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateOrConnectWithoutChildPromotionPlanInput } from './promotion-plan-create-or-connect-without-child-promotion-plan.input';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';

@InputType()
export class PromotionPlanCreateNestedOneWithoutChildPromotionPlanInput {

    @Field(() => PromotionPlanCreateWithoutChildPromotionPlanInput, {nullable:true})
    @Type(() => PromotionPlanCreateWithoutChildPromotionPlanInput)
    create?: PromotionPlanCreateWithoutChildPromotionPlanInput;

    @Field(() => PromotionPlanCreateOrConnectWithoutChildPromotionPlanInput, {nullable:true})
    @Type(() => PromotionPlanCreateOrConnectWithoutChildPromotionPlanInput)
    connectOrCreate?: PromotionPlanCreateOrConnectWithoutChildPromotionPlanInput;

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    connect?: PromotionPlanWhereUniqueInput;
}
