import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionCreateWithoutAdInput } from './ad-promotion-create-without-ad.input';
import { Type } from 'class-transformer';
import { AdPromotionCreateOrConnectWithoutAdInput } from './ad-promotion-create-or-connect-without-ad.input';
import { AdPromotionCreateManyAdInputEnvelope } from './ad-promotion-create-many-ad-input-envelope.input';
import { AdPromotionWhereUniqueInput } from './ad-promotion-where-unique.input';

@InputType()
export class AdPromotionCreateNestedManyWithoutAdInput {

    @Field(() => [AdPromotionCreateWithoutAdInput], {nullable:true})
    @Type(() => AdPromotionCreateWithoutAdInput)
    create?: Array<AdPromotionCreateWithoutAdInput>;

    @Field(() => [AdPromotionCreateOrConnectWithoutAdInput], {nullable:true})
    @Type(() => AdPromotionCreateOrConnectWithoutAdInput)
    connectOrCreate?: Array<AdPromotionCreateOrConnectWithoutAdInput>;

    @Field(() => AdPromotionCreateManyAdInputEnvelope, {nullable:true})
    @Type(() => AdPromotionCreateManyAdInputEnvelope)
    createMany?: AdPromotionCreateManyAdInputEnvelope;

    @Field(() => [AdPromotionWhereUniqueInput], {nullable:true})
    @Type(() => AdPromotionWhereUniqueInput)
    connect?: Array<AdPromotionWhereUniqueInput>;
}
