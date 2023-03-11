import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanWhereInput } from './promotion-plan-where.input';
import { Type } from 'class-transformer';

@InputType()
export class PromotionPlanRelationFilter {

    @Field(() => PromotionPlanWhereInput, {nullable:true})
    @Type(() => PromotionPlanWhereInput)
    is?: PromotionPlanWhereInput;

    @Field(() => PromotionPlanWhereInput, {nullable:true})
    @Type(() => PromotionPlanWhereInput)
    isNot?: PromotionPlanWhereInput;
}
