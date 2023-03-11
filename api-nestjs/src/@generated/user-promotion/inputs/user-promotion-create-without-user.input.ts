import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateNestedOneWithoutUserPromotionInput } from '../../promotion-plan/inputs/promotion-plan-create-nested-one-without-user-promotion.input';
import { Type } from 'class-transformer';

@InputType()
export class UserPromotionCreateWithoutUserInput {

    @Field(() => PromotionPlanCreateNestedOneWithoutUserPromotionInput, {nullable:false})
    @Type(() => PromotionPlanCreateNestedOneWithoutUserPromotionInput)
    promotion_plan!: PromotionPlanCreateNestedOneWithoutUserPromotionInput;

    @Field(() => Date, {nullable:true})
    valid_from?: Date | string;

    @Field(() => Date, {nullable:true})
    valid_to?: Date | string;

    @Field(() => String, {nullable:true})
    transaction_id?: string;
}
