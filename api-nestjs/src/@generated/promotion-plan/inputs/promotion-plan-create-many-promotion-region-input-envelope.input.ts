import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateManyPromotion_regionInput } from './promotion-plan-create-many-promotion-region.input';
import { Type } from 'class-transformer';

@InputType()
export class PromotionPlanCreateManyPromotion_regionInputEnvelope {

    @Field(() => [PromotionPlanCreateManyPromotion_regionInput], {nullable:false})
    @Type(() => PromotionPlanCreateManyPromotion_regionInput)
    data!: Array<PromotionPlanCreateManyPromotion_regionInput>;
}
