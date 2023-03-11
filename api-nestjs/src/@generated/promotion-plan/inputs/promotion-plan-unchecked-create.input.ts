import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';
import { PromotionPlanRelationUncheckedCreateNestedManyWithoutParent_promotion_planInput } from '../../promotion-plan-relation/inputs/promotion-plan-relation-unchecked-create-nested-many-without-parent-promotion-plan.input';
import { PromotionPlanRelationUncheckedCreateNestedManyWithoutChild_promotion_planInput } from '../../promotion-plan-relation/inputs/promotion-plan-relation-unchecked-create-nested-many-without-child-promotion-plan.input';
import { AdPromotionUncheckedCreateNestedManyWithoutPromotion_planInput } from '../../ad-promotion/inputs/ad-promotion-unchecked-create-nested-many-without-promotion-plan.input';
import { UserPromotionUncheckedCreateNestedManyWithoutPromotion_planInput } from '../../user-promotion/inputs/user-promotion-unchecked-create-nested-many-without-promotion-plan.input';

@InputType()
export class PromotionPlanUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    promotion_plan_id?: number;

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
    promotion_region_cid?: number;

    @Field(() => Int, {nullable:true})
    @Validator.IsIn([0, 1])
    promotion_plan_type?: number;

    @Field(() => PromotionPlanRelationUncheckedCreateNestedManyWithoutParent_promotion_planInput, {nullable:true})
    ParentPromotionPlan?: PromotionPlanRelationUncheckedCreateNestedManyWithoutParent_promotion_planInput;

    @Field(() => PromotionPlanRelationUncheckedCreateNestedManyWithoutChild_promotion_planInput, {nullable:true})
    ChildPromotionPlan?: PromotionPlanRelationUncheckedCreateNestedManyWithoutChild_promotion_planInput;

    @Field(() => AdPromotionUncheckedCreateNestedManyWithoutPromotion_planInput, {nullable:true})
    AdPromotion?: AdPromotionUncheckedCreateNestedManyWithoutPromotion_planInput;

    @Field(() => UserPromotionUncheckedCreateNestedManyWithoutPromotion_planInput, {nullable:true})
    UserPromotion?: UserPromotionUncheckedCreateNestedManyWithoutPromotion_planInput;
}
