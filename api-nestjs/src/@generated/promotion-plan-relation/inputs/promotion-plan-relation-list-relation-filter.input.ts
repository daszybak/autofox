import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanRelationWhereInput } from './promotion-plan-relation-where.input';

@InputType()
export class PromotionPlanRelationListRelationFilter {

    @Field(() => PromotionPlanRelationWhereInput, {nullable:true})
    every?: PromotionPlanRelationWhereInput;

    @Field(() => PromotionPlanRelationWhereInput, {nullable:true})
    some?: PromotionPlanRelationWhereInput;

    @Field(() => PromotionPlanRelationWhereInput, {nullable:true})
    none?: PromotionPlanRelationWhereInput;
}
