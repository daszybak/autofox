import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutLanguageInput } from './category-create-without-language.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutLanguageInput } from './category-create-or-connect-without-language.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutLanguageInput {

    @Field(() => CategoryCreateWithoutLanguageInput, {nullable:true})
    @Type(() => CategoryCreateWithoutLanguageInput)
    create?: CategoryCreateWithoutLanguageInput;

    @Field(() => CategoryCreateOrConnectWithoutLanguageInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutLanguageInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
