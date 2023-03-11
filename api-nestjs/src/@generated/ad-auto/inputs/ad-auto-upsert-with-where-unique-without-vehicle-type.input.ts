import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutVehicle_typeInput } from './ad-auto-update-without-vehicle-type.input';
import { AdAutoCreateWithoutVehicle_typeInput } from './ad-auto-create-without-vehicle-type.input';

@InputType()
export class AdAutoUpsertWithWhereUniqueWithoutVehicle_typeInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutVehicle_typeInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutVehicle_typeInput)
    update!: AdAutoUpdateWithoutVehicle_typeInput;

    @Field(() => AdAutoCreateWithoutVehicle_typeInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutVehicle_typeInput)
    create!: AdAutoCreateWithoutVehicle_typeInput;
}
