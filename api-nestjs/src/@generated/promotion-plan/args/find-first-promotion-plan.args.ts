import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanWhereInput } from '../inputs/promotion-plan-where.input';
import { Type } from 'class-transformer';
import { PromotionPlanOrderByWithRelationInput } from '../inputs/promotion-plan-order-by-with-relation.input';
import { PromotionPlanWhereUniqueInput } from '../inputs/promotion-plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PromotionPlanScalarFieldEnum } from '../enums/promotion-plan-scalar-field.enum';

@ArgsType()
export class FindFirstPromotionPlanArgs {

    @Field(() => PromotionPlanWhereInput, {nullable:true})
    @Type(() => PromotionPlanWhereInput)
    where?: PromotionPlanWhereInput;

    @Field(() => [PromotionPlanOrderByWithRelationInput], {nullable:true})
    @Type(() => PromotionPlanOrderByWithRelationInput)
    orderBy?: Array<PromotionPlanOrderByWithRelationInput>;

    @Field(() => PromotionPlanWhereUniqueInput, {nullable:true})
    @Type(() => PromotionPlanWhereUniqueInput)
    cursor?: PromotionPlanWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PromotionPlanScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PromotionPlanScalarFieldEnum>;
}
