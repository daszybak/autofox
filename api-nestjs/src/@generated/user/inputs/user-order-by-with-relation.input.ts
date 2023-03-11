import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { AdOrderByRelationAggregateInput } from '../../ad/inputs/ad-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { FileOrderByRelationAggregateInput } from '../../file/inputs/file-order-by-relation-aggregate.input';
import { ListOrderByRelationAggregateInput } from '../../list/inputs/list-order-by-relation-aggregate.input';
import { BlogOrderByRelationAggregateInput } from '../../blog/inputs/blog-order-by-relation-aggregate.input';
import { HideField } from '@nestjs/graphql';
import { UserPromotionOrderByRelationAggregateInput } from '../../user-promotion/inputs/user-promotion-order-by-relation-aggregate.input';
import { AdPromotionOrderByRelationAggregateInput } from '../../ad-promotion/inputs/ad-promotion-order-by-relation-aggregate.input';
import { MessagingChannelOrderByRelationAggregateInput } from '../../messaging-channel/inputs/messaging-channel-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    user_sub?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => AdOrderByRelationAggregateInput, {nullable:true})
    @Type(() => AdOrderByRelationAggregateInput)
    ads?: AdOrderByRelationAggregateInput;

    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    files?: FileOrderByRelationAggregateInput;

    @Field(() => ListOrderByRelationAggregateInput, {nullable:true})
    lists?: ListOrderByRelationAggregateInput;

    @Field(() => BlogOrderByRelationAggregateInput, {nullable:true})
    blogs?: BlogOrderByRelationAggregateInput;

    @HideField()
    moderation_flag?: keyof typeof SortOrder;

    @Field(() => UserPromotionOrderByRelationAggregateInput, {nullable:true})
    UserPromotion?: UserPromotionOrderByRelationAggregateInput;

    @Field(() => AdPromotionOrderByRelationAggregateInput, {nullable:true})
    AdPromotion?: AdPromotionOrderByRelationAggregateInput;

    @Field(() => MessagingChannelOrderByRelationAggregateInput, {nullable:true})
    MessagingChannel?: MessagingChannelOrderByRelationAggregateInput;
}
