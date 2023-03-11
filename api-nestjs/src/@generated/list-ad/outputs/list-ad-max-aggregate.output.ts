import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ListAdMaxAggregate {

    @Field(() => Int, {nullable:true})
    ad_id?: number;

    @Field(() => Int, {nullable:true})
    list_id?: number;
}
