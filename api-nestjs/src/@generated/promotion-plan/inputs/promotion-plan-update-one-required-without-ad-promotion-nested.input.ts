import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateWithoutAdPromotionInput } from './promotion-plan-create-without-ad-promotion.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateOrConnectWithoutAdPromotionInput } from './promotion-plan-create-or-connect-without-ad-promotion.input';
import { PromotionPlanUpsertWithoutAdPromotionInput } from './promotion-plan-upsert-without-ad-promotion.input';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';
import { PromotionPlanUpdateWithoutAdPromotionInput } from './promotion-plan-update-without-ad-promotion.input';

@InputType()
export class PromotionPlanUpdateOneRequiredWithoutAdPromotionNestedInput {

    @Field(() => PromotionPlanCreateWithoutAdPromotionInput, {nullable:true})
    @Type(() => PromotionPlanCreateWithoutAdPromotionInput)
    create?: PromotionPlanCreateWithoutAdPromotionInput;

    @Field(() => PromotionPlanCreateOrConnectWithoutAdPromotionInput, {nullable:true})
    @Type(() => PromotionPlanCreateOrConnectWithoutAdPromotionInput)
    connectOrCreate?: PromotionPlanCreateOrConnectWithoutAdPromotionInput;

    @Field(() => PromotionPlanUpsertWithoutAdPromotionInput, {nullable:true})
    @Type(() => PromotionPlanUpsertWithoutAdPromotionInput)
    upsert?: PromotionPlanUpsertWithoutAdPromotionInput;

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    connect?: PromotionPlanWhereUniqueInput;

    @Field(() => PromotionPlanUpdateWithoutAdPromotionInput, {nullable:true})
    @Type(() => PromotionPlanUpdateWithoutAdPromotionInput)
    update?: PromotionPlanUpdateWithoutAdPromotionInput;
}
