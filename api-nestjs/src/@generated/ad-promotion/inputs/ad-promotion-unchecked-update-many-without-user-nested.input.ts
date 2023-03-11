import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionCreateWithoutUserInput } from './ad-promotion-create-without-user.input';
import { Type } from 'class-transformer';
import { AdPromotionCreateOrConnectWithoutUserInput } from './ad-promotion-create-or-connect-without-user.input';
import { AdPromotionUpsertWithWhereUniqueWithoutUserInput } from './ad-promotion-upsert-with-where-unique-without-user.input';
import { AdPromotionCreateManyUserInputEnvelope } from './ad-promotion-create-many-user-input-envelope.input';
import { AdPromotionWhereUniqueInput } from './ad-promotion-where-unique.input';
import { AdPromotionUpdateWithWhereUniqueWithoutUserInput } from './ad-promotion-update-with-where-unique-without-user.input';
import { AdPromotionUpdateManyWithWhereWithoutUserInput } from './ad-promotion-update-many-with-where-without-user.input';
import { AdPromotionScalarWhereInput } from './ad-promotion-scalar-where.input';

@InputType()
export class AdPromotionUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [AdPromotionCreateWithoutUserInput], {nullable:true})
    @Type(() => AdPromotionCreateWithoutUserInput)
    create?: Array<AdPromotionCreateWithoutUserInput>;

    @Field(() => [AdPromotionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AdPromotionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AdPromotionCreateOrConnectWithoutUserInput>;

    @Field(() => [AdPromotionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AdPromotionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AdPromotionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AdPromotionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AdPromotionCreateManyUserInputEnvelope)
    createMany?: AdPromotionCreateManyUserInputEnvelope;

    @Field(() => [AdPromotionWhereUniqueInput], {nullable:true})
    @Type(() => AdPromotionWhereUniqueInput)
    set?: Array<AdPromotionWhereUniqueInput>;

    @Field(() => [AdPromotionWhereUniqueInput], {nullable:true})
    @Type(() => AdPromotionWhereUniqueInput)
    disconnect?: Array<AdPromotionWhereUniqueInput>;

    @Field(() => [AdPromotionWhereUniqueInput], {nullable:true})
    @Type(() => AdPromotionWhereUniqueInput)
    delete?: Array<AdPromotionWhereUniqueInput>;

    @Field(() => [AdPromotionWhereUniqueInput], {nullable:true})
    @Type(() => AdPromotionWhereUniqueInput)
    connect?: Array<AdPromotionWhereUniqueInput>;

    @Field(() => [AdPromotionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AdPromotionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AdPromotionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AdPromotionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AdPromotionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AdPromotionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AdPromotionScalarWhereInput], {nullable:true})
    @Type(() => AdPromotionScalarWhereInput)
    deleteMany?: Array<AdPromotionScalarWhereInput>;
}
