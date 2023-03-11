import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereInput } from '../inputs/file-where.input';
import { Type } from 'class-transformer';
import { FileOrderByWithAggregationInput } from '../inputs/file-order-by-with-aggregation.input';
import { FileScalarFieldEnum } from '../enums/file-scalar-field.enum';
import { FileScalarWhereWithAggregatesInput } from '../inputs/file-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FileCountAggregateInput } from '../inputs/file-count-aggregate.input';
import { FileAvgAggregateInput } from '../inputs/file-avg-aggregate.input';
import { FileSumAggregateInput } from '../inputs/file-sum-aggregate.input';
import { FileMinAggregateInput } from '../inputs/file-min-aggregate.input';
import { FileMaxAggregateInput } from '../inputs/file-max-aggregate.input';

@ArgsType()
export class FileGroupByArgs {

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: FileWhereInput;

    @Field(() => [FileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FileOrderByWithAggregationInput>;

    @Field(() => [FileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FileScalarFieldEnum>;

    @Field(() => FileScalarWhereWithAggregatesInput, {nullable:true})
    having?: FileScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FileCountAggregateInput, {nullable:true})
    _count?: FileCountAggregateInput;

    @Field(() => FileAvgAggregateInput, {nullable:true})
    _avg?: FileAvgAggregateInput;

    @Field(() => FileSumAggregateInput, {nullable:true})
    _sum?: FileSumAggregateInput;

    @Field(() => FileMinAggregateInput, {nullable:true})
    _min?: FileMinAggregateInput;

    @Field(() => FileMaxAggregateInput, {nullable:true})
    _max?: FileMaxAggregateInput;
}
