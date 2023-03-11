import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class FileMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    file_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filename?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filesize?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    path?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ad_id?: keyof typeof SortOrder;

    @HideField()
    user_sub?: keyof typeof SortOrder;
}
