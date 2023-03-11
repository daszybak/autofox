import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdHouseWhereUniqueInput } from '../inputs/ad-house-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAdHouseArgs {

    @Field(() => AdHouseWhereUniqueInput, {nullable:false})
    @Type(() => AdHouseWhereUniqueInput)
    where!: AdHouseWhereUniqueInput;
}
