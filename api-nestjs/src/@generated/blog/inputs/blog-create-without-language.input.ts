import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutBlogsInput } from '../../user/inputs/user-create-nested-one-without-blogs.input';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class BlogCreateWithoutLanguageInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => UserCreateNestedOneWithoutBlogsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutBlogsInput;

    @HideField()
    moderation_flag?: number;
}
