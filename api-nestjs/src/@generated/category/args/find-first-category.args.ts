import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryWhereInput } from '../inputs/category-where.input';
import { Type } from 'class-transformer';
import { CategoryOrderByWithRelationInput } from '../inputs/category-order-by-with-relation.input';
import { CategoryWhereUniqueInput } from '../inputs/category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CategoryScalarFieldEnum } from '../enums/category-scalar-field.enum';

@ArgsType()
export class FindFirstCategoryArgs {

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

    @Field(() => [CategoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CategoryScalarFieldEnum>;
}
