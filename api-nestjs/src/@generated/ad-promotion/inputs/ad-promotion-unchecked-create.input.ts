import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AdPromotionUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    promotion_plan_id!: number;

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => Date, {nullable:true})
    valid_from?: Date | string;

    @Field(() => Date, {nullable:true})
    valid_to?: Date | string;

    @Field(() => String, {nullable:true})
    transaction_id?: string;
}
