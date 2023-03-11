import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateWithoutUserPromotionInput } from './promotion-plan-create-without-user-promotion.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateOrConnectWithoutUserPromotionInput } from './promotion-plan-create-or-connect-without-user-promotion.input';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';

@InputType()
export class PromotionPlanCreateNestedOneWithoutUserPromotionInput {

    @Field(() => PromotionPlanCreateWithoutUserPromotionInput, {nullable:true})
    @Type(() => PromotionPlanCreateWithoutUserPromotionInput)
    create?: PromotionPlanCreateWithoutUserPromotionInput;

    @Field(() => PromotionPlanCreateOrConnectWithoutUserPromotionInput, {nullable:true})
    @Type(() => PromotionPlanCreateOrConnectWithoutUserPromotionInput)
    connectOrCreate?: PromotionPlanCreateOrConnectWithoutUserPromotionInput;

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    connect?: PromotionPlanWhereUniqueInput;
}
