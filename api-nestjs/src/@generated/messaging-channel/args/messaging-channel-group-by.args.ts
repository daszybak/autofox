import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingChannelWhereInput } from '../inputs/messaging-channel-where.input';
import { Type } from 'class-transformer';
import { MessagingChannelOrderByWithAggregationInput } from '../inputs/messaging-channel-order-by-with-aggregation.input';
import { MessagingChannelScalarFieldEnum } from '../enums/messaging-channel-scalar-field.enum';
import { MessagingChannelScalarWhereWithAggregatesInput } from '../inputs/messaging-channel-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MessagingChannelCountAggregateInput } from '../inputs/messaging-channel-count-aggregate.input';
import { MessagingChannelAvgAggregateInput } from '../inputs/messaging-channel-avg-aggregate.input';
import { MessagingChannelSumAggregateInput } from '../inputs/messaging-channel-sum-aggregate.input';
import { MessagingChannelMinAggregateInput } from '../inputs/messaging-channel-min-aggregate.input';
import { MessagingChannelMaxAggregateInput } from '../inputs/messaging-channel-max-aggregate.input';

@ArgsType()
export class MessagingChannelGroupByArgs {

    @Field(() => MessagingChannelWhereInput, {nullable:true})
    @Type(() => MessagingChannelWhereInput)
    where?: MessagingChannelWhereInput;

    @Field(() => [MessagingChannelOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MessagingChannelOrderByWithAggregationInput>;

    @Field(() => [MessagingChannelScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof MessagingChannelScalarFieldEnum>;

    @Field(() => MessagingChannelScalarWhereWithAggregatesInput, {nullable:true})
    having?: MessagingChannelScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MessagingChannelCountAggregateInput, {nullable:true})
    _count?: MessagingChannelCountAggregateInput;

    @Field(() => MessagingChannelAvgAggregateInput, {nullable:true})
    _avg?: MessagingChannelAvgAggregateInput;

    @Field(() => MessagingChannelSumAggregateInput, {nullable:true})
    _sum?: MessagingChannelSumAggregateInput;

    @Field(() => MessagingChannelMinAggregateInput, {nullable:true})
    _min?: MessagingChannelMinAggregateInput;

    @Field(() => MessagingChannelMaxAggregateInput, {nullable:true})
    _max?: MessagingChannelMaxAggregateInput;
}
