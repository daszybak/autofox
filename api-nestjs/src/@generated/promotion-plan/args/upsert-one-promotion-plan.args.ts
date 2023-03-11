import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanWhereUniqueInput } from '../inputs/promotion-plan-where-unique.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateInput } from '../inputs/promotion-plan-create.input';
import { PromotionPlanUpdateInput } from '../inputs/promotion-plan-update.input';

@ArgsType()
export class UpsertOnePromotionPlanArgs {

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanWhereUniqueInput)
    where!: PromotionPlanWhereUniqueInput;

    @Field(() => PromotionPlanCreateInput, {nullable:false})
    @Type(() => PromotionPlanCreateInput)
    create!: PromotionPlanCreateInput;

    @Field(() => PromotionPlanUpdateInput, {nullable:false})
    @Type(() => PromotionPlanUpdateInput)
    update!: PromotionPlanUpdateInput;
}
