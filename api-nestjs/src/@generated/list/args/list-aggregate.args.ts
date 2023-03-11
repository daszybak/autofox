import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListWhereInput } from '../inputs/list-where.input';
import { Type } from 'class-transformer';
import { ListOrderByWithRelationInput } from '../inputs/list-order-by-with-relation.input';
import { ListWhereUniqueInput } from '../inputs/list-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ListCountAggregateInput } from '../inputs/list-count-aggregate.input';
import { ListAvgAggregateInput } from '../inputs/list-avg-aggregate.input';
import { ListSumAggregateInput } from '../inputs/list-sum-aggregate.input';
import { ListMinAggregateInput } from '../inputs/list-min-aggregate.input';
import { ListMaxAggregateInput } from '../inputs/list-max-aggregate.input';

@ArgsType()
export class ListAggregateArgs {

    @Field(() => ListWhereInput, {nullable:true})
    @Type(() => ListWhereInput)
    where?: ListWhereInput;

    @Field(() => [ListOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ListOrderByWithRelationInput>;

    @Field(() => ListWhereUniqueInput, {nullable:true})
    cursor?: ListWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ListCountAggregateInput, {nullable:true})
    _count?: ListCountAggregateInput;

    @Field(() => ListAvgAggregateInput, {nullable:true})
    _avg?: ListAvgAggregateInput;

    @Field(() => ListSumAggregateInput, {nullable:true})
    _sum?: ListSumAggregateInput;

    @Field(() => ListMinAggregateInput, {nullable:true})
    _min?: ListMinAggregateInput;

    @Field(() => ListMaxAggregateInput, {nullable:true})
    _max?: ListMaxAggregateInput;
}
