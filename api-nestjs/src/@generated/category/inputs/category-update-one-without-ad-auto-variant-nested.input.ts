import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoVariantInput } from './category-create-without-ad-auto-variant.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoVariantInput } from './category-create-or-connect-without-ad-auto-variant.input';
import { CategoryUpsertWithoutAdAutoVariantInput } from './category-upsert-without-ad-auto-variant.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutAdAutoVariantInput } from './category-update-without-ad-auto-variant.input';

@InputType()
export class CategoryUpdateOneWithoutAdAutoVariantNestedInput {

    @Field(() => CategoryCreateWithoutAdAutoVariantInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoVariantInput)
    create?: CategoryCreateWithoutAdAutoVariantInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoVariantInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoVariantInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoVariantInput;

    @Field(() => CategoryUpsertWithoutAdAutoVariantInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutAdAutoVariantInput)
    upsert?: CategoryUpsertWithoutAdAutoVariantInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutAdAutoVariantInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutAdAutoVariantInput)
    update?: CategoryUpdateWithoutAdAutoVariantInput;
}
