import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanRelationCreateWithoutParent_promotion_planInput } from './promotion-plan-relation-create-without-parent-promotion-plan.input';
import { Type } from 'class-transformer';
import { PromotionPlanRelationCreateOrConnectWithoutParent_promotion_planInput } from './promotion-plan-relation-create-or-connect-without-parent-promotion-plan.input';
import { PromotionPlanRelationUpsertWithWhereUniqueWithoutParent_promotion_planInput } from './promotion-plan-relation-upsert-with-where-unique-without-parent-promotion-plan.input';
import { PromotionPlanRelationCreateManyParent_promotion_planInputEnvelope } from './promotion-plan-relation-create-many-parent-promotion-plan-input-envelope.input';
import { PromotionPlanRelationWhereUniqueInput } from './promotion-plan-relation-where-unique.input';
import { PromotionPlanRelationUpdateWithWhereUniqueWithoutParent_promotion_planInput } from './promotion-plan-relation-update-with-where-unique-without-parent-promotion-plan.input';
import { PromotionPlanRelationUpdateManyWithWhereWithoutParent_promotion_planInput } from './promotion-plan-relation-update-many-with-where-without-parent-promotion-plan.input';
import { PromotionPlanRelationScalarWhereInput } from './promotion-plan-relation-scalar-where.input';

@InputType()
export class PromotionPlanRelationUpdateManyWithoutParent_promotion_planNestedInput {

    @Field(() => [PromotionPlanRelationCreateWithoutParent_promotion_planInput], {nullable:true})
    @Type(() => PromotionPlanRelationCreateWithoutParent_promotion_planInput)
    create?: Array<PromotionPlanRelationCreateWithoutParent_promotion_planInput>;

    @Field(() => [PromotionPlanRelationCreateOrConnectWithoutParent_promotion_planInput], {nullable:true})
    @Type(() => PromotionPlanRelationCreateOrConnectWithoutParent_promotion_planInput)
    connectOrCreate?: Array<PromotionPlanRelationCreateOrConnectWithoutParent_promotion_planInput>;

    @Field(() => [PromotionPlanRelationUpsertWithWhereUniqueWithoutParent_promotion_planInput], {nullable:true})
    @Type(() => PromotionPlanRelationUpsertWithWhereUniqueWithoutParent_promotion_planInput)
    upsert?: Array<PromotionPlanRelationUpsertWithWhereUniqueWithoutParent_promotion_planInput>;

    @Field(() => PromotionPlanRelationCreateManyParent_promotion_planInputEnvelope, {nullable:true})
    @Type(() => PromotionPlanRelationCreateManyParent_promotion_planInputEnvelope)
    createMany?: PromotionPlanRelationCreateManyParent_promotion_planInputEnvelope;

    @Field(() => [PromotionPlanRelationWhereUniqueInput], {nullable:true})
    @Type(() => PromotionPlanRelationWhereUniqueInput)
    set?: Array<PromotionPlanRelationWhereUniqueInput>;

    @Field(() => [PromotionPlanRelationWhereUniqueInput], {nullable:true})
    @Type(() => PromotionPlanRelationWhereUniqueInput)
    disconnect?: Array<PromotionPlanRelationWhereUniqueInput>;

    @Field(() => [PromotionPlanRelationWhereUniqueInput], {nullable:true})
    @Type(() => PromotionPlanRelationWhereUniqueInput)
    delete?: Array<PromotionPlanRelationWhereUniqueInput>;

    @Field(() => [PromotionPlanRelationWhereUniqueInput], {nullable:true})
    @Type(() => PromotionPlanRelationWhereUniqueInput)
    connect?: Array<PromotionPlanRelationWhereUniqueInput>;

    @Field(() => [PromotionPlanRelationUpdateWithWhereUniqueWithoutParent_promotion_planInput], {nullable:true})
    @Type(() => PromotionPlanRelationUpdateWithWhereUniqueWithoutParent_promotion_planInput)
    update?: Array<PromotionPlanRelationUpdateWithWhereUniqueWithoutParent_promotion_planInput>;

    @Field(() => [PromotionPlanRelationUpdateManyWithWhereWithoutParent_promotion_planInput], {nullable:true})
    @Type(() => PromotionPlanRelationUpdateManyWithWhereWithoutParent_promotion_planInput)
    updateMany?: Array<PromotionPlanRelationUpdateManyWithWhereWithoutParent_promotion_planInput>;

    @Field(() => [PromotionPlanRelationScalarWhereInput], {nullable:true})
    @Type(() => PromotionPlanRelationScalarWhereInput)
    deleteMany?: Array<PromotionPlanRelationScalarWhereInput>;
}
