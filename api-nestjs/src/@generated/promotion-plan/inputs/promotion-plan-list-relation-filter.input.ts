import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanWhereInput } from './promotion-plan-where.input';
import { Type } from 'class-transformer';

@InputType()
export class PromotionPlanListRelationFilter {

    @Field(() => PromotionPlanWhereInput, {nullable:true})
    @Type(() => PromotionPlanWhereInput)
    every?: PromotionPlanWhereInput;

    @Field(() => PromotionPlanWhereInput, {nullable:true})
    @Type(() => PromotionPlanWhereInput)
    some?: PromotionPlanWhereInput;

    @Field(() => PromotionPlanWhereInput, {nullable:true})
    @Type(() => PromotionPlanWhereInput)
    none?: PromotionPlanWhereInput;
}
