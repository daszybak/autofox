import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdHouseWhereInput } from '../inputs/ad-house-where.input';
import { Type } from 'class-transformer';
import { AdHouseOrderByWithRelationInput } from '../inputs/ad-house-order-by-with-relation.input';
import { AdHouseWhereUniqueInput } from '../inputs/ad-house-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdHouseScalarFieldEnum } from '../enums/ad-house-scalar-field.enum';

@ArgsType()
export class FindFirstAdHouseArgs {

    @Field(() => AdHouseWhereInput, {nullable:true})
    @Type(() => AdHouseWhereInput)
    where?: AdHouseWhereInput;

    @Field(() => [AdHouseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdHouseOrderByWithRelationInput>;

    @Field(() => AdHouseWhereUniqueInput, {nullable:true})
    cursor?: AdHouseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AdHouseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AdHouseScalarFieldEnum>;
}
