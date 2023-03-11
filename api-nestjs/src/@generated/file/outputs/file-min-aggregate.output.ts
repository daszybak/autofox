import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FileMinAggregate {

    @Field(() => Int, {nullable:true})
    file_id?: number;

    @Field(() => String, {nullable:true})
    filename?: string;

    @Field(() => Int, {nullable:true})
    filesize?: number;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => String, {nullable:true})
    path?: string;

    @Field(() => Int, {nullable:true})
    ad_id?: number;

    @Field(() => String, {nullable:true})
    user_sub?: string;
}
