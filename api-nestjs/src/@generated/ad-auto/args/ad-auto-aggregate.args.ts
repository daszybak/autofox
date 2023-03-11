import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdAutoWhereInput } from '../inputs/ad-auto-where.input';
import { Type } from 'class-transformer';
import { AdAutoOrderByWithRelationInput } from '../inputs/ad-auto-order-by-with-relation.input';
import { AdAutoWhereUniqueInput } from '../inputs/ad-auto-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdAutoCountAggregateInput } from '../inputs/ad-auto-count-aggregate.input';
import { AdAutoAvgAggregateInput } from '../inputs/ad-auto-avg-aggregate.input';
import { AdAutoSumAggregateInput } from '../inputs/ad-auto-sum-aggregate.input';
import { AdAutoMinAggregateInput } from '../inputs/ad-auto-min-aggregate.input';
import { AdAutoMaxAggregateInput } from '../inputs/ad-auto-max-aggregate.input';

@ArgsType()
export class AdAutoAggregateArgs {

    @Field(() => AdAutoWhereInput, {nullable:true})
    @Type(() => AdAutoWhereInput)
    where?: AdAutoWhereInput;

    @Field(() => [AdAutoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdAutoOrderByWithRelationInput>;

    @Field(() => AdAutoWhereUniqueInput, {nullable:true})
    cursor?: AdAutoWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdAutoCountAggregateInput, {nullable:true})
    _count?: AdAutoCountAggregateInput;

    @Field(() => AdAutoAvgAggregateInput, {nullable:true})
    _avg?: AdAutoAvgAggregateInput;

    @Field(() => AdAutoSumAggregateInput, {nullable:true})
    _sum?: AdAutoSumAggregateInput;

    @Field(() => AdAutoMinAggregateInput, {nullable:true})
    _min?: AdAutoMinAggregateInput;

    @Field(() => AdAutoMaxAggregateInput, {nullable:true})
    _max?: AdAutoMaxAggregateInput;
}
