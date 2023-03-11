import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime';
import { Int } from '@nestjs/graphql';
import { Category } from '../../category/models/category.model';
import { PromotionPlanRelation } from '../../promotion-plan-relation/models/promotion-plan-relation.model';
import { AdPromotion } from '../../ad-promotion/models/ad-promotion.model';
import { UserPromotion } from '../../user-promotion/models/user-promotion.model';
import { PromotionPlanCount } from '../outputs/promotion-plan-count.output';

@ObjectType()
export class PromotionPlan {

    @Field(() => ID, {nullable:false})
    promotion_plan_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    /**
     * In seconds
     */
    @Field(() => Int, {nullable:false,description:'In seconds'})
    validity_period!: number;

    @Field(() => Int, {nullable:true})
    promotion_region_cid!: number | null;

    @Field(() => Category, {nullable:true})
    promotion_region?: Category | null;

    /**
     * 0 - Ad, 1 - User
     */
    @Field(() => Int, {nullable:false,defaultValue:0,description:'0 - Ad, 1 - User'})
    promotion_plan_type!: number;

    @Field(() => [PromotionPlanRelation], {nullable:true})
    ParentPromotionPlan?: Array<PromotionPlanRelation>;

    @Field(() => [PromotionPlanRelation], {nullable:true})
    ChildPromotionPlan?: Array<PromotionPlanRelation>;

    @Field(() => [AdPromotion], {nullable:true})
    AdPromotion?: Array<AdPromotion>;

    @Field(() => [UserPromotion], {nullable:true})
    UserPromotion?: Array<UserPromotion>;

    @Field(() => PromotionPlanCount, {nullable:false})
    _count?: PromotionPlanCount;
}
