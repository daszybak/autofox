import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingWhereInput } from './messaging-where.input';

@InputType()
export class MessagingListRelationFilter {

    @Field(() => MessagingWhereInput, {nullable:true})
    every?: MessagingWhereInput;

    @Field(() => MessagingWhereInput, {nullable:true})
    some?: MessagingWhereInput;

    @Field(() => MessagingWhereInput, {nullable:true})
    none?: MessagingWhereInput;
}
