import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { MessagingCountAggregate } from './messaging-count-aggregate.output';
import { MessagingAvgAggregate } from './messaging-avg-aggregate.output';
import { MessagingSumAggregate } from './messaging-sum-aggregate.output';
import { MessagingMinAggregate } from './messaging-min-aggregate.output';
import { MessagingMaxAggregate } from './messaging-max-aggregate.output';

@ObjectType()
export class AggregateMessaging {

    @Field(() => MessagingCountAggregate, {nullable:true})
    _count?: MessagingCountAggregate;

    @Field(() => MessagingAvgAggregate, {nullable:true})
    _avg?: MessagingAvgAggregate;

    @Field(() => MessagingSumAggregate, {nullable:true})
    _sum?: MessagingSumAggregate;

    @Field(() => MessagingMinAggregate, {nullable:true})
    _min?: MessagingMinAggregate;

    @Field(() => MessagingMaxAggregate, {nullable:true})
    _max?: MessagingMaxAggregate;
}
