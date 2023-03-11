import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserAvgOrderByAggregateInput {

    @HideField()
    moderation_flag?: keyof typeof SortOrder;
}
