import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateWithoutAdPromotionInput } from './promotion-plan-create-without-ad-promotion.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateOrConnectWithoutAdPromotionInput } from './promotion-plan-create-or-connect-without-ad-promotion.input';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';

@InputType()
export class PromotionPlanCreateNestedOneWithoutAdPromotionInput {

    @Field(() => PromotionPlanCreateWithoutAdPromotionInput, {nullable:true})
    @Type(() => PromotionPlanCreateWithoutAdPromotionInput)
    create?: PromotionPlanCreateWithoutAdPromotionInput;

    @Field(() => PromotionPlanCreateOrConnectWithoutAdPromotionInput, {nullable:true})
    @Type(() => PromotionPlanCreateOrConnectWithoutAdPromotionInput)
    connectOrCreate?: PromotionPlanCreateOrConnectWithoutAdPromotionInput;

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    connect?: PromotionPlanWhereUniqueInput;
}
