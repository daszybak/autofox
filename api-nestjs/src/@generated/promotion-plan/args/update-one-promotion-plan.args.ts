import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanUpdateInput } from '../inputs/promotion-plan-update.input';
import { Type } from 'class-transformer';
import { PromotionPlanWhereUniqueInput } from '../inputs/promotion-plan-where-unique.input';

@ArgsType()
export class UpdateOnePromotionPlanArgs {

    @Field(() => PromotionPlanUpdateInput, {nullable:false})
    @Type(() => PromotionPlanUpdateInput)
    data!: PromotionPlanUpdateInput;

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanWhereUniqueInput)
    where!: PromotionPlanWhereUniqueInput;
}
