import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-int-field-update-operations.input';

@InputType()
export class AdHouseUncheckedUpdateWithoutAdInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    ad_house_id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    meters?: NullableIntFieldUpdateOperationsInput;
}
