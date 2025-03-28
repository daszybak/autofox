import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class AdMaxOrderByAggregateInput {

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

    @Field(() => SortOrder, {nullable:true})
    is_sold?: keyof typeof SortOrder;

    @HideField()
    moderation_flag?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price_rating?: keyof typeof SortOrder;
}
