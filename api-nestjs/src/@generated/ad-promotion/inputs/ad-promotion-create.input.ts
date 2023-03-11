import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanCreateNestedOneWithoutAdPromotionInput } from '../../promotion-plan/inputs/promotion-plan-create-nested-one-without-ad-promotion.input';
import { Type } from 'class-transformer';
import { AdCreateNestedOneWithoutAdPromotionInput } from '../../ad/inputs/ad-create-nested-one-without-ad-promotion.input';
import { UserCreateNestedOneWithoutAdPromotionInput } from '../../user/inputs/user-create-nested-one-without-ad-promotion.input';

@InputType()
export class AdPromotionCreateInput {

    @Field(() => PromotionPlanCreateNestedOneWithoutAdPromotionInput, {nullable:false})
    @Type(() => PromotionPlanCreateNestedOneWithoutAdPromotionInput)
    promotion_plan!: PromotionPlanCreateNestedOneWithoutAdPromotionInput;

    @Field(() => AdCreateNestedOneWithoutAdPromotionInput, {nullable:false})
    @Type(() => AdCreateNestedOneWithoutAdPromotionInput)
    ad!: AdCreateNestedOneWithoutAdPromotionInput;

    @Field(() => UserCreateNestedOneWithoutAdPromotionInput, {nullable:false})
    user!: UserCreateNestedOneWithoutAdPromotionInput;

    @Field(() => Date, {nullable:true})
    valid_from?: Date | string;

    @Field(() => Date, {nullable:true})
    valid_to?: Date | string;

    @Field(() => String, {nullable:true})
    transaction_id?: string;
}
