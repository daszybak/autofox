import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { DateTimeFilter } from '../../prisma/inputs/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/inputs/date-time-nullable-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';

@InputType()
export class MessagingScalarWhereInput {

    @Field(() => [MessagingScalarWhereInput], {nullable:true})
    AND?: Array<MessagingScalarWhereInput>;

    @Field(() => [MessagingScalarWhereInput], {nullable:true})
    OR?: Array<MessagingScalarWhereInput>;

    @Field(() => [MessagingScalarWhereInput], {nullable:true})
    NOT?: Array<MessagingScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    messaging_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted_at?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    device_type?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    platform?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_sub?: StringFilter;
}
