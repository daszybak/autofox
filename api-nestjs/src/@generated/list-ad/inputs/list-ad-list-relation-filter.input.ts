import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListAdWhereInput } from './list-ad-where.input';

@InputType()
export class ListAdListRelationFilter {

    @Field(() => ListAdWhereInput, {nullable:true})
    every?: ListAdWhereInput;

    @Field(() => ListAdWhereInput, {nullable:true})
    some?: ListAdWhereInput;

    @Field(() => ListAdWhereInput, {nullable:true})
    none?: ListAdWhereInput;
}
