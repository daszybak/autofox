import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdAutoCreateInput } from '../inputs/ad-auto-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdAutoArgs {

    @Field(() => AdAutoCreateInput, {nullable:false})
    @Type(() => AdAutoCreateInput)
    data!: AdAutoCreateInput;
}
