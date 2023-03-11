import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutLanguageInput } from './category-create-without-language.input';

@InputType()
export class CategoryCreateOrConnectWithoutLanguageInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutLanguageInput, {nullable:false})
    @Type(() => CategoryCreateWithoutLanguageInput)
    create!: CategoryCreateWithoutLanguageInput;
}
