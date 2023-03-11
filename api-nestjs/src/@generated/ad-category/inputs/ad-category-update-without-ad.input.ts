import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateOneRequiredWithoutAd_categoriesNestedInput } from '../../category/inputs/category-update-one-required-without-ad-categories-nested.input';

@InputType()
export class AdCategoryUpdateWithoutAdInput {

    @Field(() => CategoryUpdateOneRequiredWithoutAd_categoriesNestedInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutAd_categoriesNestedInput;
}
