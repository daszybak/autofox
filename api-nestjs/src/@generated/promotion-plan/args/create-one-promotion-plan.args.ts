import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanCreateInput } from '../inputs/promotion-plan-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePromotionPlanArgs {

    @Field(() => PromotionPlanCreateInput, {nullable:false})
    @Type(() => PromotionPlanCreateInput)
    data!: PromotionPlanCreateInput;
}
