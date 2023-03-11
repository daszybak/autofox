import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import * as Scalars from 'graphql-scalars';

@InputType()
export class ListCreateManyUserInput {

    @Field(() => Int, {nullable:true})
    @Validator.IsIn([0, 1])
    list_type?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Scalars.GraphQLJSON, {nullable:false})
    search_params!: string;

    @Field(() => Boolean, {nullable:true})
    is_notifiable_by_email?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_notifiable_by_push?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_notifiable_by_sms?: boolean;
}
