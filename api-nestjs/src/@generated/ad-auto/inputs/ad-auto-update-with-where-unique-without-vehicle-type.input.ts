import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutVehicle_typeInput } from './ad-auto-update-without-vehicle-type.input';

@InputType()
export class AdAutoUpdateWithWhereUniqueWithoutVehicle_typeInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutVehicle_typeInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutVehicle_typeInput)
    data!: AdAutoUpdateWithoutVehicle_typeInput;
}
