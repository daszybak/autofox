import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ListCountAggregate {

    @Field(() => Int, {nullable:false})
    list_id!: number;

    @Field(() => Int, {nullable:false})
    list_type!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    search_params!: number;

    @Field(() => Int, {nullable:false})
    is_notifiable_by_email!: number;

    @Field(() => Int, {nullable:false})
    is_notifiable_by_push!: number;

    @Field(() => Int, {nullable:false})
    is_notifiable_by_sms!: number;

    @Field(() => Int, {nullable:false})
    user_sub!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
