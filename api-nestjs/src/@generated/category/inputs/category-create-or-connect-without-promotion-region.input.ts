import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutPromotionRegionInput } from './category-create-without-promotion-region.input';

@InputType()
export class CategoryCreateOrConnectWithoutPromotionRegionInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutPromotionRegionInput, {nullable:false})
    @Type(() => CategoryCreateWithoutPromotionRegionInput)
    create!: CategoryCreateWithoutPromotionRegionInput;
}
