import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutTransmission_typeInput } from './ad-auto-create-without-transmission-type.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutTransmission_typeInput } from './ad-auto-create-or-connect-without-transmission-type.input';
import { AdAutoUpsertWithWhereUniqueWithoutTransmission_typeInput } from './ad-auto-upsert-with-where-unique-without-transmission-type.input';
import { AdAutoCreateManyTransmission_typeInputEnvelope } from './ad-auto-create-many-transmission-type-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { AdAutoUpdateWithWhereUniqueWithoutTransmission_typeInput } from './ad-auto-update-with-where-unique-without-transmission-type.input';
import { AdAutoUpdateManyWithWhereWithoutTransmission_typeInput } from './ad-auto-update-many-with-where-without-transmission-type.input';
import { AdAutoScalarWhereInput } from './ad-auto-scalar-where.input';

@InputType()
export class AdAutoUpdateManyWithoutTransmission_typeNestedInput {

    @Field(() => [AdAutoCreateWithoutTransmission_typeInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutTransmission_typeInput)
    create?: Array<AdAutoCreateWithoutTransmission_typeInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutTransmission_typeInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutTransmission_typeInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutTransmission_typeInput>;

    @Field(() => [AdAutoUpsertWithWhereUniqueWithoutTransmission_typeInput], {nullable:true})
    @Type(() => AdAutoUpsertWithWhereUniqueWithoutTransmission_typeInput)
    upsert?: Array<AdAutoUpsertWithWhereUniqueWithoutTransmission_typeInput>;

    @Field(() => AdAutoCreateManyTransmission_typeInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyTransmission_typeInputEnvelope)
    createMany?: AdAutoCreateManyTransmission_typeInputEnvelope;

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

    @Field(() => [AdAutoUpdateWithWhereUniqueWithoutTransmission_typeInput], {nullable:true})
    @Type(() => AdAutoUpdateWithWhereUniqueWithoutTransmission_typeInput)
    update?: Array<AdAutoUpdateWithWhereUniqueWithoutTransmission_typeInput>;

    @Field(() => [AdAutoUpdateManyWithWhereWithoutTransmission_typeInput], {nullable:true})
    @Type(() => AdAutoUpdateManyWithWhereWithoutTransmission_typeInput)
    updateMany?: Array<AdAutoUpdateManyWithWhereWithoutTransmission_typeInput>;

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    @Type(() => AdAutoScalarWhereInput)
    deleteMany?: Array<AdAutoScalarWhereInput>;
}
