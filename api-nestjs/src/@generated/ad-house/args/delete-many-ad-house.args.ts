import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdHouseWhereInput } from '../inputs/ad-house-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAdHouseArgs {

    @Field(() => AdHouseWhereInput, {nullable:true})
    @Type(() => AdHouseWhereInput)
    where?: AdHouseWhereInput;
}
