import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCategoryWhereUniqueInput } from './ad-category-where-unique.input';
import { Type } from 'class-transformer';
import { AdCategoryCreateWithoutCategoryInput } from './ad-category-create-without-category.input';

@InputType()
export class AdCategoryCreateOrConnectWithoutCategoryInput {

    @Field(() => AdCategoryWhereUniqueInput, {nullable:false})
    @Type(() => AdCategoryWhereUniqueInput)
    where!: AdCategoryWhereUniqueInput;

    @Field(() => AdCategoryCreateWithoutCategoryInput, {nullable:false})
    @Type(() => AdCategoryCreateWithoutCategoryInput)
    create!: AdCategoryCreateWithoutCategoryInput;
}
