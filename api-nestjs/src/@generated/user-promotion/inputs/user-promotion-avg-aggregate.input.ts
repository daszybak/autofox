import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserPromotionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    promotion_plan_id?: true;
}
