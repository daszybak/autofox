import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { BoolFilter } from '../../prisma/inputs/bool-filter.input';
import { HideField } from '@nestjs/graphql';
import { UserRelationFilter } from '../../user/inputs/user-relation-filter.input';
import { ListAdListRelationFilter } from '../../list-ad/inputs/list-ad-list-relation-filter.input';

@InputType()
export class ListWhereInput {

    @Field(() => [ListWhereInput], {nullable:true})
    AND?: Array<ListWhereInput>;

    @Field(() => [ListWhereInput], {nullable:true})
    OR?: Array<ListWhereInput>;

    @Field(() => [ListWhereInput], {nullable:true})
    NOT?: Array<ListWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    list_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    list_type?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    search_params?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_notifiable_by_email?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_notifiable_by_push?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_notifiable_by_sms?: BoolFilter;

    @HideField()
    user_sub?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ListAdListRelationFilter, {nullable:true})
    ListAd?: ListAdListRelationFilter;
}
