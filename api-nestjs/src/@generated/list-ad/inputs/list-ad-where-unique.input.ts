import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListAdAd_idList_idCompoundUniqueInput } from './list-ad-ad-id-list-id-compound-unique.input';

@InputType()
export class ListAdWhereUniqueInput {

    @Field(() => ListAdAd_idList_idCompoundUniqueInput, {nullable:true})
    ad_id_list_id?: ListAdAd_idList_idCompoundUniqueInput;
}
