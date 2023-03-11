import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdHouseWhereInput } from './ad-house-where.input';

@InputType()
export class AdHouseRelationFilter {

    @Field(() => AdHouseWhereInput, {nullable:true})
    is?: AdHouseWhereInput;

    @Field(() => AdHouseWhereInput, {nullable:true})
    isNot?: AdHouseWhereInput;
}
