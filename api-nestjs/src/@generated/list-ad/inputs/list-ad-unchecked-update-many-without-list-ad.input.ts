import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';

@InputType()
export class ListAdUncheckedUpdateManyWithoutListAdInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    list_id?: IntFieldUpdateOperationsInput;
}
