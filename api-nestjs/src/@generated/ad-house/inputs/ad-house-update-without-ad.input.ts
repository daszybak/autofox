import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-int-field-update-operations.input';

@InputType()
export class AdHouseUpdateWithoutAdInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    meters?: NullableIntFieldUpdateOperationsInput;
}
