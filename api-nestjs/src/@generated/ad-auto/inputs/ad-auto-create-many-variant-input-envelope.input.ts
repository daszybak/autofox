import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateManyVariantInput } from './ad-auto-create-many-variant.input';
import { Type } from 'class-transformer';

@InputType()
export class AdAutoCreateManyVariantInputEnvelope {

    @Field(() => [AdAutoCreateManyVariantInput], {nullable:false})
    @Type(() => AdAutoCreateManyVariantInput)
    data!: Array<AdAutoCreateManyVariantInput>;
}
