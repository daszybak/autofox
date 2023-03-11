import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoVariantInput } from './category-create-without-ad-auto-variant.input';

@InputType()
export class CategoryCreateOrConnectWithoutAdAutoVariantInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutAdAutoVariantInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoVariantInput)
    create!: CategoryCreateWithoutAdAutoVariantInput;
}
