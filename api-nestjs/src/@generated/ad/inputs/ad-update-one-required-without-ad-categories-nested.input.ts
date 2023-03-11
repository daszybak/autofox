import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateWithoutAd_categoriesInput } from './ad-create-without-ad-categories.input';
import { Type } from 'class-transformer';
import { AdCreateOrConnectWithoutAd_categoriesInput } from './ad-create-or-connect-without-ad-categories.input';
import { AdUpsertWithoutAd_categoriesInput } from './ad-upsert-without-ad-categories.input';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { AdUpdateWithoutAd_categoriesInput } from './ad-update-without-ad-categories.input';

@InputType()
export class AdUpdateOneRequiredWithoutAd_categoriesNestedInput {

    @Field(() => AdCreateWithoutAd_categoriesInput, {nullable:true})
    @Type(() => AdCreateWithoutAd_categoriesInput)
    create?: AdCreateWithoutAd_categoriesInput;

    @Field(() => AdCreateOrConnectWithoutAd_categoriesInput, {nullable:true})
    @Type(() => AdCreateOrConnectWithoutAd_categoriesInput)
    connectOrCreate?: AdCreateOrConnectWithoutAd_categoriesInput;

    @Field(() => AdUpsertWithoutAd_categoriesInput, {nullable:true})
    @Type(() => AdUpsertWithoutAd_categoriesInput)
    upsert?: AdUpsertWithoutAd_categoriesInput;

    @Field(() => AdWhereUniqueInput, {nullable:true})
    @Type(() => AdWhereUniqueInput)
    connect?: AdWhereUniqueInput;

    @Field(() => AdUpdateWithoutAd_categoriesInput, {nullable:true})
    @Type(() => AdUpdateWithoutAd_categoriesInput)
    update?: AdUpdateWithoutAd_categoriesInput;
}
