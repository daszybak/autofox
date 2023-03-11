import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutTransmission_typeInput } from './ad-auto-create-without-transmission-type.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutTransmission_typeInput } from './ad-auto-create-or-connect-without-transmission-type.input';
import { AdAutoCreateManyTransmission_typeInputEnvelope } from './ad-auto-create-many-transmission-type-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';

@InputType()
export class AdAutoUncheckedCreateNestedManyWithoutTransmission_typeInput {

    @Field(() => [AdAutoCreateWithoutTransmission_typeInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutTransmission_typeInput)
    create?: Array<AdAutoCreateWithoutTransmission_typeInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutTransmission_typeInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutTransmission_typeInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutTransmission_typeInput>;

    @Field(() => AdAutoCreateManyTransmission_typeInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyTransmission_typeInputEnvelope)
    createMany?: AdAutoCreateManyTransmission_typeInputEnvelope;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: Array<AdAutoWhereUniqueInput>;
}
