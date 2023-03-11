import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdUpdateOneRequiredWithoutAd_categoriesNestedInput } from '../../ad/inputs/ad-update-one-required-without-ad-categories-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class AdCategoryUpdateWithoutCategoryInput {

    @Field(() => AdUpdateOneRequiredWithoutAd_categoriesNestedInput, {nullable:true})
    @Type(() => AdUpdateOneRequiredWithoutAd_categoriesNestedInput)
    ad?: AdUpdateOneRequiredWithoutAd_categoriesNestedInput;
}
