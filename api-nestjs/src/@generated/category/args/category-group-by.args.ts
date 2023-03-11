import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryWhereInput } from '../inputs/category-where.input';
import { Type } from 'class-transformer';
import { CategoryOrderByWithAggregationInput } from '../inputs/category-order-by-with-aggregation.input';
import { CategoryScalarFieldEnum } from '../enums/category-scalar-field.enum';
import { CategoryScalarWhereWithAggregatesInput } from '../inputs/category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CategoryCountAggregateInput } from '../inputs/category-count-aggregate.input';
import { CategoryAvgAggregateInput } from '../inputs/category-avg-aggregate.input';
import { CategorySumAggregateInput } from '../inputs/category-sum-aggregate.input';
import { CategoryMinAggregateInput } from '../inputs/category-min-aggregate.input';
import { CategoryMaxAggregateInput } from '../inputs/category-max-aggregate.input';

@ArgsType()
export class CategoryGroupByArgs {

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;

    @Field(() => [CategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CategoryOrderByWithAggregationInput>;

    @Field(() => [CategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CategoryScalarFieldEnum>;

    @Field(() => CategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: CategoryScalarWhereWithAggregatesInput;

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
