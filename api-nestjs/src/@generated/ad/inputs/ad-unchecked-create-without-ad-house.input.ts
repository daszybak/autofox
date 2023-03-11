import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { AdCategoryUncheckedCreateNestedManyWithoutAdInput } from '../../ad-category/inputs/ad-category-unchecked-create-nested-many-without-ad.input';
import { AdAutoUncheckedCreateNestedOneWithoutAdInput } from '../../ad-auto/inputs/ad-auto-unchecked-create-nested-one-without-ad.input';
import { FileUncheckedCreateNestedManyWithoutAdInput } from '../../file/inputs/file-unchecked-create-nested-many-without-ad.input';
import { ListAdUncheckedCreateNestedManyWithoutAdInput } from '../../list-ad/inputs/list-ad-unchecked-create-nested-many-without-ad.input';
import { HideField } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';
import { AdPromotionUncheckedCreateNestedManyWithoutAdInput } from '../../ad-promotion/inputs/ad-promotion-unchecked-create-nested-many-without-ad.input';

@InputType()
export class AdUncheckedCreateWithoutAd_houseInput {

    @Field(() => Int, {nullable:true})
    ad_id?: number;

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

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => AdCategoryUncheckedCreateNestedManyWithoutAdInput, {nullable:true})
    ad_categories?: AdCategoryUncheckedCreateNestedManyWithoutAdInput;

    @Field(() => AdAutoUncheckedCreateNestedOneWithoutAdInput, {nullable:true})
    ad_auto?: AdAutoUncheckedCreateNestedOneWithoutAdInput;

    @Field(() => FileUncheckedCreateNestedManyWithoutAdInput, {nullable:true})
    files?: FileUncheckedCreateNestedManyWithoutAdInput;

    @Field(() => ListAdUncheckedCreateNestedManyWithoutAdInput, {nullable:true})
    ListAd?: ListAdUncheckedCreateNestedManyWithoutAdInput;

    @Field(() => Boolean, {nullable:true})
    is_sold?: boolean;

    @HideField()
    moderation_flag?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    @Validator.Min(0.0) @Validator.Max(5.0)
    price_rating?: Decimal;

    @Field(() => AdPromotionUncheckedCreateNestedManyWithoutAdInput, {nullable:true})
    AdPromotion?: AdPromotionUncheckedCreateNestedManyWithoutAdInput;
}
