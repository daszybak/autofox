import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutPromotionRegionInput } from './category-create-without-promotion-region.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutPromotionRegionInput } from './category-create-or-connect-without-promotion-region.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutPromotionRegionInput {

    @Field(() => CategoryCreateWithoutPromotionRegionInput, {nullable:true})
    @Type(() => CategoryCreateWithoutPromotionRegionInput)
    create?: CategoryCreateWithoutPromotionRegionInput;

    @Field(() => CategoryCreateOrConnectWithoutPromotionRegionInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutPromotionRegionInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutPromotionRegionInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
