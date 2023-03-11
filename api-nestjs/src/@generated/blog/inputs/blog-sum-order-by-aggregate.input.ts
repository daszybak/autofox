import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class BlogSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    blog_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language_cid?: keyof typeof SortOrder;

    @HideField()
    moderation_flag?: keyof typeof SortOrder;
}
