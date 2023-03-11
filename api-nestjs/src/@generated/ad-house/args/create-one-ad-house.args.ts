import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdHouseCreateInput } from '../inputs/ad-house-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdHouseArgs {

    @Field(() => AdHouseCreateInput, {nullable:false})
    @Type(() => AdHouseCreateInput)
    data!: AdHouseCreateInput;
}
