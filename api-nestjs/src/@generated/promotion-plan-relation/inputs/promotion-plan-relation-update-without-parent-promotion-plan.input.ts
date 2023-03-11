import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanUpdateOneRequiredWithoutChildPromotionPlanNestedInput } from '../../promotion-plan/inputs/promotion-plan-update-one-required-without-child-promotion-plan-nested.input';
import { Type } from 'class-transformer';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';

@InputType()
export class PromotionPlanRelationUpdateWithoutParent_promotion_planInput {

    @Field(() => PromotionPlanUpdateOneRequiredWithoutChildPromotionPlanNestedInput, {nullable:true})
    @Type(() => PromotionPlanUpdateOneRequiredWithoutChildPromotionPlanNestedInput)
    child_promotion_plan?: PromotionPlanUpdateOneRequiredWithoutChildPromotionPlanNestedInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    count?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    reccurence?: IntFieldUpdateOperationsInput;
}
