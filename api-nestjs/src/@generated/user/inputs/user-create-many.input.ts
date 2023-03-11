import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCreateManyInput {

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @HideField()
    moderation_flag?: number;
}
