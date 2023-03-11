import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ListSumAggregate {

    @Field(() => Int, {nullable:true})
    list_id?: number;

    @Field(() => Int, {nullable:true})
    list_type?: number;
}
