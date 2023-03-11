import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FileCountAggregate } from './file-count-aggregate.output';
import { FileAvgAggregate } from './file-avg-aggregate.output';
import { FileSumAggregate } from './file-sum-aggregate.output';
import { FileMinAggregate } from './file-min-aggregate.output';
import { FileMaxAggregate } from './file-max-aggregate.output';

@ObjectType()
export class FileGroupBy {

    @Field(() => Int, {nullable:false})
    file_id!: number;

    @Field(() => String, {nullable:false})
    filename!: string;

    @Field(() => Int, {nullable:false})
    filesize!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => FileCountAggregate, {nullable:true})
    _count?: FileCountAggregate;

    @Field(() => FileAvgAggregate, {nullable:true})
    _avg?: FileAvgAggregate;

    @Field(() => FileSumAggregate, {nullable:true})
    _sum?: FileSumAggregate;

    @Field(() => FileMinAggregate, {nullable:true})
    _min?: FileMinAggregate;

    @Field(() => FileMaxAggregate, {nullable:true})
    _max?: FileMaxAggregate;
}
