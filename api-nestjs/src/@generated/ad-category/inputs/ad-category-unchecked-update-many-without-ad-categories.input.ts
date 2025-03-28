import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';

@InputType()
export class AdCategoryUncheckedUpdateManyWithoutAd_categoriesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    ad_id?: IntFieldUpdateOperationsInput;
}
