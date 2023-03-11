import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListAdWhereInput } from '../inputs/list-ad-where.input';
import { Type } from 'class-transformer';
import { ListAdOrderByWithRelationInput } from '../inputs/list-ad-order-by-with-relation.input';
import { ListAdWhereUniqueInput } from '../inputs/list-ad-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ListAdScalarFieldEnum } from '../enums/list-ad-scalar-field.enum';

@ArgsType()
export class FindManyListAdArgs {

    @Field(() => ListAdWhereInput, {nullable:true})
    @Type(() => ListAdWhereInput)
    where?: ListAdWhereInput;

    @Field(() => [ListAdOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ListAdOrderByWithRelationInput>;

    @Field(() => ListAdWhereUniqueInput, {nullable:true})
    cursor?: ListAdWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ListAdScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ListAdScalarFieldEnum>;
}
