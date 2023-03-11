import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';

@InputType()
export class CategoryAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parent_category_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    weight?: keyof typeof SortOrder;
}
