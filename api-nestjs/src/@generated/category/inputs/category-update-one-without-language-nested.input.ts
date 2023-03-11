import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutLanguageInput } from './category-create-without-language.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutLanguageInput } from './category-create-or-connect-without-language.input';
import { CategoryUpsertWithoutLanguageInput } from './category-upsert-without-language.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutLanguageInput } from './category-update-without-language.input';

@InputType()
export class CategoryUpdateOneWithoutLanguageNestedInput {

    @Field(() => CategoryCreateWithoutLanguageInput, {nullable:true})
    @Type(() => CategoryCreateWithoutLanguageInput)
    create?: CategoryCreateWithoutLanguageInput;

    @Field(() => CategoryCreateOrConnectWithoutLanguageInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutLanguageInput;

    @Field(() => CategoryUpsertWithoutLanguageInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutLanguageInput)
    upsert?: CategoryUpsertWithoutLanguageInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutLanguageInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutLanguageInput)
    update?: CategoryUpdateWithoutLanguageInput;
}
