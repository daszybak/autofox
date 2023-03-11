import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateWithoutPromotion_regionInput } from './promotion-plan-create-without-promotion-region.input';
import { Type } from 'class-transformer';
import { PromotionPlanCreateOrConnectWithoutPromotion_regionInput } from './promotion-plan-create-or-connect-without-promotion-region.input';
import { PromotionPlanCreateManyPromotion_regionInputEnvelope } from './promotion-plan-create-many-promotion-region-input-envelope.input';
import { PromotionPlanWhereUniqueInput } from './promotion-plan-where-unique.input';

@InputType()
export class PromotionPlanUncheckedCreateNestedManyWithoutPromotion_regionInput {

    @Field(() => [PromotionPlanCreateWithoutPromotion_regionInput], {nullable:true})
    @Type(() => PromotionPlanCreateWithoutPromotion_regionInput)
    create?: Array<PromotionPlanCreateWithoutPromotion_regionInput>;

    @Field(() => [PromotionPlanCreateOrConnectWithoutPromotion_regionInput], {nullable:true})
    @Type(() => PromotionPlanCreateOrConnectWithoutPromotion_regionInput)
    connectOrCreate?: Array<PromotionPlanCreateOrConnectWithoutPromotion_regionInput>;

    @Field(() => PromotionPlanCreateManyPromotion_regionInputEnvelope, {nullable:true})
    @Type(() => PromotionPlanCreateManyPromotion_regionInputEnvelope)
    createMany?: PromotionPlanCreateManyPromotion_regionInputEnvelope;

    @Field(() => [PromotionPlanWhereUniqueInput], {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    connect?: Array<PromotionPlanWhereUniqueInput>;
}
