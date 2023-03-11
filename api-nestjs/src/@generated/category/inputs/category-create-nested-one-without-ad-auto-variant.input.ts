import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoVariantInput } from './category-create-without-ad-auto-variant.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoVariantInput } from './category-create-or-connect-without-ad-auto-variant.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutAdAutoVariantInput {

    @Field(() => CategoryCreateWithoutAdAutoVariantInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoVariantInput)
    create?: CategoryCreateWithoutAdAutoVariantInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoVariantInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoVariantInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoVariantInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
