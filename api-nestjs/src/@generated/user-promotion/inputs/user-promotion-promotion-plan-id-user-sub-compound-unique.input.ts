import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserPromotionPromotion_plan_idUser_subCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    promotion_plan_id!: number;

    @Field(() => String, {nullable:false})
    user_sub!: string;
}
