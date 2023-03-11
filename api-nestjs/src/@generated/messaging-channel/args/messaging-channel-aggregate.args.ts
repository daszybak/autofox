import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingChannelWhereInput } from '../inputs/messaging-channel-where.input';
import { Type } from 'class-transformer';
import { MessagingChannelOrderByWithRelationInput } from '../inputs/messaging-channel-order-by-with-relation.input';
import { MessagingChannelWhereUniqueInput } from '../inputs/messaging-channel-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessagingChannelCountAggregateInput } from '../inputs/messaging-channel-count-aggregate.input';
import { MessagingChannelAvgAggregateInput } from '../inputs/messaging-channel-avg-aggregate.input';
import { MessagingChannelSumAggregateInput } from '../inputs/messaging-channel-sum-aggregate.input';
import { MessagingChannelMinAggregateInput } from '../inputs/messaging-channel-min-aggregate.input';
import { MessagingChannelMaxAggregateInput } from '../inputs/messaging-channel-max-aggregate.input';

@ArgsType()
export class MessagingChannelAggregateArgs {

    @Field(() => MessagingChannelWhereInput, {nullable:true})
    @Type(() => MessagingChannelWhereInput)
    where?: MessagingChannelWhereInput;

    @Field(() => [MessagingChannelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessagingChannelOrderByWithRelationInput>;

    @Field(() => MessagingChannelWhereUniqueInput, {nullable:true})
    cursor?: MessagingChannelWhereUniqueInput;

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
