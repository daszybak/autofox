import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdCategoryMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    ad_id?: true;

    @Field(() => Boolean, {nullable:true})
    category_id?: true;
}
