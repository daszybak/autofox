import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdCategoryWhereInput } from '../inputs/ad-category-where.input';
import { Type } from 'class-transformer';
import { AdCategoryOrderByWithRelationInput } from '../inputs/ad-category-order-by-with-relation.input';
import { AdCategoryWhereUniqueInput } from '../inputs/ad-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdCategoryCountAggregateInput } from '../inputs/ad-category-count-aggregate.input';
import { AdCategoryAvgAggregateInput } from '../inputs/ad-category-avg-aggregate.input';
import { AdCategorySumAggregateInput } from '../inputs/ad-category-sum-aggregate.input';
import { AdCategoryMinAggregateInput } from '../inputs/ad-category-min-aggregate.input';
import { AdCategoryMaxAggregateInput } from '../inputs/ad-category-max-aggregate.input';

@ArgsType()
export class AdCategoryAggregateArgs {

    @Field(() => AdCategoryWhereInput, {nullable:true})
    @Type(() => AdCategoryWhereInput)
    where?: AdCategoryWhereInput;

    @Field(() => [AdCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdCategoryOrderByWithRelationInput>;

    @Field(() => AdCategoryWhereUniqueInput, {nullable:true})
    cursor?: AdCategoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdCategoryCountAggregateInput, {nullable:true})
    _count?: AdCategoryCountAggregateInput;

    @Field(() => AdCategoryAvgAggregateInput, {nullable:true})
    _avg?: AdCategoryAvgAggregateInput;

    @Field(() => AdCategorySumAggregateInput, {nullable:true})
    _sum?: AdCategorySumAggregateInput;

    @Field(() => AdCategoryMinAggregateInput, {nullable:true})
    _min?: AdCategoryMinAggregateInput;

    @Field(() => AdCategoryMaxAggregateInput, {nullable:true})
    _max?: AdCategoryMaxAggregateInput;
}
