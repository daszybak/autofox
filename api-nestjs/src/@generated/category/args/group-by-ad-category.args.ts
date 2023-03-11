import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdCategoryWhereInput } from '../../ad-category/inputs/ad-category-where.input';
import { Type } from 'class-transformer';
import { AdCategoryOrderByWithAggregationInput } from '../../ad-category/inputs/ad-category-order-by-with-aggregation.input';
import { AdCategoryScalarFieldEnum } from '../../ad-category/enums/ad-category-scalar-field.enum';
import { AdCategoryScalarWhereWithAggregatesInput } from '../../ad-category/inputs/ad-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByAdCategoryArgs {

    @Field(() => AdCategoryWhereInput, {nullable:true})
    @Type(() => AdCategoryWhereInput)
    where?: AdCategoryWhereInput;

    @Field(() => [AdCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AdCategoryOrderByWithAggregationInput>;

    @Field(() => [AdCategoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AdCategoryScalarFieldEnum>;

    @Field(() => AdCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: AdCategoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
