import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class BlogSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    blog_id?: true;

    @Field(() => Boolean, {nullable:true})
    language_cid?: true;

    @HideField()
    moderation_flag?: true;
}
