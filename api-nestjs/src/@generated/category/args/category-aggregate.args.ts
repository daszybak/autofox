import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryWhereInput } from '../inputs/category-where.input';
import { Type } from 'class-transformer';
import { CategoryOrderByWithRelationInput } from '../inputs/category-order-by-with-relation.input';
import { CategoryWhereUniqueInput } from '../inputs/category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CategoryCountAggregateInput } from '../inputs/category-count-aggregate.input';
import { CategoryAvgAggregateInput } from '../inputs/category-avg-aggregate.input';
import { CategorySumAggregateInput } from '../inputs/category-sum-aggregate.input';
import { CategoryMinAggregateInput } from '../inputs/category-min-aggregate.input';
import { CategoryMaxAggregateInput } from '../inputs/category-max-aggregate.input';

@ArgsType()
export class CategoryAggregateArgs {

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;

    @Field(() => [CategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithRelationInput>;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    cursor?: CategoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CategoryCountAggregateInput, {nullable:true})
    _count?: CategoryCountAggregateInput;

    @Field(() => CategoryAvgAggregateInput, {nullable:true})
    _avg?: CategoryAvgAggregateInput;

    @Field(() => CategorySumAggregateInput, {nullable:true})
    _sum?: CategorySumAggregateInput;

    @Field(() => CategoryMinAggregateInput, {nullable:true})
    _min?: CategoryMinAggregateInput;

    @Field(() => CategoryMaxAggregateInput, {nullable:true})
    _max?: CategoryMaxAggregateInput;
}
