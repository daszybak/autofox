import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateWithoutPromotion_regionInput } from './promotion-plan-create-without-promotion-region.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateOrConnectWithoutPromotion_regionInput } from './promotion-plan-create-or-connect-without-promotion-region.input';
import { PromotionPlanUpsertWithWhereUniqueWithoutPromotion_regionInput } from './promotion-plan-upsert-with-where-unique-without-promotion-region.input';
import { PromotionPlanCreateManyPromotion_regionInputEnvelope } from './promotion-plan-create-many-promotion-region-input-envelope.input';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';
import { PromotionPlanUpdateWithWhereUniqueWithoutPromotion_regionInput } from './promotion-plan-update-with-where-unique-without-promotion-region.input';
import { PromotionPlanUpdateManyWithWhereWithoutPromotion_regionInput } from './promotion-plan-update-many-with-where-without-promotion-region.input';
import { PromotionPlanScalarWhereInput } from './promotion-plan-scalar-where.input';

@InputType()
export class PromotionPlanUpdateManyWithoutPromotion_regionNestedInput {

    @Field(() => [PromotionPlanCreateWithoutPromotion_regionInput], {nullable:true})
    @Type(() => PromotionPlanCreateWithoutPromotion_regionInput)
    create?: Array<PromotionPlanCreateWithoutPromotion_regionInput>;

    @Field(() => [PromotionPlanCreateOrConnectWithoutPromotion_regionInput], {nullable:true})
    @Type(() => PromotionPlanCreateOrConnectWithoutPromotion_regionInput)
    connectOrCreate?: Array<PromotionPlanCreateOrConnectWithoutPromotion_regionInput>;

    @Field(() => [PromotionPlanUpsertWithWhereUniqueWithoutPromotion_regionInput], {nullable:true})
    @Type(() => PromotionPlanUpsertWithWhereUniqueWithoutPromotion_regionInput)
    upsert?: Array<PromotionPlanUpsertWithWhereUniqueWithoutPromotion_regionInput>;

    @Field(() => PromotionPlanCreateManyPromotion_regionInputEnvelope, {nullable:true})
    @Type(() => PromotionPlanCreateManyPromotion_regionInputEnvelope)
    createMany?: PromotionPlanCreateManyPromotion_regionInputEnvelope;

    @Field(() => [PromotionPlanWhereUniqueInput], {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    set?: Array<PromotionPlanWhereUniqueInput>;

    @Field(() => [PromotionPlanWhereUniqueInput], {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    disconnect?: Array<PromotionPlanWhereUniqueInput>;

    @Field(() => [PromotionPlanWhereUniqueInput], {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    delete?: Array<PromotionPlanWhereUniqueInput>;

    @Field(() => [PromotionPlanWhereUniqueInput], {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    connect?: Array<PromotionPlanWhereUniqueInput>;

    @Field(() => [PromotionPlanUpdateWithWhereUniqueWithoutPromotion_regionInput], {nullable:true})
    @Type(() => PromotionPlanUpdateWithWhereUniqueWithoutPromotion_regionInput)
    update?: Array<PromotionPlanUpdateWithWhereUniqueWithoutPromotion_regionInput>;

    @Field(() => [PromotionPlanUpdateManyWithWhereWithoutPromotion_regionInput], {nullable:true})
    @Type(() => PromotionPlanUpdateManyWithWhereWithoutPromotion_regionInput)
    updateMany?: Array<PromotionPlanUpdateManyWithWhereWithoutPromotion_regionInput>;

    @Field(() => [PromotionPlanScalarWhereInput], {nullable:true})
    @Type(() => PromotionPlanScalarWhereInput)
    deleteMany?: Array<PromotionPlanScalarWhereInput>;
}
