import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateNestedOneWithoutUserPromotionInput } from '../../promotion-plan/inputs/promotion-plan-create-nested-one-without-user-promotion.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutUserPromotionInput } from '../../user/inputs/user-create-nested-one-without-user-promotion.input';

@InputType()
export class UserPromotionCreateInput {

    @Field(() => PromotionPlanCreateNestedOneWithoutUserPromotionInput, {nullable:false})
    @Type(() => PromotionPlanCreateNestedOneWithoutUserPromotionInput)
    promotion_plan!: PromotionPlanCreateNestedOneWithoutUserPromotionInput;

    @Field(() => UserCreateNestedOneWithoutUserPromotionInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserPromotionInput;

    @Field(() => Date, {nullable:true})
    valid_from?: Date | string;

    @Field(() => Date, {nullable:true})
    valid_to?: Date | string;

    @Field(() => String, {nullable:true})
    transaction_id?: string;
}
