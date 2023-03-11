import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCategoryAd_idCategory_idCompoundUniqueInput } from './ad-category-ad-id-category-id-compound-unique.input';

@InputType()
export class AdCategoryWhereUniqueInput {

    @Field(() => AdCategoryAd_idCategory_idCompoundUniqueInput, {nullable:true})
    ad_id_category_id?: AdCategoryAd_idCategory_idCompoundUniqueInput;
}
