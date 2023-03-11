import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdHouseWhereUniqueInput } from '../inputs/ad-house-where-unique.input';
import { Type } from 'class-transformer';
import { AdHouseCreateInput } from '../inputs/ad-house-create.input';
import { AdHouseUpdateInput } from '../inputs/ad-house-update.input';

@ArgsType()
export class UpsertOneAdHouseArgs {

    @Field(() => AdHouseWhereUniqueInput, {nullable:false})
    @Type(() => AdHouseWhereUniqueInput)
    where!: AdHouseWhereUniqueInput;

    @Field(() => AdHouseCreateInput, {nullable:false})
    @Type(() => AdHouseCreateInput)
    create!: AdHouseCreateInput;

    @Field(() => AdHouseUpdateInput, {nullable:false})
    @Type(() => AdHouseUpdateInput)
    update!: AdHouseUpdateInput;
}
