import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BlogCountAggregate {

    @Field(() => Int, {nullable:false})
    blog_id!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    deleted_at!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    slug!: number;

    @Field(() => Int, {nullable:false})
    text!: number;

    @Field(() => Int, {nullable:false})
    language_cid!: number;

    @Field(() => Int, {nullable:false})
    user_sub!: number;

    @Field(() => Int, {nullable:false})
    moderation_flag!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
