import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutVariantInput } from './ad-auto-create-without-variant.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutVariantInput } from './ad-auto-create-or-connect-without-variant.input';
import { AdAutoUpsertWithWhereUniqueWithoutVariantInput } from './ad-auto-upsert-with-where-unique-without-variant.input';
import { AdAutoCreateManyVariantInputEnvelope } from './ad-auto-create-many-variant-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { AdAutoUpdateWithWhereUniqueWithoutVariantInput } from './ad-auto-update-with-where-unique-without-variant.input';
import { AdAutoUpdateManyWithWhereWithoutVariantInput } from './ad-auto-update-many-with-where-without-variant.input';
import { AdAutoScalarWhereInput } from './ad-auto-scalar-where.input';

@InputType()
export class AdAutoUpdateManyWithoutVariantNestedInput {

    @Field(() => [AdAutoCreateWithoutVariantInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutVariantInput)
    create?: Array<AdAutoCreateWithoutVariantInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutVariantInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutVariantInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutVariantInput>;

    @Field(() => [AdAutoUpsertWithWhereUniqueWithoutVariantInput], {nullable:true})
    @Type(() => AdAutoUpsertWithWhereUniqueWithoutVariantInput)
    upsert?: Array<AdAutoUpsertWithWhereUniqueWithoutVariantInput>;

    @Field(() => AdAutoCreateManyVariantInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyVariantInputEnvelope)
    createMany?: AdAutoCreateManyVariantInputEnvelope;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    set?: Array<AdAutoWhereUniqueInput>;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    disconnect?: Array<AdAutoWhereUniqueInput>;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    delete?: Array<AdAutoWhereUniqueInput>;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: Array<AdAutoWhereUniqueInput>;

    @Field(() => [AdAutoUpdateWithWhereUniqueWithoutVariantInput], {nullable:true})
    @Type(() => AdAutoUpdateWithWhereUniqueWithoutVariantInput)
    update?: Array<AdAutoUpdateWithWhereUniqueWithoutVariantInput>;

    @Field(() => [AdAutoUpdateManyWithWhereWithoutVariantInput], {nullable:true})
    @Type(() => AdAutoUpdateManyWithWhereWithoutVariantInput)
    updateMany?: Array<AdAutoUpdateManyWithWhereWithoutVariantInput>;

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    @Type(() => AdAutoScalarWhereInput)
    deleteMany?: Array<AdAutoScalarWhereInput>;
}
