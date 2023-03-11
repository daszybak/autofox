import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MessagingChannelCountAggregate } from './messaging-channel-count-aggregate.output';
import { MessagingChannelAvgAggregate } from './messaging-channel-avg-aggregate.output';
import { MessagingChannelSumAggregate } from './messaging-channel-sum-aggregate.output';
import { MessagingChannelMinAggregate } from './messaging-channel-min-aggregate.output';
import { MessagingChannelMaxAggregate } from './messaging-channel-max-aggregate.output';

@ObjectType()
export class AggregateMessagingChannel {

    @Field(() => MessagingChannelCountAggregate, {nullable:true})
    _count?: MessagingChannelCountAggregate;

    @Field(() => MessagingChannelAvgAggregate, {nullable:true})
    _avg?: MessagingChannelAvgAggregate;

    @Field(() => MessagingChannelSumAggregate, {nullable:true})
    _sum?: MessagingChannelSumAggregate;

    @Field(() => MessagingChannelMinAggregate, {nullable:true})
    _min?: MessagingChannelMinAggregate;

    @Field(() => MessagingChannelMaxAggregate, {nullable:true})
    _max?: MessagingChannelMaxAggregate;
}
