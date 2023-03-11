import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCategoryScalarWhereInput } from './ad-category-scalar-where.input';
import { Type } from 'class-transformer';
import { AdCategoryUncheckedUpdateManyWithoutAd_categoriesInput } from './ad-category-unchecked-update-many-without-ad-categories.input';

@InputType()
export class AdCategoryUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => AdCategoryScalarWhereInput, {nullable:false})
    @Type(() => AdCategoryScalarWhereInput)
    where!: AdCategoryScalarWhereInput;

    @Field(() => AdCategoryUncheckedUpdateManyWithoutAd_categoriesInput, {nullable:false})
    @Type(() => AdCategoryUncheckedUpdateManyWithoutAd_categoriesInput)
    data!: AdCategoryUncheckedUpdateManyWithoutAd_categoriesInput;
}
