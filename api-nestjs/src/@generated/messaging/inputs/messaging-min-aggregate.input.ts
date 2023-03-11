import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MessagingMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    messaging_id?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    deleted_at?: true;

    @Field(() => Boolean, {nullable:true})
    address?: true;

    @Field(() => Boolean, {nullable:true})
    device_type?: true;

    @Field(() => Boolean, {nullable:true})
    platform?: true;

    @Field(() => Boolean, {nullable:true})
    user_sub?: true;
}
