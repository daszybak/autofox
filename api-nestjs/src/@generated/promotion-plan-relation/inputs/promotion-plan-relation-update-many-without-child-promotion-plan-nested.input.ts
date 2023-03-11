import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanRelationCreateWithoutChild_promotion_planInput } from './promotion-plan-relation-create-without-child-promotion-plan.input';
import { Type } from 'class-transformer';
import { PromotionPlanRelationCreateOrConnectWithoutChild_promotion_planInput } from './promotion-plan-relation-create-or-connect-without-child-promotion-plan.input';
import { PromotionPlanRelationUpsertWithWhereUniqueWithoutChild_promotion_planInput } from './promotion-plan-relation-upsert-with-where-unique-without-child-promotion-plan.input';
import { PromotionPlanRelationCreateManyChild_promotion_planInputEnvelope } from './promotion-plan-relation-create-many-child-promotion-plan-input-envelope.input';
import { PromotionPlanRelationWhereUniqueInput } from './promotion-plan-relation-where-unique.input';
import { PromotionPlanRelationUpdateWithWhereUniqueWithoutChild_promotion_planInput } from './promotion-plan-relation-update-with-where-unique-without-child-promotion-plan.input';
import { PromotionPlanRelationUpdateManyWithWhereWithoutChild_promotion_planInput } from './promotion-plan-relation-update-many-with-where-without-child-promotion-plan.input';
import { PromotionPlanRelationScalarWhereInput } from './promotion-plan-relation-scalar-where.input';

@InputType()
export class PromotionPlanRelationUpdateManyWithoutChild_promotion_planNestedInput {

    @Field(() => [PromotionPlanRelationCreateWithoutChild_promotion_planInput], {nullable:true})
    @Type(() => PromotionPlanRelationCreateWithoutChild_promotion_planInput)
    create?: Array<PromotionPlanRelationCreateWithoutChild_promotion_planInput>;

    @Field(() => [PromotionPlanRelationCreateOrConnectWithoutChild_promotion_planInput], {nullable:true})
    @Type(() => PromotionPlanRelationCreateOrConnectWithoutChild_promotion_planInput)
    connectOrCreate?: Array<PromotionPlanRelationCreateOrConnectWithoutChild_promotion_planInput>;

    @Field(() => [PromotionPlanRelationUpsertWithWhereUniqueWithoutChild_promotion_planInput], {nullable:true})
    @Type(() => PromotionPlanRelationUpsertWithWhereUniqueWithoutChild_promotion_planInput)
    upsert?: Array<PromotionPlanRelationUpsertWithWhereUniqueWithoutChild_promotion_planInput>;

    @Field(() => PromotionPlanRelationCreateManyChild_promotion_planInputEnvelope, {nullable:true})
    @Type(() => PromotionPlanRelationCreateManyChild_promotion_planInputEnvelope)
    createMany?: PromotionPlanRelationCreateManyChild_promotion_planInputEnvelope;

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

    @Field(() => [PromotionPlanRelationUpdateWithWhereUniqueWithoutChild_promotion_planInput], {nullable:true})
    @Type(() => PromotionPlanRelationUpdateWithWhereUniqueWithoutChild_promotion_planInput)
    update?: Array<PromotionPlanRelationUpdateWithWhereUniqueWithoutChild_promotion_planInput>;

    @Field(() => [PromotionPlanRelationUpdateManyWithWhereWithoutChild_promotion_planInput], {nullable:true})
    @Type(() => PromotionPlanRelationUpdateManyWithWhereWithoutChild_promotion_planInput)
    updateMany?: Array<PromotionPlanRelationUpdateManyWithWhereWithoutChild_promotion_planInput>;

    @Field(() => [PromotionPlanRelationScalarWhereInput], {nullable:true})
    @Type(() => PromotionPlanRelationScalarWhereInput)
    deleteMany?: Array<PromotionPlanRelationScalarWhereInput>;
}
