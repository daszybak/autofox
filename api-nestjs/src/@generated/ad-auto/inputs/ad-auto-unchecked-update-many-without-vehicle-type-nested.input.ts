import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutVehicle_typeInput } from './ad-auto-create-without-vehicle-type.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutVehicle_typeInput } from './ad-auto-create-or-connect-without-vehicle-type.input';
import { AdAutoUpsertWithWhereUniqueWithoutVehicle_typeInput } from './ad-auto-upsert-with-where-unique-without-vehicle-type.input';
import { AdAutoCreateManyVehicle_typeInputEnvelope } from './ad-auto-create-many-vehicle-type-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { AdAutoUpdateWithWhereUniqueWithoutVehicle_typeInput } from './ad-auto-update-with-where-unique-without-vehicle-type.input';
import { AdAutoUpdateManyWithWhereWithoutVehicle_typeInput } from './ad-auto-update-many-with-where-without-vehicle-type.input';
import { AdAutoScalarWhereInput } from './ad-auto-scalar-where.input';

@InputType()
export class AdAutoUncheckedUpdateManyWithoutVehicle_typeNestedInput {

    @Field(() => [AdAutoCreateWithoutVehicle_typeInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutVehicle_typeInput)
    create?: Array<AdAutoCreateWithoutVehicle_typeInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutVehicle_typeInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutVehicle_typeInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutVehicle_typeInput>;

    @Field(() => [AdAutoUpsertWithWhereUniqueWithoutVehicle_typeInput], {nullable:true})
    @Type(() => AdAutoUpsertWithWhereUniqueWithoutVehicle_typeInput)
    upsert?: Array<AdAutoUpsertWithWhereUniqueWithoutVehicle_typeInput>;

    @Field(() => AdAutoCreateManyVehicle_typeInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyVehicle_typeInputEnvelope)
    createMany?: AdAutoCreateManyVehicle_typeInputEnvelope;

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

    @Field(() => [AdAutoUpdateWithWhereUniqueWithoutVehicle_typeInput], {nullable:true})
    @Type(() => AdAutoUpdateWithWhereUniqueWithoutVehicle_typeInput)
    update?: Array<AdAutoUpdateWithWhereUniqueWithoutVehicle_typeInput>;

    @Field(() => [AdAutoUpdateManyWithWhereWithoutVehicle_typeInput], {nullable:true})
    @Type(() => AdAutoUpdateManyWithWhereWithoutVehicle_typeInput)
    updateMany?: Array<AdAutoUpdateManyWithWhereWithoutVehicle_typeInput>;

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    @Type(() => AdAutoScalarWhereInput)
    deleteMany?: Array<AdAutoScalarWhereInput>;
}
