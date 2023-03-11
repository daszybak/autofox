import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutFuel_typeInput } from './ad-auto-create-without-fuel-type.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutFuel_typeInput } from './ad-auto-create-or-connect-without-fuel-type.input';
import { AdAutoUpsertWithWhereUniqueWithoutFuel_typeInput } from './ad-auto-upsert-with-where-unique-without-fuel-type.input';
import { AdAutoCreateManyFuel_typeInputEnvelope } from './ad-auto-create-many-fuel-type-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { AdAutoUpdateWithWhereUniqueWithoutFuel_typeInput } from './ad-auto-update-with-where-unique-without-fuel-type.input';
import { AdAutoUpdateManyWithWhereWithoutFuel_typeInput } from './ad-auto-update-many-with-where-without-fuel-type.input';
import { AdAutoScalarWhereInput } from './ad-auto-scalar-where.input';

@InputType()
export class AdAutoUpdateManyWithoutFuel_typeNestedInput {

    @Field(() => [AdAutoCreateWithoutFuel_typeInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutFuel_typeInput)
    create?: Array<AdAutoCreateWithoutFuel_typeInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutFuel_typeInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutFuel_typeInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutFuel_typeInput>;

    @Field(() => [AdAutoUpsertWithWhereUniqueWithoutFuel_typeInput], {nullable:true})
    @Type(() => AdAutoUpsertWithWhereUniqueWithoutFuel_typeInput)
    upsert?: Array<AdAutoUpsertWithWhereUniqueWithoutFuel_typeInput>;

    @Field(() => AdAutoCreateManyFuel_typeInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyFuel_typeInputEnvelope)
    createMany?: AdAutoCreateManyFuel_typeInputEnvelope;

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

    @Field(() => [AdAutoUpdateWithWhereUniqueWithoutFuel_typeInput], {nullable:true})
    @Type(() => AdAutoUpdateWithWhereUniqueWithoutFuel_typeInput)
    update?: Array<AdAutoUpdateWithWhereUniqueWithoutFuel_typeInput>;

    @Field(() => [AdAutoUpdateManyWithWhereWithoutFuel_typeInput], {nullable:true})
    @Type(() => AdAutoUpdateManyWithWhereWithoutFuel_typeInput)
    updateMany?: Array<AdAutoUpdateManyWithWhereWithoutFuel_typeInput>;

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    @Type(() => AdAutoScalarWhereInput)
    deleteMany?: Array<AdAutoScalarWhereInput>;
}
