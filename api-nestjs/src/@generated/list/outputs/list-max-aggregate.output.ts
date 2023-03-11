import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ListMaxAggregate {

    @Field(() => Int, {nullable:true})
    list_id?: number;

    @Field(() => Int, {nullable:true})
    list_type?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    search_params?: string;

    @Field(() => Boolean, {nullable:true})
    is_notifiable_by_email?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_notifiable_by_push?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_notifiable_by_sms?: boolean;

    @Field(() => String, {nullable:true})
    user_sub?: string;
}
