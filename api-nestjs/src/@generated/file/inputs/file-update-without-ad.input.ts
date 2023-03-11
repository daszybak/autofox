import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { UserUpdateOneWithoutFilesNestedInput } from '../../user/inputs/user-update-one-without-files-nested.input';

@InputType()
export class FileUpdateWithoutAdInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    filename?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    filesize?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    path?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutFilesNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutFilesNestedInput;
}
