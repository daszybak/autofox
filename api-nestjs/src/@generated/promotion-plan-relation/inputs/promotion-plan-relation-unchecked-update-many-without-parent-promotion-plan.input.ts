import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';

@InputType()
export class PromotionPlanRelationUncheckedUpdateManyWithoutParentPromotionPlanInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    child_promotion_plan_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    count?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    reccurence?: IntFieldUpdateOperationsInput;
}
