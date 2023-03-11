import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PromotionPlanRelationCreateNestedManyWithoutParent_promotion_planInput } from '../../promotion-plan-relation/inputs/promotion-plan-relation-create-nested-many-without-parent-promotion-plan.input';
import { PromotionPlanRelationCreateNestedManyWithoutChild_promotion_planInput } from '../../promotion-plan-relation/inputs/promotion-plan-relation-create-nested-many-without-child-promotion-plan.input';
import { AdPromotionCreateNestedManyWithoutPromotion_planInput } from '../../ad-promotion/inputs/ad-promotion-create-nested-many-without-promotion-plan.input';
import { UserPromotionCreateNestedManyWithoutPromotion_planInput } from '../../user-promotion/inputs/user-promotion-create-nested-many-without-promotion-plan.input';

@InputType()
export class PromotionPlanCreateWithoutPromotion_regionInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;

    @Field(() => Int, {nullable:false})
    validity_period!: number;

    @Field(() => Int, {nullable:true})
    @Validator.IsIn([0, 1])
    promotion_plan_type?: number;

    @Field(() => PromotionPlanRelationCreateNestedManyWithoutParent_promotion_planInput, {nullable:true})
    ParentPromotionPlan?: PromotionPlanRelationCreateNestedManyWithoutParent_promotion_planInput;

    @Field(() => PromotionPlanRelationCreateNestedManyWithoutChild_promotion_planInput, {nullable:true})
    ChildPromotionPlan?: PromotionPlanRelationCreateNestedManyWithoutChild_promotion_planInput;

    @Field(() => AdPromotionCreateNestedManyWithoutPromotion_planInput, {nullable:true})
    AdPromotion?: AdPromotionCreateNestedManyWithoutPromotion_planInput;

    @Field(() => UserPromotionCreateNestedManyWithoutPromotion_planInput, {nullable:true})
    UserPromotion?: UserPromotionCreateNestedManyWithoutPromotion_planInput;
}
