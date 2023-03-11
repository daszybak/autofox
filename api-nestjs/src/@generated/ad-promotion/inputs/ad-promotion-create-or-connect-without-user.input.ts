import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionWhereUniqueInput } from './ad-promotion-where-unique.input';
import { Type } from 'class-transformer';
import { AdPromotionCreateWithoutUserInput } from './ad-promotion-create-without-user.input';

@InputType()
export class AdPromotionCreateOrConnectWithoutUserInput {

    @Field(() => AdPromotionWhereUniqueInput, {nullable:false})
    @Type(() => AdPromotionWhereUniqueInput)
    where!: AdPromotionWhereUniqueInput;

    @Field(() => AdPromotionCreateWithoutUserInput, {nullable:false})
    @Type(() => AdPromotionCreateWithoutUserInput)
    create!: AdPromotionCreateWithoutUserInput;
}
