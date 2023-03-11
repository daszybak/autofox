import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { DateTimeFilter } from '../../prisma/inputs/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/inputs/date-time-nullable-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { FloatNullableFilter } from '../../prisma/inputs/float-nullable-filter.input';
import { IntNullableFilter } from '../../prisma/inputs/int-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/inputs/string-nullable-filter.input';
import { UserRelationFilter } from '../../user/inputs/user-relation-filter.input';
import { AdCategoryListRelationFilter } from '../../ad-category/inputs/ad-category-list-relation-filter.input';
import { AdAutoRelationFilter } from '../../ad-auto/inputs/ad-auto-relation-filter.input';
import { AdHouseRelationFilter } from '../../ad-house/inputs/ad-house-relation-filter.input';
import { FileListRelationFilter } from '../../file/inputs/file-list-relation-filter.input';
import { ListAdListRelationFilter } from '../../list-ad/inputs/list-ad-list-relation-filter.input';
import { BoolFilter } from '../../prisma/inputs/bool-filter.input';
import { HideField } from '@nestjs/graphql';
import { DecimalNullableFilter } from '../../prisma/inputs/decimal-nullable-filter.input';
import { AdPromotionListRelationFilter } from '../../ad-promotion/inputs/ad-promotion-list-relation-filter.input';

@InputType()
export class AdWhereInput {

    @Field(() => [AdWhereInput], {nullable:true})
    @Type(() => AdWhereInput)
    AND?: Array<AdWhereInput>;

    @Field(() => [AdWhereInput], {nullable:true})
    @Type(() => AdWhereInput)
    OR?: Array<AdWhereInput>;

    @Field(() => [AdWhereInput], {nullable:true})
    @Type(() => AdWhereInput)
    NOT?: Array<AdWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ad_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted_at?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    coords_latitude?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    coords_longitude?: FloatNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    coords_radius?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    price_eurocent?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    user_sub?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => AdCategoryListRelationFilter, {nullable:true})
    ad_categories?: AdCategoryListRelationFilter;

    @Field(() => AdAutoRelationFilter, {nullable:true})
    ad_auto?: AdAutoRelationFilter;

    @Field(() => AdHouseRelationFilter, {nullable:true})
    ad_house?: AdHouseRelationFilter;

    @Field(() => FileListRelationFilter, {nullable:true})
    files?: FileListRelationFilter;

    @Field(() => ListAdListRelationFilter, {nullable:true})
    ListAd?: ListAdListRelationFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_sold?: BoolFilter;

    @HideField()
    moderation_flag?: IntFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    price_rating?: DecimalNullableFilter;

    @Field(() => AdPromotionListRelationFilter, {nullable:true})
    AdPromotion?: AdPromotionListRelationFilter;
}
