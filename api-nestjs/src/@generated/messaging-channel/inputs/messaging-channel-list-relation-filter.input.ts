import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingChannelWhereInput } from './messaging-channel-where.input';

@InputType()
export class MessagingChannelListRelationFilter {

    @Field(() => MessagingChannelWhereInput, {nullable:true})
    every?: MessagingChannelWhereInput;

    @Field(() => MessagingChannelWhereInput, {nullable:true})
    some?: MessagingChannelWhereInput;

    @Field(() => MessagingChannelWhereInput, {nullable:true})
    none?: MessagingChannelWhereInput;
}
