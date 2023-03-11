import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListAdWhereInput } from '../inputs/list-ad-where.input';
import { Type } from 'class-transformer';
import { ListAdOrderByWithRelationInput } from '../inputs/list-ad-order-by-with-relation.input';
import { ListAdWhereUniqueInput } from '../inputs/list-ad-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ListAdCountAggregateInput } from '../inputs/list-ad-count-aggregate.input';
import { ListAdAvgAggregateInput } from '../inputs/list-ad-avg-aggregate.input';
import { ListAdSumAggregateInput } from '../inputs/list-ad-sum-aggregate.input';
import { ListAdMinAggregateInput } from '../inputs/list-ad-min-aggregate.input';
import { ListAdMaxAggregateInput } from '../inputs/list-ad-max-aggregate.input';

@ArgsType()
export class ListAdAggregateArgs {

    @Field(() => ListAdWhereInput, {nullable:true})
    @Type(() => ListAdWhereInput)
    where?: ListAdWhereInput;

    @Field(() => [ListAdOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ListAdOrderByWithRelationInput>;

    @Field(() => ListAdWhereUniqueInput, {nullable:true})
    cursor?: ListAdWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ListAdCountAggregateInput, {nullable:true})
    _count?: ListAdCountAggregateInput;

    @Field(() => ListAdAvgAggregateInput, {nullable:true})
    _avg?: ListAdAvgAggregateInput;

    @Field(() => ListAdSumAggregateInput, {nullable:true})
    _sum?: ListAdSumAggregateInput;

    @Field(() => ListAdMinAggregateInput, {nullable:true})
    _min?: ListAdMinAggregateInput;

    @Field(() => ListAdMaxAggregateInput, {nullable:true})
    _max?: ListAdMaxAggregateInput;
}
