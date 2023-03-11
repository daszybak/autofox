import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';

@InputType()
export class PromotionPlanRelationScalarWhereInput {

    @Field(() => [PromotionPlanRelationScalarWhereInput], {nullable:true})
    AND?: Array<PromotionPlanRelationScalarWhereInput>;

    @Field(() => [PromotionPlanRelationScalarWhereInput], {nullable:true})
    OR?: Array<PromotionPlanRelationScalarWhereInput>;

    @Field(() => [PromotionPlanRelationScalarWhereInput], {nullable:true})
    NOT?: Array<PromotionPlanRelationScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    parent_promotion_plan_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    child_promotion_plan_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    count?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    reccurence?: IntFilter;
}
