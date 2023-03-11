import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PromotionPlanMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    promotion_plan_id?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    deleted_at?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    text?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    validity_period?: true;

    @Field(() => Boolean, {nullable:true})
    promotion_region_cid?: true;

    @Field(() => Boolean, {nullable:true})
    promotion_plan_type?: true;
}
