import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class PromotionPlanRelationUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    parent_promotion_plan_id!: number;

    @Field(() => Int, {nullable:false})
    child_promotion_plan_id!: number;

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => Int, {nullable:true})
    @Validator.IsIn([0, 1, 2, 3, 4])
    reccurence?: number;
}
