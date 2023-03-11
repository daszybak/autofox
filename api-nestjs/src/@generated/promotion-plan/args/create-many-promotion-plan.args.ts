import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanCreateManyInput } from '../inputs/promotion-plan-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPromotionPlanArgs {

    @Field(() => [PromotionPlanCreateManyInput], {nullable:false})
    @Type(() => PromotionPlanCreateManyInput)
    data!: Array<PromotionPlanCreateManyInput>;
}
