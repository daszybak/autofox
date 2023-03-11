import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateWithoutUserPromotionInput } from './promotion-plan-create-without-user-promotion.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateOrConnectWithoutUserPromotionInput } from './promotion-plan-create-or-connect-without-user-promotion.input';
import { PromotionPlanUpsertWithoutUserPromotionInput } from './promotion-plan-upsert-without-user-promotion.input';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';
import { PromotionPlanUpdateWithoutUserPromotionInput } from './promotion-plan-update-without-user-promotion.input';

@InputType()
export class PromotionPlanUpdateOneRequiredWithoutUserPromotionNestedInput {

    @Field(() => PromotionPlanCreateWithoutUserPromotionInput, {nullable:true})
    @Type(() => PromotionPlanCreateWithoutUserPromotionInput)
    create?: PromotionPlanCreateWithoutUserPromotionInput;

    @Field(() => PromotionPlanCreateOrConnectWithoutUserPromotionInput, {nullable:true})
    @Type(() => PromotionPlanCreateOrConnectWithoutUserPromotionInput)
    connectOrCreate?: PromotionPlanCreateOrConnectWithoutUserPromotionInput;

    @Field(() => PromotionPlanUpsertWithoutUserPromotionInput, {nullable:true})
    @Type(() => PromotionPlanUpsertWithoutUserPromotionInput)
    upsert?: PromotionPlanUpsertWithoutUserPromotionInput;

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    connect?: PromotionPlanWhereUniqueInput;

    @Field(() => PromotionPlanUpdateWithoutUserPromotionInput, {nullable:true})
    @Type(() => PromotionPlanUpdateWithoutUserPromotionInput)
    update?: PromotionPlanUpdateWithoutUserPromotionInput;
}
