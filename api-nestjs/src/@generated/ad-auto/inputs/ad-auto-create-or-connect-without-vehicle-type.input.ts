import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoCreateWithoutVehicle_typeInput } from './ad-auto-create-without-vehicle-type.input';

@InputType()
export class AdAutoCreateOrConnectWithoutVehicle_typeInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoCreateWithoutVehicle_typeInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutVehicle_typeInput)
    create!: AdAutoCreateWithoutVehicle_typeInput;
}
