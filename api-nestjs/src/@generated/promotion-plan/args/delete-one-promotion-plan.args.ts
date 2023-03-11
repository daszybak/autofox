import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanWhereUniqueInput } from '../inputs/promotion-plan-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePromotionPlanArgs {

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanWhereUniqueInput)
    where!: PromotionPlanWhereUniqueInput;
}
