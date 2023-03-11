import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MessagingWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    messaging_id?: number;
}
