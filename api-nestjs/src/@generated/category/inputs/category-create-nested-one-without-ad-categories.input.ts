import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAd_categoriesInput } from './category-create-without-ad-categories.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAd_categoriesInput } from './category-create-or-connect-without-ad-categories.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutAd_categoriesInput {

    @Field(() => CategoryCreateWithoutAd_categoriesInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAd_categoriesInput)
    create?: CategoryCreateWithoutAd_categoriesInput;

    @Field(() => CategoryCreateOrConnectWithoutAd_categoriesInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAd_categoriesInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAd_categoriesInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
