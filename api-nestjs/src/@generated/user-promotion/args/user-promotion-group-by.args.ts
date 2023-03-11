import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPromotionWhereInput } from '../inputs/user-promotion-where.input';
import { Type } from 'class-transformer';
import { UserPromotionOrderByWithAggregationInput } from '../inputs/user-promotion-order-by-with-aggregation.input';
import { UserPromotionScalarFieldEnum } from '../enums/user-promotion-scalar-field.enum';
import { UserPromotionScalarWhereWithAggregatesInput } from '../inputs/user-promotion-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserPromotionCountAggregateInput } from '../inputs/user-promotion-count-aggregate.input';
import { UserPromotionAvgAggregateInput } from '../inputs/user-promotion-avg-aggregate.input';
import { UserPromotionSumAggregateInput } from '../inputs/user-promotion-sum-aggregate.input';
import { UserPromotionMinAggregateInput } from '../inputs/user-promotion-min-aggregate.input';
import { UserPromotionMaxAggregateInput } from '../inputs/user-promotion-max-aggregate.input';

@ArgsType()
export class UserPromotionGroupByArgs {

    @Field(() => UserPromotionWhereInput, {nullable:true})
    @Type(() => UserPromotionWhereInput)
    where?: UserPromotionWhereInput;

    @Field(() => [UserPromotionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserPromotionOrderByWithAggregationInput>;

    @Field(() => [UserPromotionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserPromotionScalarFieldEnum>;

    @Field(() => UserPromotionScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserPromotionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserPromotionCountAggregateInput, {nullable:true})
    _count?: UserPromotionCountAggregateInput;

    @Field(() => UserPromotionAvgAggregateInput, {nullable:true})
    _avg?: UserPromotionAvgAggregateInput;

    @Field(() => UserPromotionSumAggregateInput, {nullable:true})
    _sum?: UserPromotionSumAggregateInput;

    @Field(() => UserPromotionMinAggregateInput, {nullable:true})
    _min?: UserPromotionMinAggregateInput;

    @Field(() => UserPromotionMaxAggregateInput, {nullable:true})
    _max?: UserPromotionMaxAggregateInput;
}
