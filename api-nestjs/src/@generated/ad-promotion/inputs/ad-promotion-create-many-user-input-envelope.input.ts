import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionCreateManyUserInput } from './ad-promotion-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AdPromotionCreateManyUserInputEnvelope {

    @Field(() => [AdPromotionCreateManyUserInput], {nullable:false})
    @Type(() => AdPromotionCreateManyUserInput)
    data!: Array<AdPromotionCreateManyUserInput>;
}
