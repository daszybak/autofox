import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutPromotionRegionInput } from './category-create-without-promotion-region.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutPromotionRegionInput } from './category-create-or-connect-without-promotion-region.input';
import { CategoryUpsertWithoutPromotionRegionInput } from './category-upsert-without-promotion-region.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutPromotionRegionInput } from './category-update-without-promotion-region.input';

@InputType()
export class CategoryUpdateOneWithoutPromotionRegionNestedInput {

    @Field(() => CategoryCreateWithoutPromotionRegionInput, {nullable:true})
    @Type(() => CategoryCreateWithoutPromotionRegionInput)
    create?: CategoryCreateWithoutPromotionRegionInput;

    @Field(() => CategoryCreateOrConnectWithoutPromotionRegionInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutPromotionRegionInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutPromotionRegionInput;

    @Field(() => CategoryUpsertWithoutPromotionRegionInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutPromotionRegionInput)
    upsert?: CategoryUpsertWithoutPromotionRegionInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutPromotionRegionInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutPromotionRegionInput)
    update?: CategoryUpdateWithoutPromotionRegionInput;
}
