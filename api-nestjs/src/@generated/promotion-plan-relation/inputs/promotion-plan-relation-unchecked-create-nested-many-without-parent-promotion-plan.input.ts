import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanRelationCreateWithoutParent_promotion_planInput } from './promotion-plan-relation-create-without-parent-promotion-plan.input';
import { Type } from 'class-transformer';
import { PromotionPlanRelationCreateOrConnectWithoutParent_promotion_planInput } from './promotion-plan-relation-create-or-connect-without-parent-promotion-plan.input';
import { PromotionPlanRelationCreateManyParent_promotion_planInputEnvelope } from './promotion-plan-relation-create-many-parent-promotion-plan-input-envelope.input';
import { PromotionPlanRelationWhereUniqueInput } from './promotion-plan-relation-where-unique.input';

@InputType()
export class PromotionPlanRelationUncheckedCreateNestedManyWithoutParent_promotion_planInput {

    @Field(() => [PromotionPlanRelationCreateWithoutParent_promotion_planInput], {nullable:true})
    @Type(() => PromotionPlanRelationCreateWithoutParent_promotion_planInput)
    create?: Array<PromotionPlanRelationCreateWithoutParent_promotion_planInput>;

    @Field(() => [PromotionPlanRelationCreateOrConnectWithoutParent_promotion_planInput], {nullable:true})
    @Type(() => PromotionPlanRelationCreateOrConnectWithoutParent_promotion_planInput)
    connectOrCreate?: Array<PromotionPlanRelationCreateOrConnectWithoutParent_promotion_planInput>;

    @Field(() => PromotionPlanRelationCreateManyParent_promotion_planInputEnvelope, {nullable:true})
    @Type(() => PromotionPlanRelationCreateManyParent_promotion_planInputEnvelope)
    createMany?: PromotionPlanRelationCreateManyParent_promotion_planInputEnvelope;

    @Field(() => [PromotionPlanRelationWhereUniqueInput], {nullable:true})
    @Type(() => PromotionPlanRelationWhereUniqueInput)
    connect?: Array<PromotionPlanRelationWhereUniqueInput>;
}
