import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PromotionPlanRelationCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    parent_promotion_plan_id?: true;

    @Field(() => Boolean, {nullable:true})
    child_promotion_plan_id?: true;

    @Field(() => Boolean, {nullable:true})
    count?: true;

    @Field(() => Boolean, {nullable:true})
    reccurence?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
