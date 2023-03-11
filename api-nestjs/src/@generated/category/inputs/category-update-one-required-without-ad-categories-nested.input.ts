import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAd_categoriesInput } from './category-create-without-ad-categories.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAd_categoriesInput } from './category-create-or-connect-without-ad-categories.input';
import { CategoryUpsertWithoutAd_categoriesInput } from './category-upsert-without-ad-categories.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutAd_categoriesInput } from './category-update-without-ad-categories.input';

@InputType()
export class CategoryUpdateOneRequiredWithoutAd_categoriesNestedInput {

    @Field(() => CategoryCreateWithoutAd_categoriesInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAd_categoriesInput)
    create?: CategoryCreateWithoutAd_categoriesInput;

    @Field(() => CategoryCreateOrConnectWithoutAd_categoriesInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAd_categoriesInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAd_categoriesInput;

    @Field(() => CategoryUpsertWithoutAd_categoriesInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutAd_categoriesInput)
    upsert?: CategoryUpsertWithoutAd_categoriesInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutAd_categoriesInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutAd_categoriesInput)
    update?: CategoryUpdateWithoutAd_categoriesInput;
}
