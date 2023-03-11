import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class AdSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    ad_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coords_latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coords_longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    coords_radius?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price_eurocent?: keyof typeof SortOrder;

    @HideField()
    moderation_flag?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price_rating?: keyof typeof SortOrder;
}
