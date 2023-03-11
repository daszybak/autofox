import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdUpdateOneRequiredWithoutAd_categoriesNestedInput } from '../../ad/inputs/ad-update-one-required-without-ad-categories-nested.input';
import { Type } from 'class-transformer';
import { CategoryUpdateOneRequiredWithoutAd_categoriesNestedInput } from '../../category/inputs/category-update-one-required-without-ad-categories-nested.input';

@InputType()
export class AdCategoryUpdateInput {

    @Field(() => AdUpdateOneRequiredWithoutAd_categoriesNestedInput, {nullable:true})
    @Type(() => AdUpdateOneRequiredWithoutAd_categoriesNestedInput)
    ad?: AdUpdateOneRequiredWithoutAd_categoriesNestedInput;

    @Field(() => CategoryUpdateOneRequiredWithoutAd_categoriesNestedInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutAd_categoriesNestedInput;
}
