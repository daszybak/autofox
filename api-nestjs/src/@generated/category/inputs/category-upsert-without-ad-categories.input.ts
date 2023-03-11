import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutAd_categoriesInput } from './category-update-without-ad-categories.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAd_categoriesInput } from './category-create-without-ad-categories.input';

@InputType()
export class CategoryUpsertWithoutAd_categoriesInput {

    @Field(() => CategoryUpdateWithoutAd_categoriesInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutAd_categoriesInput)
    update!: CategoryUpdateWithoutAd_categoriesInput;

    @Field(() => CategoryCreateWithoutAd_categoriesInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAd_categoriesInput)
    create!: CategoryCreateWithoutAd_categoriesInput;
}
