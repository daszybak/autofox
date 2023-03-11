import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanRelationCreateInput } from '../inputs/promotion-plan-relation-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePromotionPlanRelationArgs {

    @Field(() => PromotionPlanRelationCreateInput, {nullable:false})
    @Type(() => PromotionPlanRelationCreateInput)
    data!: PromotionPlanRelationCreateInput;
}
