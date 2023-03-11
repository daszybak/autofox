import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanRelationWhereInput } from '../inputs/promotion-plan-relation-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPromotionPlanRelationArgs {

    @Field(() => PromotionPlanRelationWhereInput, {nullable:true})
    @Type(() => PromotionPlanRelationWhereInput)
    where?: PromotionPlanRelationWhereInput;
}
