import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListWhereInput } from './list-where.input';

@InputType()
export class ListListRelationFilter {

    @Field(() => ListWhereInput, {nullable:true})
    every?: ListWhereInput;

    @Field(() => ListWhereInput, {nullable:true})
    some?: ListWhereInput;

    @Field(() => ListWhereInput, {nullable:true})
    none?: ListWhereInput;
}
