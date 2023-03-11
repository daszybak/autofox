import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutLanguageInput } from './category-update-without-language.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutLanguageInput } from './category-create-without-language.input';

@InputType()
export class CategoryUpsertWithoutLanguageInput {

    @Field(() => CategoryUpdateWithoutLanguageInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutLanguageInput)
    update!: CategoryUpdateWithoutLanguageInput;

    @Field(() => CategoryCreateWithoutLanguageInput, {nullable:false})
    @Type(() => CategoryCreateWithoutLanguageInput)
    create!: CategoryCreateWithoutLanguageInput;
}
