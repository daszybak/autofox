import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionPromotion_plan_idAd_idUser_subCompoundUniqueInput } from './ad-promotion-promotion-plan-id-ad-id-user-sub-compound-unique.input';

@InputType()
export class AdPromotionWhereUniqueInput {

    @Field(() => AdPromotionPromotion_plan_idAd_idUser_subCompoundUniqueInput, {nullable:true})
    promotion_plan_id_ad_id_user_sub?: AdPromotionPromotion_plan_idAd_idUser_subCompoundUniqueInput;
}
