import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdWhereInput } from '../inputs/ad-where.input';
import { Type } from 'class-transformer';
import { AdOrderByWithRelationInput } from '../inputs/ad-order-by-with-relation.input';
import { AdWhereUniqueInput } from '../inputs/ad-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdScalarFieldEnum } from '../enums/ad-scalar-field.enum';

@ArgsType()
export class FindManyAdArgs {

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

    @Field(() => [AdScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AdScalarFieldEnum>;
}
