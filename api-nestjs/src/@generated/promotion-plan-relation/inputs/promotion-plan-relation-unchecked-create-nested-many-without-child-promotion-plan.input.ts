import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanRelationCreateWithoutChild_promotion_planInput } from './promotion-plan-relation-create-without-child-promotion-plan.input';
import { Type } from 'class-transformer';
import { PromotionPlanRelationCreateOrConnectWithoutChild_promotion_planInput } from './promotion-plan-relation-create-or-connect-without-child-promotion-plan.input';
import { PromotionPlanRelationCreateManyChild_promotion_planInputEnvelope } from './promotion-plan-relation-create-many-child-promotion-plan-input-envelope.input';
import { PromotionPlanRelationWhereUniqueInput } from './promotion-plan-relation-where-unique.input';

@InputType()
export class PromotionPlanRelationUncheckedCreateNestedManyWithoutChild_promotion_planInput {

    @Field(() => [PromotionPlanRelationCreateWithoutChild_promotion_planInput], {nullable:true})
    @Type(() => PromotionPlanRelationCreateWithoutChild_promotion_planInput)
    create?: Array<PromotionPlanRelationCreateWithoutChild_promotion_planInput>;

    @Field(() => [PromotionPlanRelationCreateOrConnectWithoutChild_promotion_planInput], {nullable:true})
    @Type(() => PromotionPlanRelationCreateOrConnectWithoutChild_promotion_planInput)
    connectOrCreate?: Array<PromotionPlanRelationCreateOrConnectWithoutChild_promotion_planInput>;

    @Field(() => PromotionPlanRelationCreateManyChild_promotion_planInputEnvelope, {nullable:true})
    @Type(() => PromotionPlanRelationCreateManyChild_promotion_planInputEnvelope)
    createMany?: PromotionPlanRelationCreateManyChild_promotion_planInputEnvelope;

    @Field(() => [PromotionPlanRelationWhereUniqueInput], {nullable:true})
    @Type(() => PromotionPlanRelationWhereUniqueInput)
    connect?: Array<PromotionPlanRelationWhereUniqueInput>;
}
