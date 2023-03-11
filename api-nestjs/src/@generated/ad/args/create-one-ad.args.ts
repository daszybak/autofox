import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdCreateInput } from '../inputs/ad-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdArgs {

    @Field(() => AdCreateInput, {nullable:false})
    @Type(() => AdCreateInput)
    data!: AdCreateInput;
}
