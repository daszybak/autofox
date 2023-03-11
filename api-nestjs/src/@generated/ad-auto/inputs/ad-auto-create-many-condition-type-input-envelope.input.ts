import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateManyCondition_typeInput } from './ad-auto-create-many-condition-type.input';
import { Type } from 'class-transformer';

@InputType()
export class AdAutoCreateManyCondition_typeInputEnvelope {

    @Field(() => [AdAutoCreateManyCondition_typeInput], {nullable:false})
    @Type(() => AdAutoCreateManyCondition_typeInput)
    data!: Array<AdAutoCreateManyCondition_typeInput>;
}
