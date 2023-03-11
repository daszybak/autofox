import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutPromotionRegionInput } from './category-update-without-promotion-region.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutPromotionRegionInput } from './category-create-without-promotion-region.input';

@InputType()
export class CategoryUpsertWithoutPromotionRegionInput {

    @Field(() => CategoryUpdateWithoutPromotionRegionInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutPromotionRegionInput)
    update!: CategoryUpdateWithoutPromotionRegionInput;

    @Field(() => CategoryCreateWithoutPromotionRegionInput, {nullable:false})
    @Type(() => CategoryCreateWithoutPromotionRegionInput)
    create!: CategoryCreateWithoutPromotionRegionInput;
}
