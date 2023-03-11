import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutVehicle_typeInput } from './ad-auto-create-without-vehicle-type.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutVehicle_typeInput } from './ad-auto-create-or-connect-without-vehicle-type.input';
import { AdAutoCreateManyVehicle_typeInputEnvelope } from './ad-auto-create-many-vehicle-type-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';

@InputType()
export class AdAutoUncheckedCreateNestedManyWithoutVehicle_typeInput {

    @Field(() => [AdAutoCreateWithoutVehicle_typeInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutVehicle_typeInput)
    create?: Array<AdAutoCreateWithoutVehicle_typeInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutVehicle_typeInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutVehicle_typeInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutVehicle_typeInput>;

    @Field(() => AdAutoCreateManyVehicle_typeInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyVehicle_typeInputEnvelope)
    createMany?: AdAutoCreateManyVehicle_typeInputEnvelope;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: Array<AdAutoWhereUniqueInput>;
}
