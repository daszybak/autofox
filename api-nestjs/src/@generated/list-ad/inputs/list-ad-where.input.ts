import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { AdRelationFilter } from '../../ad/inputs/ad-relation-filter.input';
import { Type } from 'class-transformer';
import { ListRelationFilter } from '../../list/inputs/list-relation-filter.input';

@InputType()
export class ListAdWhereInput {

    @Field(() => [ListAdWhereInput], {nullable:true})
    AND?: Array<ListAdWhereInput>;

    @Field(() => [ListAdWhereInput], {nullable:true})
    OR?: Array<ListAdWhereInput>;

    @Field(() => [ListAdWhereInput], {nullable:true})
    NOT?: Array<ListAdWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ad_id?: IntFilter;

    @Field(() => AdRelationFilter, {nullable:true})
    @Type(() => AdRelationFilter)
    ad?: AdRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    list_id?: IntFilter;

    @Field(() => ListRelationFilter, {nullable:true})
    list?: ListRelationFilter;
}
