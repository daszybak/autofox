import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateNestedOneWithoutAd_categoriesInput } from '../../ad/inputs/ad-create-nested-one-without-ad-categories.input';
import { Type } from 'class-transformer';
import { CategoryCreateNestedOneWithoutAd_categoriesInput } from '../../category/inputs/category-create-nested-one-without-ad-categories.input';

@InputType()
export class AdCategoryCreateInput {

    @Field(() => AdCreateNestedOneWithoutAd_categoriesInput, {nullable:false})
    @Type(() => AdCreateNestedOneWithoutAd_categoriesInput)
    ad!: AdCreateNestedOneWithoutAd_categoriesInput;

    @Field(() => CategoryCreateNestedOneWithoutAd_categoriesInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutAd_categoriesInput;
}
