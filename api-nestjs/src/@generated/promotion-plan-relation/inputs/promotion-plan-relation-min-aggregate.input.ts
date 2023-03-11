import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PromotionPlanRelationMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    parent_promotion_plan_id?: true;

    @Field(() => Boolean, {nullable:true})
    child_promotion_plan_id?: true;

    @Field(() => Boolean, {nullable:true})
    count?: true;

    @Field(() => Boolean, {nullable:true})
    reccurence?: true;
}
