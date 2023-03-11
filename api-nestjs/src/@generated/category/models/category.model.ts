import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AdCategory } from '../../ad-category/models/ad-category.model';
import { AdAuto } from '../../ad-auto/models/ad-auto.model';
import { Blog } from '../../blog/models/blog.model';
import { PromotionPlan } from '../../promotion-plan/models/promotion-plan.model';
import { CategoryCount } from '../outputs/category-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    category_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Category], {nullable:true})
    children?: Array<Category>;

    @Field(() => Int, {nullable:true})
    parent_category_id!: number | null;

    @Field(() => Category, {nullable:true})
    parent?: Category | null;

    @Field(() => String, {nullable:true})
    icon!: string | null;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Int, {nullable:true})
    weight!: number | null;

    @Field(() => [AdCategory], {nullable:true})
    ad_categories?: Array<AdCategory>;

    @Field(() => [AdAuto], {nullable:true})
    AdAutoConditionType?: Array<AdAuto>;

    @Field(() => [AdAuto], {nullable:true})
    AdAutoVehicleType?: Array<AdAuto>;

    @Field(() => [AdAuto], {nullable:true})
    AdAutoFuelType?: Array<AdAuto>;

    @Field(() => [AdAuto], {nullable:true})
    AdAutoTransmissionType?: Array<AdAuto>;

    @Field(() => [AdAuto], {nullable:true})
    AdAutoMake?: Array<AdAuto>;

    @Field(() => [AdAuto], {nullable:true})
    AdAutoModel?: Array<AdAuto>;

    @Field(() => [AdAuto], {nullable:true})
    AdAutoBodyType?: Array<AdAuto>;

    @Field(() => [AdAuto], {nullable:true})
    AdAutoVariant?: Array<AdAuto>;

    @Field(() => [AdAuto], {nullable:true})
    AdAutoEmissionClass?: Array<AdAuto>;

    @Field(() => [AdAuto], {nullable:true})
    AdAutoConditioning?: Array<AdAuto>;

    @Field(() => [AdAuto], {nullable:true})
    AdAutoColorInterior?: Array<AdAuto>;

    @Field(() => [AdAuto], {nullable:true})
    AdAutoColorExterior?: Array<AdAuto>;

    @Field(() => [Blog], {nullable:true})
    Language?: Array<Blog>;

    @Field(() => [PromotionPlan], {nullable:true})
    PromotionRegion?: Array<PromotionPlan>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
