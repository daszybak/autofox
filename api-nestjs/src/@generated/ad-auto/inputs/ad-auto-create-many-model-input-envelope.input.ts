import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateManyModelInput } from './ad-auto-create-many-model.input';
import { Type } from 'class-transformer';

@InputType()
export class AdAutoCreateManyModelInputEnvelope {

    @Field(() => [AdAutoCreateManyModelInput], {nullable:false})
    @Type(() => AdAutoCreateManyModelInput)
    data!: Array<AdAutoCreateManyModelInput>;
}
