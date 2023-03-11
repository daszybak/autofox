import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanRelationCreateManyInput } from '../inputs/promotion-plan-relation-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPromotionPlanRelationArgs {

    @Field(() => [PromotionPlanRelationCreateManyInput], {nullable:false})
    @Type(() => PromotionPlanRelationCreateManyInput)
    data!: Array<PromotionPlanRelationCreateManyInput>;
}
