import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { CategoryUpdateOneWithoutLanguageNestedInput } from '../../category/inputs/category-update-one-without-language-nested.input';
import { UserUpdateOneRequiredWithoutBlogsNestedInput } from '../../user/inputs/user-update-one-required-without-blogs-nested.input';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class BlogUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => CategoryUpdateOneWithoutLanguageNestedInput, {nullable:true})
    language?: CategoryUpdateOneWithoutLanguageNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutBlogsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutBlogsNestedInput;

    @HideField()
    moderation_flag?: IntFieldUpdateOperationsInput;
}
