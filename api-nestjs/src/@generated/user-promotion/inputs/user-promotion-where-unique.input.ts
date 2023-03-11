import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPromotionPromotion_plan_idUser_subCompoundUniqueInput } from './user-promotion-promotion-plan-id-user-sub-compound-unique.input';

@InputType()
export class UserPromotionWhereUniqueInput {

    @Field(() => UserPromotionPromotion_plan_idUser_subCompoundUniqueInput, {nullable:true})
    promotion_plan_id_user_sub?: UserPromotionPromotion_plan_idUser_subCompoundUniqueInput;
}
