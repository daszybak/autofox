import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MessagingSumAggregate {

    @Field(() => Int, {nullable:true})
    messaging_id?: number;

    @Field(() => Int, {nullable:true})
    device_type?: number;
}
