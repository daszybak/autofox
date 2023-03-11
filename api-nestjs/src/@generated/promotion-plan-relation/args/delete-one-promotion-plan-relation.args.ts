import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanRelationWhereUniqueInput } from '../inputs/promotion-plan-relation-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePromotionPlanRelationArgs {

    @Field(() => PromotionPlanRelationWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanRelationWhereUniqueInput)
    where!: PromotionPlanRelationWhereUniqueInput;
}
