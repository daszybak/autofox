import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ListAvgAggregate {

    @Field(() => Float, {nullable:true})
    list_id?: number;

    @Field(() => Float, {nullable:true})
    list_type?: number;
}
