import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListAdWhereInput } from '../inputs/list-ad-where.input';
import { Type } from 'class-transformer';
import { ListAdOrderByWithAggregationInput } from '../inputs/list-ad-order-by-with-aggregation.input';
import { ListAdScalarFieldEnum } from '../enums/list-ad-scalar-field.enum';
import { ListAdScalarWhereWithAggregatesInput } from '../inputs/list-ad-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ListAdCountAggregateInput } from '../inputs/list-ad-count-aggregate.input';
import { ListAdAvgAggregateInput } from '../inputs/list-ad-avg-aggregate.input';
import { ListAdSumAggregateInput } from '../inputs/list-ad-sum-aggregate.input';
import { ListAdMinAggregateInput } from '../inputs/list-ad-min-aggregate.input';
import { ListAdMaxAggregateInput } from '../inputs/list-ad-max-aggregate.input';

@ArgsType()
export class ListAdGroupByArgs {

    @Field(() => ListAdWhereInput, {nullable:true})
    @Type(() => ListAdWhereInput)
    where?: ListAdWhereInput;

    @Field(() => [ListAdOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ListAdOrderByWithAggregationInput>;

    @Field(() => [ListAdScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ListAdScalarFieldEnum>;

    @Field(() => ListAdScalarWhereWithAggregatesInput, {nullable:true})
    having?: ListAdScalarWhereWithAggregatesInput;

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
