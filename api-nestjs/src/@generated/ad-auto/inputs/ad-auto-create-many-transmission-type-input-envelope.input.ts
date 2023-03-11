import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateManyTransmission_typeInput } from './ad-auto-create-many-transmission-type.input';
import { Type } from 'class-transformer';

@InputType()
export class AdAutoCreateManyTransmission_typeInputEnvelope {

    @Field(() => [AdAutoCreateManyTransmission_typeInput], {nullable:false})
    @Type(() => AdAutoCreateManyTransmission_typeInput)
    data!: Array<AdAutoCreateManyTransmission_typeInput>;
}
