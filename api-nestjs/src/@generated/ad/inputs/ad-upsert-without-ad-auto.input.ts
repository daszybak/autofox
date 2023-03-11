import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdUpdateWithoutAd_autoInput } from './ad-update-without-ad-auto.input';
import { Type } from 'class-transformer';
import { AdCreateWithoutAd_autoInput } from './ad-create-without-ad-auto.input';

@InputType()
export class AdUpsertWithoutAd_autoInput {

    @Field(() => AdUpdateWithoutAd_autoInput, {nullable:false})
    @Type(() => AdUpdateWithoutAd_autoInput)
    update!: AdUpdateWithoutAd_autoInput;

    @Field(() => AdCreateWithoutAd_autoInput, {nullable:false})
    @Type(() => AdCreateWithoutAd_autoInput)
    create!: AdCreateWithoutAd_autoInput;
}
