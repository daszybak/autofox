import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateWithoutAdPromotionInput } from './ad-create-without-ad-promotion.input';
import { Type } from 'class-transformer';
import { AdCreateOrConnectWithoutAdPromotionInput } from './ad-create-or-connect-without-ad-promotion.input';
import { AdWhereUniqueInput } from './ad-where-unique.input';

@InputType()
export class AdCreateNestedOneWithoutAdPromotionInput {

    @Field(() => AdCreateWithoutAdPromotionInput, {nullable:true})
    @Type(() => AdCreateWithoutAdPromotionInput)
    create?: AdCreateWithoutAdPromotionInput;

    @Field(() => AdCreateOrConnectWithoutAdPromotionInput, {nullable:true})
    @Type(() => AdCreateOrConnectWithoutAdPromotionInput)
    connectOrCreate?: AdCreateOrConnectWithoutAdPromotionInput;

    @Field(() => AdWhereUniqueInput, {nullable:true})
    @Type(() => AdWhereUniqueInput)
    connect?: AdWhereUniqueInput;
}
