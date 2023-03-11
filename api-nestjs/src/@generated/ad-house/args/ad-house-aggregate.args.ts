import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdHouseWhereInput } from '../inputs/ad-house-where.input';
import { Type } from 'class-transformer';
import { AdHouseOrderByWithRelationInput } from '../inputs/ad-house-order-by-with-relation.input';
import { AdHouseWhereUniqueInput } from '../inputs/ad-house-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdHouseCountAggregateInput } from '../inputs/ad-house-count-aggregate.input';
import { AdHouseAvgAggregateInput } from '../inputs/ad-house-avg-aggregate.input';
import { AdHouseSumAggregateInput } from '../inputs/ad-house-sum-aggregate.input';
import { AdHouseMinAggregateInput } from '../inputs/ad-house-min-aggregate.input';
import { AdHouseMaxAggregateInput } from '../inputs/ad-house-max-aggregate.input';

@ArgsType()
export class AdHouseAggregateArgs {

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

    @Field(() => AdHouseCountAggregateInput, {nullable:true})
    _count?: AdHouseCountAggregateInput;

    @Field(() => AdHouseAvgAggregateInput, {nullable:true})
    _avg?: AdHouseAvgAggregateInput;

    @Field(() => AdHouseSumAggregateInput, {nullable:true})
    _sum?: AdHouseSumAggregateInput;

    @Field(() => AdHouseMinAggregateInput, {nullable:true})
    _min?: AdHouseMinAggregateInput;

    @Field(() => AdHouseMaxAggregateInput, {nullable:true})
    _max?: AdHouseMaxAggregateInput;
}
