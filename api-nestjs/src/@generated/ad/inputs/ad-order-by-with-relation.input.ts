import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { UserOrderByWithRelationInput } from '../../user/inputs/user-order-by-with-relation.input';
import { AdCategoryOrderByRelationAggregateInput } from '../../ad-category/inputs/ad-category-order-by-relation-aggregate.input';
import { AdAutoOrderByWithRelationInput } from '../../ad-auto/inputs/ad-auto-order-by-with-relation.input';
import { AdHouseOrderByWithRelationInput } from '../../ad-house/inputs/ad-house-order-by-with-relation.input';
import { FileOrderByRelationAggregateInput } from '../../file/inputs/file-order-by-relation-aggregate.input';
import { ListAdOrderByRelationAggregateInput } from '../../list-ad/inputs/list-ad-order-by-relation-aggregate.input';
import { HideField } from '@nestjs/graphql';
import { AdPromotionOrderByRelationAggregateInput } from '../../ad-promotion/inputs/ad-promotion-order-by-relation-aggregate.input';

@InputType()
export class AdOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    ad_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coords_latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coords_longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coords_radius?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price_eurocent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_sub?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => AdCategoryOrderByRelationAggregateInput, {nullable:true})
    ad_categories?: AdCategoryOrderByRelationAggregateInput;

    @Field(() => AdAutoOrderByWithRelationInput, {nullable:true})
    ad_auto?: AdAutoOrderByWithRelationInput;

    @Field(() => AdHouseOrderByWithRelationInput, {nullable:true})
    ad_house?: AdHouseOrderByWithRelationInput;

    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    files?: FileOrderByRelationAggregateInput;

    @Field(() => ListAdOrderByRelationAggregateInput, {nullable:true})
    ListAd?: ListAdOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    is_sold?: keyof typeof SortOrder;

    @HideField()
    moderation_flag?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price_rating?: keyof typeof SortOrder;

    @Field(() => AdPromotionOrderByRelationAggregateInput, {nullable:true})
    AdPromotion?: AdPromotionOrderByRelationAggregateInput;
}
