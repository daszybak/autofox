import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FileCountAggregate {

    @Field(() => Int, {nullable:false})
    file_id!: number;

    @Field(() => Int, {nullable:false})
    filename!: number;

    @Field(() => Int, {nullable:false})
    filesize!: number;

    @Field(() => Int, {nullable:false})
    code!: number;

    @Field(() => Int, {nullable:false})
    path!: number;

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => Int, {nullable:false})
    user_sub!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
