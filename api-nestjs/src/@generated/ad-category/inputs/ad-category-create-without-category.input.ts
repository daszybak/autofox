import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateNestedOneWithoutAd_categoriesInput } from '../../ad/inputs/ad-create-nested-one-without-ad-categories.input';
import { Type } from 'class-transformer';

@InputType()
export class AdCategoryCreateWithoutCategoryInput {

    @Field(() => AdCreateNestedOneWithoutAd_categoriesInput, {nullable:false})
    @Type(() => AdCreateNestedOneWithoutAd_categoriesInput)
    ad!: AdCreateNestedOneWithoutAd_categoriesInput;
}
