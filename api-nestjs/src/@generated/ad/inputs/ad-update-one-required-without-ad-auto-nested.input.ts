import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateWithoutAd_autoInput } from './ad-create-without-ad-auto.input';
import { Type } from 'class-transformer';
import { AdCreateOrConnectWithoutAd_autoInput } from './ad-create-or-connect-without-ad-auto.input';
import { AdUpsertWithoutAd_autoInput } from './ad-upsert-without-ad-auto.input';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { AdUpdateWithoutAd_autoInput } from './ad-update-without-ad-auto.input';

@InputType()
export class AdUpdateOneRequiredWithoutAd_autoNestedInput {

    @Field(() => AdCreateWithoutAd_autoInput, {nullable:true})
    @Type(() => AdCreateWithoutAd_autoInput)
    create?: AdCreateWithoutAd_autoInput;

    @Field(() => AdCreateOrConnectWithoutAd_autoInput, {nullable:true})
    @Type(() => AdCreateOrConnectWithoutAd_autoInput)
    connectOrCreate?: AdCreateOrConnectWithoutAd_autoInput;

    @Field(() => AdUpsertWithoutAd_autoInput, {nullable:true})
    @Type(() => AdUpsertWithoutAd_autoInput)
    upsert?: AdUpsertWithoutAd_autoInput;

    @Field(() => AdWhereUniqueInput, {nullable:true})
    @Type(() => AdWhereUniqueInput)
    connect?: AdWhereUniqueInput;

    @Field(() => AdUpdateWithoutAd_autoInput, {nullable:true})
    @Type(() => AdUpdateWithoutAd_autoInput)
    update?: AdUpdateWithoutAd_autoInput;
}
