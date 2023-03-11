import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingChannelWhereInput } from '../inputs/messaging-channel-where.input';
import { Type } from 'class-transformer';
import { MessagingChannelOrderByWithRelationInput } from '../inputs/messaging-channel-order-by-with-relation.input';
import { MessagingChannelWhereUniqueInput } from '../inputs/messaging-channel-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessagingChannelScalarFieldEnum } from '../enums/messaging-channel-scalar-field.enum';

@ArgsType()
export class FindFirstMessagingChannelArgs {

    @Field(() => MessagingChannelWhereInput, {nullable:true})
    @Type(() => MessagingChannelWhereInput)
    where?: MessagingChannelWhereInput;

    @Field(() => [MessagingChannelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessagingChannelOrderByWithRelationInput>;

    @Field(() => MessagingChannelWhereUniqueInput, {nullable:true})
    cursor?: MessagingChannelWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MessagingChannelScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessagingChannelScalarFieldEnum>;
}
