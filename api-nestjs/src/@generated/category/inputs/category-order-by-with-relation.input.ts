import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { CategoryOrderByRelationAggregateInput } from './category-order-by-relation-aggregate.input';
import { AdCategoryOrderByRelationAggregateInput } from '../../ad-category/inputs/ad-category-order-by-relation-aggregate.input';
import { AdAutoOrderByRelationAggregateInput } from '../../ad-auto/inputs/ad-auto-order-by-relation-aggregate.input';
import { BlogOrderByRelationAggregateInput } from '../../blog/inputs/blog-order-by-relation-aggregate.input';
import { PromotionPlanOrderByRelationAggregateInput } from '../../promotion-plan/inputs/promotion-plan-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByRelationAggregateInput, {nullable:true})
    children?: CategoryOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    parent_category_id?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    parent?: CategoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weight?: keyof typeof SortOrder;

    @Field(() => AdCategoryOrderByRelationAggregateInput, {nullable:true})
    ad_categories?: AdCategoryOrderByRelationAggregateInput;

    @Field(() => AdAutoOrderByRelationAggregateInput, {nullable:true})
    AdAutoConditionType?: AdAutoOrderByRelationAggregateInput;

    @Field(() => AdAutoOrderByRelationAggregateInput, {nullable:true})
    AdAutoVehicleType?: AdAutoOrderByRelationAggregateInput;

    @Field(() => AdAutoOrderByRelationAggregateInput, {nullable:true})
    AdAutoFuelType?: AdAutoOrderByRelationAggregateInput;

    @Field(() => AdAutoOrderByRelationAggregateInput, {nullable:true})
    AdAutoTransmissionType?: AdAutoOrderByRelationAggregateInput;

    @Field(() => AdAutoOrderByRelationAggregateInput, {nullable:true})
    AdAutoMake?: AdAutoOrderByRelationAggregateInput;

    @Field(() => AdAutoOrderByRelationAggregateInput, {nullable:true})
    AdAutoModel?: AdAutoOrderByRelationAggregateInput;

    @Field(() => AdAutoOrderByRelationAggregateInput, {nullable:true})
    AdAutoBodyType?: AdAutoOrderByRelationAggregateInput;

    @Field(() => AdAutoOrderByRelationAggregateInput, {nullable:true})
    AdAutoVariant?: AdAutoOrderByRelationAggregateInput;

    @Field(() => AdAutoOrderByRelationAggregateInput, {nullable:true})
    AdAutoEmissionClass?: AdAutoOrderByRelationAggregateInput;

    @Field(() => AdAutoOrderByRelationAggregateInput, {nullable:true})
    AdAutoConditioning?: AdAutoOrderByRelationAggregateInput;

    @Field(() => AdAutoOrderByRelationAggregateInput, {nullable:true})
    AdAutoColorInterior?: AdAutoOrderByRelationAggregateInput;

    @Field(() => AdAutoOrderByRelationAggregateInput, {nullable:true})
    AdAutoColorExterior?: AdAutoOrderByRelationAggregateInput;

    @Field(() => BlogOrderByRelationAggregateInput, {nullable:true})
    Language?: BlogOrderByRelationAggregateInput;

    @Field(() => PromotionPlanOrderByRelationAggregateInput, {nullable:true})
    @Type(() => PromotionPlanOrderByRelationAggregateInput)
    PromotionRegion?: PromotionPlanOrderByRelationAggregateInput;
}
