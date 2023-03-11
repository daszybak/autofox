import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionWhereUniqueInput } from './ad-promotion-where-unique.input';
import { Type } from 'class-transformer';
import { AdPromotionUpdateWithoutUserInput } from './ad-promotion-update-without-user.input';
import { AdPromotionCreateWithoutUserInput } from './ad-promotion-create-without-user.input';

@InputType()
export class AdPromotionUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => AdPromotionWhereUniqueInput, {nullable:false})
    @Type(() => AdPromotionWhereUniqueInput)
    where!: AdPromotionWhereUniqueInput;

    @Field(() => AdPromotionUpdateWithoutUserInput, {nullable:false})
    @Type(() => AdPromotionUpdateWithoutUserInput)
    update!: AdPromotionUpdateWithoutUserInput;

    @Field(() => AdPromotionCreateWithoutUserInput, {nullable:false})
    @Type(() => AdPromotionCreateWithoutUserInput)
    create!: AdPromotionCreateWithoutUserInput;
}
