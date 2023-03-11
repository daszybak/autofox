import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanRelationCreateManyParent_promotion_planInput } from './promotion-plan-relation-create-many-parent-promotion-plan.input';
import { Type } from 'class-transformer';

@InputType()
export class PromotionPlanRelationCreateManyParent_promotion_planInputEnvelope {

    @Field(() => [PromotionPlanRelationCreateManyParent_promotion_planInput], {nullable:false})
    @Type(() => PromotionPlanRelationCreateManyParent_promotion_planInput)
    data!: Array<PromotionPlanRelationCreateManyParent_promotion_planInput>;
}
