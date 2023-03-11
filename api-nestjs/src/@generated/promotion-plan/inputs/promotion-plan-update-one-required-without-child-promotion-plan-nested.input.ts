import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateWithoutChildPromotionPlanInput } from './promotion-plan-create-without-child-promotion-plan.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateOrConnectWithoutChildPromotionPlanInput } from './promotion-plan-create-or-connect-without-child-promotion-plan.input';
import { PromotionPlanUpsertWithoutChildPromotionPlanInput } from './promotion-plan-upsert-without-child-promotion-plan.input';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';
import { PromotionPlanUpdateWithoutChildPromotionPlanInput } from './promotion-plan-update-without-child-promotion-plan.input';

@InputType()
export class PromotionPlanUpdateOneRequiredWithoutChildPromotionPlanNestedInput {

    @Field(() => PromotionPlanCreateWithoutChildPromotionPlanInput, {nullable:true})
    @Type(() => PromotionPlanCreateWithoutChildPromotionPlanInput)
    create?: PromotionPlanCreateWithoutChildPromotionPlanInput;

    @Field(() => PromotionPlanCreateOrConnectWithoutChildPromotionPlanInput, {nullable:true})
    @Type(() => PromotionPlanCreateOrConnectWithoutChildPromotionPlanInput)
    connectOrCreate?: PromotionPlanCreateOrConnectWithoutChildPromotionPlanInput;

    @Field(() => PromotionPlanUpsertWithoutChildPromotionPlanInput, {nullable:true})
    @Type(() => PromotionPlanUpsertWithoutChildPromotionPlanInput)
    upsert?: PromotionPlanUpsertWithoutChildPromotionPlanInput;

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    connect?: PromotionPlanWhereUniqueInput;

    @Field(() => PromotionPlanUpdateWithoutChildPromotionPlanInput, {nullable:true})
    @Type(() => PromotionPlanUpdateWithoutChildPromotionPlanInput)
    update?: PromotionPlanUpdateWithoutChildPromotionPlanInput;
}
