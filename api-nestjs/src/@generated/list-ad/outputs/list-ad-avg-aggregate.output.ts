import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ListAdAvgAggregate {

    @Field(() => Float, {nullable:true})
    ad_id?: number;

    @Field(() => Float, {nullable:true})
    list_id?: number;
}
