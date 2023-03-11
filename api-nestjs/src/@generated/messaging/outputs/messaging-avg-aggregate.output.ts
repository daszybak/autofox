import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MessagingAvgAggregate {

    @Field(() => Float, {nullable:true})
    messaging_id?: number;

    @Field(() => Float, {nullable:true})
    device_type?: number;
}
