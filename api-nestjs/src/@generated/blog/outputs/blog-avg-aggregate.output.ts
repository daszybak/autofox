import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BlogAvgAggregate {

    @Field(() => Float, {nullable:true})
    blog_id?: number;

    @Field(() => Float, {nullable:true})
    language_cid?: number;

    @Field(() => Float, {nullable:true})
    moderation_flag?: number;
}
