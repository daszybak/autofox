import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutAdAutoVariantInput } from './category-update-without-ad-auto-variant.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoVariantInput } from './category-create-without-ad-auto-variant.input';

@InputType()
export class CategoryUpsertWithoutAdAutoVariantInput {

    @Field(() => CategoryUpdateWithoutAdAutoVariantInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutAdAutoVariantInput)
    update!: CategoryUpdateWithoutAdAutoVariantInput;

    @Field(() => CategoryCreateWithoutAdAutoVariantInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoVariantInput)
    create!: CategoryCreateWithoutAdAutoVariantInput;
}
