import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../../prisma/inputs/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/inputs/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/inputs/date-time-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/inputs/string-with-aggregates-filter.input';

@InputType()
export class MessagingChannelScalarWhereWithAggregatesInput {

    @Field(() => [MessagingChannelScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MessagingChannelScalarWhereWithAggregatesInput>;

    @Field(() => [MessagingChannelScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MessagingChannelScalarWhereWithAggregatesInput>;

    @Field(() => [MessagingChannelScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MessagingChannelScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    messaging_channel_id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deleted_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    address?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    device_type?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    platform?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_sub?: StringWithAggregatesFilter;
}
