import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdUpdateWithoutAd_categoriesInput } from './ad-update-without-ad-categories.input';
import { Type } from 'class-transformer';
import { AdCreateWithoutAd_categoriesInput } from './ad-create-without-ad-categories.input';

@InputType()
export class AdUpsertWithoutAd_categoriesInput {

    @Field(() => AdUpdateWithoutAd_categoriesInput, {nullable:false})
    @Type(() => AdUpdateWithoutAd_categoriesInput)
    update!: AdUpdateWithoutAd_categoriesInput;

    @Field(() => AdCreateWithoutAd_categoriesInput, {nullable:false})
    @Type(() => AdCreateWithoutAd_categoriesInput)
    create!: AdCreateWithoutAd_categoriesInput;
}
