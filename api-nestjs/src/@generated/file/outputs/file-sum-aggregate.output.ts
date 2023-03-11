import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FileSumAggregate {

    @Field(() => Int, {nullable:true})
    file_id?: number;

    @Field(() => Int, {nullable:true})
    filesize?: number;

    @Field(() => Int, {nullable:true})
    ad_id?: number;
}
