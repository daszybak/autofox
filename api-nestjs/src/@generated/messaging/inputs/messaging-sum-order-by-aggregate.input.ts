import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';

@InputType()
export class MessagingSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    messaging_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    device_type?: keyof typeof SortOrder;
}
