import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateManyEmission_classInput } from './ad-auto-create-many-emission-class.input';
import { Type } from 'class-transformer';

@InputType()
export class AdAutoCreateManyEmission_classInputEnvelope {

    @Field(() => [AdAutoCreateManyEmission_classInput], {nullable:false})
    @Type(() => AdAutoCreateManyEmission_classInput)
    data!: Array<AdAutoCreateManyEmission_classInput>;
}
