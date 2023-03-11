import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdCategoryWhereInput } from '../inputs/ad-category-where.input';
import { Type } from 'class-transformer';
import { AdCategoryOrderByWithRelationInput } from '../inputs/ad-category-order-by-with-relation.input';
import { AdCategoryWhereUniqueInput } from '../inputs/ad-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdCategoryScalarFieldEnum } from '../enums/ad-category-scalar-field.enum';

@ArgsType()
export class FindFirstAdCategoryArgs {

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

    @Field(() => [AdCategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AdCategoryScalarFieldEnum>;
}
