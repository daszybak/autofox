import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PromotionPlan } from '../../promotion-plan/models/promotion-plan.model';
import { User } from '../../user/models/user.model';

@ObjectType()
export class UserPromotion {

    @Field(() => Int, {nullable:false})
    promotion_plan_id!: number;

    @Field(() => PromotionPlan, {nullable:false})
    promotion_plan?: PromotionPlan;

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Date, {nullable:true})
    valid_from!: Date | null;

    @Field(() => Date, {nullable:true})
    valid_to!: Date | null;

    @Field(() => String, {nullable:true})
    transaction_id!: string | null;
}
