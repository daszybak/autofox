import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionCreateWithoutUserInput } from './ad-promotion-create-without-user.input';
import { Type } from 'class-transformer';
import { AdPromotionCreateOrConnectWithoutUserInput } from './ad-promotion-create-or-connect-without-user.input';
import { AdPromotionCreateManyUserInputEnvelope } from './ad-promotion-create-many-user-input-envelope.input';
import { AdPromotionWhereUniqueInput } from './ad-promotion-where-unique.input';

@InputType()
export class AdPromotionCreateNestedManyWithoutUserInput {

    @Field(() => [AdPromotionCreateWithoutUserInput], {nullable:true})
    @Type(() => AdPromotionCreateWithoutUserInput)
    create?: Array<AdPromotionCreateWithoutUserInput>;

    @Field(() => [AdPromotionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AdPromotionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AdPromotionCreateOrConnectWithoutUserInput>;

    @Field(() => AdPromotionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AdPromotionCreateManyUserInputEnvelope)
    createMany?: AdPromotionCreateManyUserInputEnvelope;

    @Field(() => [AdPromotionWhereUniqueInput], {nullable:true})
    @Type(() => AdPromotionWhereUniqueInput)
    connect?: Array<AdPromotionWhereUniqueInput>;
}
