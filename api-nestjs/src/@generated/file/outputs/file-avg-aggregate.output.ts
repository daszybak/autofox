import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FileAvgAggregate {

    @Field(() => Float, {nullable:true})
    file_id?: number;

    @Field(() => Float, {nullable:true})
    filesize?: number;

    @Field(() => Float, {nullable:true})
    ad_id?: number;
}
