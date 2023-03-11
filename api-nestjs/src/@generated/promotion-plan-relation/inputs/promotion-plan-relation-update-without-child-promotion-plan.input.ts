import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanUpdateOneRequiredWithoutParentPromotionPlanNestedInput } from '../../promotion-plan/inputs/promotion-plan-update-one-required-without-parent-promotion-plan-nested.input';
import { Type } from 'class-transformer';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';

@InputType()
export class PromotionPlanRelationUpdateWithoutChild_promotion_planInput {

    @Field(() => PromotionPlanUpdateOneRequiredWithoutParentPromotionPlanNestedInput, {nullable:true})
    @Type(() => PromotionPlanUpdateOneRequiredWithoutParentPromotionPlanNestedInput)
    parent_promotion_plan?: PromotionPlanUpdateOneRequiredWithoutParentPromotionPlanNestedInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    count?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    reccurence?: IntFieldUpdateOperationsInput;
}
