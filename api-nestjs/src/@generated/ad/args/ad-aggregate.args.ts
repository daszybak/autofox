import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdWhereInput } from '../inputs/ad-where.input';
import { Type } from 'class-transformer';
import { AdOrderByWithRelationInput } from '../inputs/ad-order-by-with-relation.input';
import { AdWhereUniqueInput } from '../inputs/ad-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdCountAggregateInput } from '../inputs/ad-count-aggregate.input';
import { AdAvgAggregateInput } from '../inputs/ad-avg-aggregate.input';
import { AdSumAggregateInput } from '../inputs/ad-sum-aggregate.input';
import { AdMinAggregateInput } from '../inputs/ad-min-aggregate.input';
import { AdMaxAggregateInput } from '../inputs/ad-max-aggregate.input';

@ArgsType()
export class AdAggregateArgs {

    @Field(() => AdWhereInput, {nullable:true})
    @Type(() => AdWhereInput)
    where?: AdWhereInput;

    @Field(() => [AdOrderByWithRelationInput], {nullable:true})
    @Type(() => AdOrderByWithRelationInput)
    orderBy?: Array<AdOrderByWithRelationInput>;

    @Field(() => AdWhereUniqueInput, {nullable:true})
    @Type(() => AdWhereUniqueInput)
    cursor?: AdWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdCountAggregateInput, {nullable:true})
    @Type(() => AdCountAggregateInput)
    _count?: AdCountAggregateInput;

    @Field(() => AdAvgAggregateInput, {nullable:true})
    @Type(() => AdAvgAggregateInput)
    _avg?: AdAvgAggregateInput;

    @Field(() => AdSumAggregateInput, {nullable:true})
    @Type(() => AdSumAggregateInput)
    _sum?: AdSumAggregateInput;

    @Field(() => AdMinAggregateInput, {nullable:true})
    @Type(() => AdMinAggregateInput)
    _min?: AdMinAggregateInput;

    @Field(() => AdMaxAggregateInput, {nullable:true})
    @Type(() => AdMaxAggregateInput)
    _max?: AdMaxAggregateInput;
}
