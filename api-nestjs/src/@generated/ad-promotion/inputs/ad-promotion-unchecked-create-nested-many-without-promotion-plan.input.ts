import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionCreateWithoutPromotion_planInput } from './ad-promotion-create-without-promotion-plan.input';
import { Type } from 'class-transformer';
import { AdPromotionCreateOrConnectWithoutPromotion_planInput } from './ad-promotion-create-or-connect-without-promotion-plan.input';
import { AdPromotionCreateManyPromotion_planInputEnvelope } from './ad-promotion-create-many-promotion-plan-input-envelope.input';
import { AdPromotionWhereUniqueInput } from './ad-promotion-where-unique.input';

@InputType()
export class AdPromotionUncheckedCreateNestedManyWithoutPromotion_planInput {

    @Field(() => [AdPromotionCreateWithoutPromotion_planInput], {nullable:true})
    @Type(() => AdPromotionCreateWithoutPromotion_planInput)
    create?: Array<AdPromotionCreateWithoutPromotion_planInput>;

    @Field(() => [AdPromotionCreateOrConnectWithoutPromotion_planInput], {nullable:true})
    @Type(() => AdPromotionCreateOrConnectWithoutPromotion_planInput)
    connectOrCreate?: Array<AdPromotionCreateOrConnectWithoutPromotion_planInput>;

    @Field(() => AdPromotionCreateManyPromotion_planInputEnvelope, {nullable:true})
    @Type(() => AdPromotionCreateManyPromotion_planInputEnvelope)
    createMany?: AdPromotionCreateManyPromotion_planInputEnvelope;

    @Field(() => [AdPromotionWhereUniqueInput], {nullable:true})
    @Type(() => AdPromotionWhereUniqueInput)
    connect?: Array<AdPromotionWhereUniqueInput>;
}
