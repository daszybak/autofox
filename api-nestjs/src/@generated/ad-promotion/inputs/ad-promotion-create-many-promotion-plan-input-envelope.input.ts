import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionCreateManyPromotion_planInput } from './ad-promotion-create-many-promotion-plan.input';
import { Type } from 'class-transformer';

@InputType()
export class AdPromotionCreateManyPromotion_planInputEnvelope {

    @Field(() => [AdPromotionCreateManyPromotion_planInput], {nullable:false})
    @Type(() => AdPromotionCreateManyPromotion_planInput)
    data!: Array<AdPromotionCreateManyPromotion_planInput>;
}
