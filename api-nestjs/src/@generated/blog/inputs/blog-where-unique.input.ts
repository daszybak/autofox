import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BlogWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    blog_id?: number;
}
