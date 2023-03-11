import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionCreateManyAdInput } from './ad-promotion-create-many-ad.input';
import { Type } from 'class-transformer';

@InputType()
export class AdPromotionCreateManyAdInputEnvelope {

    @Field(() => [AdPromotionCreateManyAdInput], {nullable:false})
    @Type(() => AdPromotionCreateManyAdInput)
    data!: Array<AdPromotionCreateManyAdInput>;
}
