import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAd_categoriesInput } from './category-create-without-ad-categories.input';

@InputType()
export class CategoryCreateOrConnectWithoutAd_categoriesInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutAd_categoriesInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAd_categoriesInput)
    create!: CategoryCreateWithoutAd_categoriesInput;
}
