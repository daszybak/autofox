import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateWithoutAdPromotionInput } from './ad-create-without-ad-promotion.input';
import { Type } from 'class-transformer';
import { AdCreateOrConnectWithoutAdPromotionInput } from './ad-create-or-connect-without-ad-promotion.input';
import { AdUpsertWithoutAdPromotionInput } from './ad-upsert-without-ad-promotion.input';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { AdUpdateWithoutAdPromotionInput } from './ad-update-without-ad-promotion.input';

@InputType()
export class AdUpdateOneRequiredWithoutAdPromotionNestedInput {

    @Field(() => AdCreateWithoutAdPromotionInput, {nullable:true})
    @Type(() => AdCreateWithoutAdPromotionInput)
    create?: AdCreateWithoutAdPromotionInput;

    @Field(() => AdCreateOrConnectWithoutAdPromotionInput, {nullable:true})
    @Type(() => AdCreateOrConnectWithoutAdPromotionInput)
    connectOrCreate?: AdCreateOrConnectWithoutAdPromotionInput;

    @Field(() => AdUpsertWithoutAdPromotionInput, {nullable:true})
    @Type(() => AdUpsertWithoutAdPromotionInput)
    upsert?: AdUpsertWithoutAdPromotionInput;

    @Field(() => AdWhereUniqueInput, {nullable:true})
    @Type(() => AdWhereUniqueInput)
    connect?: AdWhereUniqueInput;

    @Field(() => AdUpdateWithoutAdPromotionInput, {nullable:true})
    @Type(() => AdUpdateWithoutAdPromotionInput)
    update?: AdUpdateWithoutAdPromotionInput;
}
