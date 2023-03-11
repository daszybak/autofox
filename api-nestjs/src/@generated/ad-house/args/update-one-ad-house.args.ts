import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdHouseUpdateInput } from '../inputs/ad-house-update.input';
import { Type } from 'class-transformer';
import { AdHouseWhereUniqueInput } from '../inputs/ad-house-where-unique.input';

@ArgsType()
export class UpdateOneAdHouseArgs {

    @Field(() => AdHouseUpdateInput, {nullable:false})
    @Type(() => AdHouseUpdateInput)
    data!: AdHouseUpdateInput;

    @Field(() => AdHouseWhereUniqueInput, {nullable:false})
    @Type(() => AdHouseWhereUniqueInput)
    where!: AdHouseWhereUniqueInput;
}
