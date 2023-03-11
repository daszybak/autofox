import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateWithoutAd_houseInput } from './ad-create-without-ad-house.input';
import { Type } from 'class-transformer';
import { AdCreateOrConnectWithoutAd_houseInput } from './ad-create-or-connect-without-ad-house.input';
import { AdUpsertWithoutAd_houseInput } from './ad-upsert-without-ad-house.input';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { AdUpdateWithoutAd_houseInput } from './ad-update-without-ad-house.input';

@InputType()
export class AdUpdateOneRequiredWithoutAd_houseNestedInput {

    @Field(() => AdCreateWithoutAd_houseInput, {nullable:true})
    @Type(() => AdCreateWithoutAd_houseInput)
    create?: AdCreateWithoutAd_houseInput;

    @Field(() => AdCreateOrConnectWithoutAd_houseInput, {nullable:true})
    @Type(() => AdCreateOrConnectWithoutAd_houseInput)
    connectOrCreate?: AdCreateOrConnectWithoutAd_houseInput;

    @Field(() => AdUpsertWithoutAd_houseInput, {nullable:true})
    @Type(() => AdUpsertWithoutAd_houseInput)
    upsert?: AdUpsertWithoutAd_houseInput;

    @Field(() => AdWhereUniqueInput, {nullable:true})
    @Type(() => AdWhereUniqueInput)
    connect?: AdWhereUniqueInput;

    @Field(() => AdUpdateWithoutAd_houseInput, {nullable:true})
    @Type(() => AdUpdateWithoutAd_houseInput)
    update?: AdUpdateWithoutAd_houseInput;
}
