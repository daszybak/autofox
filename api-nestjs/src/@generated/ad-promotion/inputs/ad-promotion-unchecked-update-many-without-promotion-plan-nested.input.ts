import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionCreateWithoutPromotion_planInput } from './ad-promotion-create-without-promotion-plan.input';
import { Type } from 'class-transformer';
import { AdPromotionCreateOrConnectWithoutPromotion_planInput } from './ad-promotion-create-or-connect-without-promotion-plan.input';
import { AdPromotionUpsertWithWhereUniqueWithoutPromotion_planInput } from './ad-promotion-upsert-with-where-unique-without-promotion-plan.input';
import { AdPromotionCreateManyPromotion_planInputEnvelope } from './ad-promotion-create-many-promotion-plan-input-envelope.input';
import { AdPromotionWhereUniqueInput } from './ad-promotion-where-unique.input';
import { AdPromotionUpdateWithWhereUniqueWithoutPromotion_planInput } from './ad-promotion-update-with-where-unique-without-promotion-plan.input';
import { AdPromotionUpdateManyWithWhereWithoutPromotion_planInput } from './ad-promotion-update-many-with-where-without-promotion-plan.input';
import { AdPromotionScalarWhereInput } from './ad-promotion-scalar-where.input';

@InputType()
export class AdPromotionUncheckedUpdateManyWithoutPromotion_planNestedInput {

    @Field(() => [AdPromotionCreateWithoutPromotion_planInput], {nullable:true})
    @Type(() => AdPromotionCreateWithoutPromotion_planInput)
    create?: Array<AdPromotionCreateWithoutPromotion_planInput>;

    @Field(() => [AdPromotionCreateOrConnectWithoutPromotion_planInput], {nullable:true})
    @Type(() => AdPromotionCreateOrConnectWithoutPromotion_planInput)
    connectOrCreate?: Array<AdPromotionCreateOrConnectWithoutPromotion_planInput>;

    @Field(() => [AdPromotionUpsertWithWhereUniqueWithoutPromotion_planInput], {nullable:true})
    @Type(() => AdPromotionUpsertWithWhereUniqueWithoutPromotion_planInput)
    upsert?: Array<AdPromotionUpsertWithWhereUniqueWithoutPromotion_planInput>;

    @Field(() => AdPromotionCreateManyPromotion_planInputEnvelope, {nullable:true})
    @Type(() => AdPromotionCreateManyPromotion_planInputEnvelope)
    createMany?: AdPromotionCreateManyPromotion_planInputEnvelope;

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

    @Field(() => [AdPromotionUpdateWithWhereUniqueWithoutPromotion_planInput], {nullable:true})
    @Type(() => AdPromotionUpdateWithWhereUniqueWithoutPromotion_planInput)
    update?: Array<AdPromotionUpdateWithWhereUniqueWithoutPromotion_planInput>;

    @Field(() => [AdPromotionUpdateManyWithWhereWithoutPromotion_planInput], {nullable:true})
    @Type(() => AdPromotionUpdateManyWithWhereWithoutPromotion_planInput)
    updateMany?: Array<AdPromotionUpdateManyWithWhereWithoutPromotion_planInput>;

    @Field(() => [AdPromotionScalarWhereInput], {nullable:true})
    @Type(() => AdPromotionScalarWhereInput)
    deleteMany?: Array<AdPromotionScalarWhereInput>;
}
