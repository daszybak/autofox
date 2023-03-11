import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedOneWithoutAd_categoriesInput } from '../../category/inputs/category-create-nested-one-without-ad-categories.input';

@InputType()
export class AdCategoryCreateWithoutAdInput {

    @Field(() => CategoryCreateNestedOneWithoutAd_categoriesInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutAd_categoriesInput;
}
