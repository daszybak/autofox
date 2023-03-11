import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';

@InputType()
export class ListSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    list_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    list_type?: keyof typeof SortOrder;
}
