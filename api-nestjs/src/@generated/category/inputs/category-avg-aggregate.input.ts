import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CategoryAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    category_id?: true;

    @Field(() => Boolean, {nullable:true})
    parent_category_id?: true;

    @Field(() => Boolean, {nullable:true})
    weight?: true;
}
