import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanRelationCreateManyChild_promotion_planInput } from './promotion-plan-relation-create-many-child-promotion-plan.input';
import { Type } from 'class-transformer';

@InputType()
export class PromotionPlanRelationCreateManyChild_promotion_planInputEnvelope {

    @Field(() => [PromotionPlanRelationCreateManyChild_promotion_planInput], {nullable:false})
    @Type(() => PromotionPlanRelationCreateManyChild_promotion_planInput)
    data!: Array<PromotionPlanRelationCreateManyChild_promotion_planInput>;
}
