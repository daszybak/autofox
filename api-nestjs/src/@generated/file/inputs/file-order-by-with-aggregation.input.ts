import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { FileCountOrderByAggregateInput } from './file-count-order-by-aggregate.input';
import { FileAvgOrderByAggregateInput } from './file-avg-order-by-aggregate.input';
import { FileMaxOrderByAggregateInput } from './file-max-order-by-aggregate.input';
import { FileMinOrderByAggregateInput } from './file-min-order-by-aggregate.input';
import { FileSumOrderByAggregateInput } from './file-sum-order-by-aggregate.input';

@InputType()
export class FileOrderByWithAggregationInput {

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

    @Field(() => FileCountOrderByAggregateInput, {nullable:true})
    _count?: FileCountOrderByAggregateInput;

    @Field(() => FileAvgOrderByAggregateInput, {nullable:true})
    _avg?: FileAvgOrderByAggregateInput;

    @Field(() => FileMaxOrderByAggregateInput, {nullable:true})
    _max?: FileMaxOrderByAggregateInput;

    @Field(() => FileMinOrderByAggregateInput, {nullable:true})
    _min?: FileMinOrderByAggregateInput;

    @Field(() => FileSumOrderByAggregateInput, {nullable:true})
    _sum?: FileSumOrderByAggregateInput;
}
