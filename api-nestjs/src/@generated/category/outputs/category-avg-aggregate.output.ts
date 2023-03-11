import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CategoryAvgAggregate {

    @Field(() => Float, {nullable:true})
    category_id?: number;

    @Field(() => Float, {nullable:true})
    parent_category_id?: number;

    @Field(() => Float, {nullable:true})
    weight?: number;
}
