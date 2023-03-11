import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AdPromotionSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    promotion_plan_id?: true;

    @Field(() => Boolean, {nullable:true})
    ad_id?: true;
}
