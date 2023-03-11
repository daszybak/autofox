import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserPromotionMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    promotion_plan_id?: true;

    @Field(() => Boolean, {nullable:true})
    user_sub?: true;

    @Field(() => Boolean, {nullable:true})
    valid_from?: true;

    @Field(() => Boolean, {nullable:true})
    valid_to?: true;

    @Field(() => Boolean, {nullable:true})
    transaction_id?: true;
}
