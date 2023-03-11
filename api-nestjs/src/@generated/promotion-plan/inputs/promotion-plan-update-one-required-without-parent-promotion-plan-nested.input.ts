import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateWithoutParentPromotionPlanInput } from './promotion-plan-create-without-parent-promotion-plan.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateOrConnectWithoutParentPromotionPlanInput } from './promotion-plan-create-or-connect-without-parent-promotion-plan.input';
import { PromotionPlanUpsertWithoutParentPromotionPlanInput } from './promotion-plan-upsert-without-parent-promotion-plan.input';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';
import { PromotionPlanUpdateWithoutParentPromotionPlanInput } from './promotion-plan-update-without-parent-promotion-plan.input';

@InputType()
export class PromotionPlanUpdateOneRequiredWithoutParentPromotionPlanNestedInput {

    @Field(() => PromotionPlanCreateWithoutParentPromotionPlanInput, {nullable:true})
    @Type(() => PromotionPlanCreateWithoutParentPromotionPlanInput)
    create?: PromotionPlanCreateWithoutParentPromotionPlanInput;

    @Field(() => PromotionPlanCreateOrConnectWithoutParentPromotionPlanInput, {nullable:true})
    @Type(() => PromotionPlanCreateOrConnectWithoutParentPromotionPlanInput)
    connectOrCreate?: PromotionPlanCreateOrConnectWithoutParentPromotionPlanInput;

    @Field(() => PromotionPlanUpsertWithoutParentPromotionPlanInput, {nullable:true})
    @Type(() => PromotionPlanUpsertWithoutParentPromotionPlanInput)
    upsert?: PromotionPlanUpsertWithoutParentPromotionPlanInput;

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    connect?: PromotionPlanWhereUniqueInput;

    @Field(() => PromotionPlanUpdateWithoutParentPromotionPlanInput, {nullable:true})
    @Type(() => PromotionPlanUpdateWithoutParentPromotionPlanInput)
    update?: PromotionPlanUpdateWithoutParentPromotionPlanInput;
}
