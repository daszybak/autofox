import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdAutoWhereInput } from '../inputs/ad-auto-where.input';
import { Type } from 'class-transformer';
import { AdAutoOrderByWithRelationInput } from '../inputs/ad-auto-order-by-with-relation.input';
import { AdAutoWhereUniqueInput } from '../inputs/ad-auto-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdAutoScalarFieldEnum } from '../enums/ad-auto-scalar-field.enum';

@ArgsType()
export class FindManyAdAutoArgs {

    @Field(() => AdAutoWhereInput, {nullable:true})
    @Type(() => AdAutoWhereInput)
    where?: AdAutoWhereInput;

    @Field(() => [AdAutoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdAutoOrderByWithRelationInput>;

    @Field(() => AdAutoWhereUniqueInput, {nullable:true})
    cursor?: AdAutoWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AdAutoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AdAutoScalarFieldEnum>;
}
