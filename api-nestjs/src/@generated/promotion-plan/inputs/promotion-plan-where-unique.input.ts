import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PromotionPlanWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    promotion_plan_id?: number;
}
