import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateManyConditioningInput } from './ad-auto-create-many-conditioning.input';
import { Type } from 'class-transformer';

@InputType()
export class AdAutoCreateManyConditioningInputEnvelope {

    @Field(() => [AdAutoCreateManyConditioningInput], {nullable:false})
    @Type(() => AdAutoCreateManyConditioningInput)
    data!: Array<AdAutoCreateManyConditioningInput>;
}
