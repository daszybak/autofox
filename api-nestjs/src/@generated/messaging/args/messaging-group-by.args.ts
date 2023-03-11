import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingWhereInput } from '../inputs/messaging-where.input';
import { Type } from 'class-transformer';
import { MessagingOrderByWithAggregationInput } from '../inputs/messaging-order-by-with-aggregation.input';
import { MessagingScalarFieldEnum } from '../enums/messaging-scalar-field.enum';
import { MessagingScalarWhereWithAggregatesInput } from '../inputs/messaging-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MessagingCountAggregateInput } from '../inputs/messaging-count-aggregate.input';
import { MessagingAvgAggregateInput } from '../inputs/messaging-avg-aggregate.input';
import { MessagingSumAggregateInput } from '../inputs/messaging-sum-aggregate.input';
import { MessagingMinAggregateInput } from '../inputs/messaging-min-aggregate.input';
import { MessagingMaxAggregateInput } from '../inputs/messaging-max-aggregate.input';

@ArgsType()
export class MessagingGroupByArgs {

    @Field(() => MessagingWhereInput, {nullable:true})
    @Type(() => MessagingWhereInput)
    where?: MessagingWhereInput;

    @Field(() => [MessagingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MessagingOrderByWithAggregationInput>;

    @Field(() => [MessagingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MessagingScalarFieldEnum>;

    @Field(() => MessagingScalarWhereWithAggregatesInput, {nullable:true})
    having?: MessagingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MessagingCountAggregateInput, {nullable:true})
    _count?: MessagingCountAggregateInput;

    @Field(() => MessagingAvgAggregateInput, {nullable:true})
    _avg?: MessagingAvgAggregateInput;

    @Field(() => MessagingSumAggregateInput, {nullable:true})
    _sum?: MessagingSumAggregateInput;

    @Field(() => MessagingMinAggregateInput, {nullable:true})
    _min?: MessagingMinAggregateInput;

    @Field(() => MessagingMaxAggregateInput, {nullable:true})
    _max?: MessagingMaxAggregateInput;
}
