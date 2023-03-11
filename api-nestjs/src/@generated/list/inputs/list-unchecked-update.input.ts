import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../../prisma/inputs/bool-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { ListAdUncheckedUpdateManyWithoutListNestedInput } from '../../list-ad/inputs/list-ad-unchecked-update-many-without-list-nested.input';

@InputType()
export class ListUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    list_id?: IntFieldUpdateOperationsInput;

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

    @HideField()
    user_sub?: StringFieldUpdateOperationsInput;

    @Field(() => ListAdUncheckedUpdateManyWithoutListNestedInput, {nullable:true})
    ListAd?: ListAdUncheckedUpdateManyWithoutListNestedInput;
}
