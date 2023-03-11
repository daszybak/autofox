import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { Type } from 'class-transformer';
import { AdCreateWithoutAdPromotionInput } from './ad-create-without-ad-promotion.input';

@InputType()
export class AdCreateOrConnectWithoutAdPromotionInput {

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: AdWhereUniqueInput;

    @Field(() => AdCreateWithoutAdPromotionInput, {nullable:false})
    @Type(() => AdCreateWithoutAdPromotionInput)
    create!: AdCreateWithoutAdPromotionInput;
}
