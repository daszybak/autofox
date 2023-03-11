import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { DateTimeFilter } from '../../prisma/inputs/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/inputs/date-time-nullable-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { CategoryListRelationFilter } from './category-list-relation-filter.input';
import { IntNullableFilter } from '../../prisma/inputs/int-nullable-filter.input';
import { CategoryRelationFilter } from './category-relation-filter.input';
import { StringNullableFilter } from '../../prisma/inputs/string-nullable-filter.input';
import { AdCategoryListRelationFilter } from '../../ad-category/inputs/ad-category-list-relation-filter.input';
import { AdAutoListRelationFilter } from '../../ad-auto/inputs/ad-auto-list-relation-filter.input';
import { BlogListRelationFilter } from '../../blog/inputs/blog-list-relation-filter.input';
import { PromotionPlanListRelationFilter } from '../../promotion-plan/inputs/promotion-plan-list-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryWhereInput {

    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted_at?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => CategoryListRelationFilter, {nullable:true})
    children?: CategoryListRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    parent_category_id?: IntNullableFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    parent?: CategoryRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    weight?: IntNullableFilter;

    @Field(() => AdCategoryListRelationFilter, {nullable:true})
    ad_categories?: AdCategoryListRelationFilter;

    @Field(() => AdAutoListRelationFilter, {nullable:true})
    AdAutoConditionType?: AdAutoListRelationFilter;

    @Field(() => AdAutoListRelationFilter, {nullable:true})
    AdAutoVehicleType?: AdAutoListRelationFilter;

    @Field(() => AdAutoListRelationFilter, {nullable:true})
    AdAutoFuelType?: AdAutoListRelationFilter;

    @Field(() => AdAutoListRelationFilter, {nullable:true})
    AdAutoTransmissionType?: AdAutoListRelationFilter;

    @Field(() => AdAutoListRelationFilter, {nullable:true})
    AdAutoMake?: AdAutoListRelationFilter;

    @Field(() => AdAutoListRelationFilter, {nullable:true})
    AdAutoModel?: AdAutoListRelationFilter;

    @Field(() => AdAutoListRelationFilter, {nullable:true})
    AdAutoBodyType?: AdAutoListRelationFilter;

    @Field(() => AdAutoListRelationFilter, {nullable:true})
    AdAutoVariant?: AdAutoListRelationFilter;

    @Field(() => AdAutoListRelationFilter, {nullable:true})
    AdAutoEmissionClass?: AdAutoListRelationFilter;

    @Field(() => AdAutoListRelationFilter, {nullable:true})
    AdAutoConditioning?: AdAutoListRelationFilter;

    @Field(() => AdAutoListRelationFilter, {nullable:true})
    AdAutoColorInterior?: AdAutoListRelationFilter;

    @Field(() => AdAutoListRelationFilter, {nullable:true})
    AdAutoColorExterior?: AdAutoListRelationFilter;

    @Field(() => BlogListRelationFilter, {nullable:true})
    Language?: BlogListRelationFilter;

    @Field(() => PromotionPlanListRelationFilter, {nullable:true})
    @Type(() => PromotionPlanListRelationFilter)
    PromotionRegion?: PromotionPlanListRelationFilter;
}
