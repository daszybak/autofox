import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BlogSumAggregate {

    @Field(() => Int, {nullable:true})
    blog_id?: number;

    @Field(() => Int, {nullable:true})
    language_cid?: number;

    @Field(() => Int, {nullable:true})
    moderation_flag?: number;
}
