import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateManyFuel_typeInput } from './ad-auto-create-many-fuel-type.input';
import { Type } from 'class-transformer';

@InputType()
export class AdAutoCreateManyFuel_typeInputEnvelope {

    @Field(() => [AdAutoCreateManyFuel_typeInput], {nullable:false})
    @Type(() => AdAutoCreateManyFuel_typeInput)
    data!: Array<AdAutoCreateManyFuel_typeInput>;
}
