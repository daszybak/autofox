import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateManyVehicle_typeInput } from './ad-auto-create-many-vehicle-type.input';
import { Type } from 'class-transformer';

@InputType()
export class AdAutoCreateManyVehicle_typeInputEnvelope {

    @Field(() => [AdAutoCreateManyVehicle_typeInput], {nullable:false})
    @Type(() => AdAutoCreateManyVehicle_typeInput)
    data!: Array<AdAutoCreateManyVehicle_typeInput>;
}
