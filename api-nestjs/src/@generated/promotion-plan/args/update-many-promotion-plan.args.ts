import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanUpdateManyMutationInput } from '../inputs/promotion-plan-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PromotionPlanWhereInput } from '../inputs/promotion-plan-where.input';

@ArgsType()
export class UpdateManyPromotionPlanArgs {

    @Field(() => PromotionPlanUpdateManyMutationInput, {nullable:false})
    @Type(() => PromotionPlanUpdateManyMutationInput)
    data!: PromotionPlanUpdateManyMutationInput;

    @Field(() => PromotionPlanWhereInput, {nullable:true})
    @Type(() => PromotionPlanWhereInput)
    where?: PromotionPlanWhereInput;
}
