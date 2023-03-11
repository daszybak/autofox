import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ListMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    list_id?: true;

    @Field(() => Boolean, {nullable:true})
    list_type?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    search_params?: true;

    @Field(() => Boolean, {nullable:true})
    is_notifiable_by_email?: true;

    @Field(() => Boolean, {nullable:true})
    is_notifiable_by_push?: true;

    @Field(() => Boolean, {nullable:true})
    is_notifiable_by_sms?: true;

    @HideField()
    user_sub?: true;
}
