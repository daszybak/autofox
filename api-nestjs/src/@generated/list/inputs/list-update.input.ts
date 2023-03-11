import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../../prisma/inputs/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutListsNestedInput } from '../../user/inputs/user-update-one-required-without-lists-nested.input';
import { ListAdUpdateManyWithoutListNestedInput } from '../../list-ad/inputs/list-ad-update-many-without-list-nested.input';

@InputType()
export class ListUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    list_type?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    search_params?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_notifiable_by_email?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_notifiable_by_push?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_notifiable_by_sms?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutListsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutListsNestedInput;

    @Field(() => ListAdUpdateManyWithoutListNestedInput, {nullable:true})
    ListAd?: ListAdUpdateManyWithoutListNestedInput;
}
