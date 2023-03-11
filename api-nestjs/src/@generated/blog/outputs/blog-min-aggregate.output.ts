import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BlogMinAggregate {

    @Field(() => Int, {nullable:true})
    blog_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    text?: string;

    @Field(() => Int, {nullable:true})
    language_cid?: number;

    @Field(() => String, {nullable:true})
    user_sub?: string;

    @Field(() => Int, {nullable:true})
    moderation_flag?: number;
}
