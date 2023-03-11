import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionCreateWithoutAdInput } from './ad-promotion-create-without-ad.input';
import { Type } from 'class-transformer';
import { AdPromotionCreateOrConnectWithoutAdInput } from './ad-promotion-create-or-connect-without-ad.input';
import { AdPromotionUpsertWithWhereUniqueWithoutAdInput } from './ad-promotion-upsert-with-where-unique-without-ad.input';
import { AdPromotionCreateManyAdInputEnvelope } from './ad-promotion-create-many-ad-input-envelope.input';
import { AdPromotionWhereUniqueInput } from './ad-promotion-where-unique.input';
import { AdPromotionUpdateWithWhereUniqueWithoutAdInput } from './ad-promotion-update-with-where-unique-without-ad.input';
import { AdPromotionUpdateManyWithWhereWithoutAdInput } from './ad-promotion-update-many-with-where-without-ad.input';
import { AdPromotionScalarWhereInput } from './ad-promotion-scalar-where.input';

@InputType()
export class AdPromotionUpdateManyWithoutAdNestedInput {

    @Field(() => [AdPromotionCreateWithoutAdInput], {nullable:true})
    @Type(() => AdPromotionCreateWithoutAdInput)
    create?: Array<AdPromotionCreateWithoutAdInput>;

    @Field(() => [AdPromotionCreateOrConnectWithoutAdInput], {nullable:true})
    @Type(() => AdPromotionCreateOrConnectWithoutAdInput)
    connectOrCreate?: Array<AdPromotionCreateOrConnectWithoutAdInput>;

    @Field(() => [AdPromotionUpsertWithWhereUniqueWithoutAdInput], {nullable:true})
    @Type(() => AdPromotionUpsertWithWhereUniqueWithoutAdInput)
    upsert?: Array<AdPromotionUpsertWithWhereUniqueWithoutAdInput>;

    @Field(() => AdPromotionCreateManyAdInputEnvelope, {nullable:true})
    @Type(() => AdPromotionCreateManyAdInputEnvelope)
    createMany?: AdPromotionCreateManyAdInputEnvelope;

    @Field(() => [AdPromotionWhereUniqueInput], {nullable:true})
    @Type(() => AdPromotionWhereUniqueInput)
    set?: Array<AdPromotionWhereUniqueInput>;

    @Field(() => [AdPromotionWhereUniqueInput], {nullable:true})
    @Type(() => AdPromotionWhereUniqueInput)
    disconnect?: Array<AdPromotionWhereUniqueInput>;

    @Field(() => [AdPromotionWhereUniqueInput], {nullable:true})
    @Type(() => AdPromotionWhereUniqueInput)
    delete?: Array<AdPromotionWhereUniqueInput>;

    @Field(() => [AdPromotionWhereUniqueInput], {nullable:true})
    @Type(() => AdPromotionWhereUniqueInput)
    connect?: Array<AdPromotionWhereUniqueInput>;

    @Field(() => [AdPromotionUpdateWithWhereUniqueWithoutAdInput], {nullable:true})
    @Type(() => AdPromotionUpdateWithWhereUniqueWithoutAdInput)
    update?: Array<AdPromotionUpdateWithWhereUniqueWithoutAdInput>;

    @Field(() => [AdPromotionUpdateManyWithWhereWithoutAdInput], {nullable:true})
    @Type(() => AdPromotionUpdateManyWithWhereWithoutAdInput)
    updateMany?: Array<AdPromotionUpdateManyWithWhereWithoutAdInput>;

    @Field(() => [AdPromotionScalarWhereInput], {nullable:true})
    @Type(() => AdPromotionScalarWhereInput)
    deleteMany?: Array<AdPromotionScalarWhereInput>;
}
