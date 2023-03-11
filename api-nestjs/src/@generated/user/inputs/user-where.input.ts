import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { StringNullableFilter } from '../../prisma/inputs/string-nullable-filter.input';
import { AdListRelationFilter } from '../../ad/inputs/ad-list-relation-filter.input';
import { Type } from 'class-transformer';
import { FileListRelationFilter } from '../../file/inputs/file-list-relation-filter.input';
import { ListListRelationFilter } from '../../list/inputs/list-list-relation-filter.input';
import { BlogListRelationFilter } from '../../blog/inputs/blog-list-relation-filter.input';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { HideField } from '@nestjs/graphql';
import { UserPromotionListRelationFilter } from '../../user-promotion/inputs/user-promotion-list-relation-filter.input';
import { AdPromotionListRelationFilter } from '../../ad-promotion/inputs/ad-promotion-list-relation-filter.input';
import { MessagingChannelListRelationFilter } from '../../messaging-channel/inputs/messaging-channel-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    user_sub?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => AdListRelationFilter, {nullable:true})
    @Type(() => AdListRelationFilter)
    ads?: AdListRelationFilter;

    @Field(() => FileListRelationFilter, {nullable:true})
    files?: FileListRelationFilter;

    @Field(() => ListListRelationFilter, {nullable:true})
    lists?: ListListRelationFilter;

    @Field(() => BlogListRelationFilter, {nullable:true})
    blogs?: BlogListRelationFilter;

    @HideField()
    moderation_flag?: IntFilter;

    @Field(() => UserPromotionListRelationFilter, {nullable:true})
    UserPromotion?: UserPromotionListRelationFilter;

    @Field(() => AdPromotionListRelationFilter, {nullable:true})
    AdPromotion?: AdPromotionListRelationFilter;

    @Field(() => MessagingChannelListRelationFilter, {nullable:true})
    MessagingChannel?: MessagingChannelListRelationFilter;
}
