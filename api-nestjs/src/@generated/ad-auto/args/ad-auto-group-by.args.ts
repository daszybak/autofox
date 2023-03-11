import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdAutoWhereInput } from '../inputs/ad-auto-where.input';
import { Type } from 'class-transformer';
import { AdAutoOrderByWithAggregationInput } from '../inputs/ad-auto-order-by-with-aggregation.input';
import { AdAutoScalarFieldEnum } from '../enums/ad-auto-scalar-field.enum';
import { AdAutoScalarWhereWithAggregatesInput } from '../inputs/ad-auto-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AdAutoCountAggregateInput } from '../inputs/ad-auto-count-aggregate.input';
import { AdAutoAvgAggregateInput } from '../inputs/ad-auto-avg-aggregate.input';
import { AdAutoSumAggregateInput } from '../inputs/ad-auto-sum-aggregate.input';
import { AdAutoMinAggregateInput } from '../inputs/ad-auto-min-aggregate.input';
import { AdAutoMaxAggregateInput } from '../inputs/ad-auto-max-aggregate.input';

@ArgsType()
export class AdAutoGroupByArgs {

    @Field(() => AdAutoWhereInput, {nullable:true})
    @Type(() => AdAutoWhereInput)
    where?: AdAutoWhereInput;

    @Field(() => [AdAutoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AdAutoOrderByWithAggregationInput>;

    @Field(() => [AdAutoScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AdAutoScalarFieldEnum>;

    @Field(() => AdAutoScalarWhereWithAggregatesInput, {nullable:true})
    having?: AdAutoScalarWhereWithAggregatesInput;

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
