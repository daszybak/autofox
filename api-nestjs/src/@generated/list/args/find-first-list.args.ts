import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListWhereInput } from '../inputs/list-where.input';
import { Type } from 'class-transformer';
import { ListOrderByWithRelationInput } from '../inputs/list-order-by-with-relation.input';
import { ListWhereUniqueInput } from '../inputs/list-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ListScalarFieldEnum } from '../enums/list-scalar-field.enum';

@ArgsType()
export class FindFirstListArgs {

    @Field(() => ListWhereInput, {nullable:true})
    @Type(() => ListWhereInput)
    where?: ListWhereInput;

    @Field(() => [ListOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ListOrderByWithRelationInput>;

    @Field(() => ListWhereUniqueInput, {nullable:true})
    cursor?: ListWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ListScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ListScalarFieldEnum>;
}
