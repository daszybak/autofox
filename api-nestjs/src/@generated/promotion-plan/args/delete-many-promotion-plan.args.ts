import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanWhereInput } from '../inputs/promotion-plan-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPromotionPlanArgs {

    @Field(() => PromotionPlanWhereInput, {nullable:true})
    @Type(() => PromotionPlanWhereInput)
    where?: PromotionPlanWhereInput;
}
