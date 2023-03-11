import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdUpdateWithoutAd_houseInput } from './ad-update-without-ad-house.input';
import { Type } from 'class-transformer';
import { AdCreateWithoutAd_houseInput } from './ad-create-without-ad-house.input';

@InputType()
export class AdUpsertWithoutAd_houseInput {

    @Field(() => AdUpdateWithoutAd_houseInput, {nullable:false})
    @Type(() => AdUpdateWithoutAd_houseInput)
    update!: AdUpdateWithoutAd_houseInput;

    @Field(() => AdCreateWithoutAd_houseInput, {nullable:false})
    @Type(() => AdCreateWithoutAd_houseInput)
    create!: AdCreateWithoutAd_houseInput;
}
