import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { AdUpdateOneRequiredWithoutFilesNestedInput } from '../../ad/inputs/ad-update-one-required-without-files-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class FileUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    filename?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    filesize?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    path?: StringFieldUpdateOperationsInput;

    @Field(() => AdUpdateOneRequiredWithoutFilesNestedInput, {nullable:true})
    @Type(() => AdUpdateOneRequiredWithoutFilesNestedInput)
    ad?: AdUpdateOneRequiredWithoutFilesNestedInput;
}
