import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAdsInput } from '../../user/inputs/user-create-nested-one-without-ads.input';
import { AdCategoryCreateNestedManyWithoutAdInput } from '../../ad-category/inputs/ad-category-create-nested-many-without-ad.input';
import { AdAutoCreateNestedOneWithoutAdInput } from '../../ad-auto/inputs/ad-auto-create-nested-one-without-ad.input';
import { AdHouseCreateNestedOneWithoutAdInput } from '../../ad-house/inputs/ad-house-create-nested-one-without-ad.input';
import { FileCreateNestedManyWithoutAdInput } from '../../file/inputs/file-create-nested-many-without-ad.input';
import { ListAdCreateNestedManyWithoutAdInput } from '../../list-ad/inputs/list-ad-create-nested-many-without-ad.input';
import { HideField } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';

@InputType()
export class AdCreateWithoutAdPromotionInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Float, {nullable:true})
    coords_latitude?: number;

    @Field(() => Float, {nullable:true})
    coords_longitude?: number;

    @Field(() => Int, {nullable:true})
    coords_radius?: number;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Int, {nullable:true})
    price_eurocent?: number;

    @Field(() => UserCreateNestedOneWithoutAdsInput, {nullable:true})
    user?: UserCreateNestedOneWithoutAdsInput;

    @Field(() => AdCategoryCreateNestedManyWithoutAdInput, {nullable:true})
    ad_categories?: AdCategoryCreateNestedManyWithoutAdInput;

    @Field(() => AdAutoCreateNestedOneWithoutAdInput, {nullable:true})
    ad_auto?: AdAutoCreateNestedOneWithoutAdInput;

    @Field(() => AdHouseCreateNestedOneWithoutAdInput, {nullable:true})
    ad_house?: AdHouseCreateNestedOneWithoutAdInput;

    @Field(() => FileCreateNestedManyWithoutAdInput, {nullable:true})
    files?: FileCreateNestedManyWithoutAdInput;

    @Field(() => ListAdCreateNestedManyWithoutAdInput, {nullable:true})
    ListAd?: ListAdCreateNestedManyWithoutAdInput;

    @Field(() => Boolean, {nullable:true})
    is_sold?: boolean;

    @HideField()
    moderation_flag?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.Min(0.0) @Validator.Max(5.0)
    price_rating?: Decimal;
}
