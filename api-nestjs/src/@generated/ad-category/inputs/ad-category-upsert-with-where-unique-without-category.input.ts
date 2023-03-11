import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCategoryWhereUniqueInput } from './ad-category-where-unique.input';
import { Type } from 'class-transformer';
import { AdCategoryUpdateWithoutCategoryInput } from './ad-category-update-without-category.input';
import { AdCategoryCreateWithoutCategoryInput } from './ad-category-create-without-category.input';

@InputType()
export class AdCategoryUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => AdCategoryWhereUniqueInput, {nullable:false})
    @Type(() => AdCategoryWhereUniqueInput)
    where!: AdCategoryWhereUniqueInput;

    @Field(() => AdCategoryUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => AdCategoryUpdateWithoutCategoryInput)
    update!: AdCategoryUpdateWithoutCategoryInput;

    @Field(() => AdCategoryCreateWithoutCategoryInput, {nullable:false})
    @Type(() => AdCategoryCreateWithoutCategoryInput)
    create!: AdCategoryCreateWithoutCategoryInput;
}
