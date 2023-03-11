import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingWhereInput } from '../inputs/messaging-where.input';
import { Type } from 'class-transformer';
import { MessagingOrderByWithRelationInput } from '../inputs/messaging-order-by-with-relation.input';
import { MessagingWhereUniqueInput } from '../inputs/messaging-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessagingCountAggregateInput } from '../inputs/messaging-count-aggregate.input';
import { MessagingAvgAggregateInput } from '../inputs/messaging-avg-aggregate.input';
import { MessagingSumAggregateInput } from '../inputs/messaging-sum-aggregate.input';
import { MessagingMinAggregateInput } from '../inputs/messaging-min-aggregate.input';
import { MessagingMaxAggregateInput } from '../inputs/messaging-max-aggregate.input';

@ArgsType()
export class MessagingAggregateArgs {

    @Field(() => MessagingWhereInput, {nullable:true})
    @Type(() => MessagingWhereInput)
    where?: MessagingWhereInput;

    @Field(() => [MessagingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessagingOrderByWithRelationInput>;

    @Field(() => MessagingWhereUniqueInput, {nullable:true})
    cursor?: MessagingWhereUniqueInput;

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
