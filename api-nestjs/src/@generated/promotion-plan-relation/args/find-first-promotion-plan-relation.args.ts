import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanRelationWhereInput } from '../inputs/promotion-plan-relation-where.input';
import { Type } from 'class-transformer';
import { PromotionPlanRelationOrderByWithRelationInput } from '../inputs/promotion-plan-relation-order-by-with-relation.input';
import { PromotionPlanRelationWhereUniqueInput } from '../inputs/promotion-plan-relation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PromotionPlanRelationScalarFieldEnum } from '../enums/promotion-plan-relation-scalar-field.enum';

@ArgsType()
export class FindFirstPromotionPlanRelationArgs {

    @Field(() => PromotionPlanRelationWhereInput, {nullable:true})
    @Type(() => PromotionPlanRelationWhereInput)
    where?: PromotionPlanRelationWhereInput;

    @Field(() => [PromotionPlanRelationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PromotionPlanRelationOrderByWithRelationInput>;

    @Field(() => PromotionPlanRelationWhereUniqueInput, {nullable:true})
    cursor?: PromotionPlanRelationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PromotionPlanRelationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PromotionPlanRelationScalarFieldEnum>;
}
