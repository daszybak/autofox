import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateManyBody_typeInput } from './ad-auto-create-many-body-type.input';
import { Type } from 'class-transformer';

@InputType()
export class AdAutoCreateManyBody_typeInputEnvelope {

    @Field(() => [AdAutoCreateManyBody_typeInput], {nullable:false})
    @Type(() => AdAutoCreateManyBody_typeInput)
    data!: Array<AdAutoCreateManyBody_typeInput>;
}
