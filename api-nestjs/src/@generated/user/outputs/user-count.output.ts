import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    ads?: number;

    @Field(() => Int, {nullable:false})
    files?: number;

    @Field(() => Int, {nullable:false})
    lists?: number;

    @Field(() => Int, {nullable:false})
    blogs?: number;

    @Field(() => Int, {nullable:false})
    UserPromotion?: number;

    @Field(() => Int, {nullable:false})
    AdPromotion?: number;

    @Field(() => Int, {nullable:false})
    MessagingChannel?: number;
}
