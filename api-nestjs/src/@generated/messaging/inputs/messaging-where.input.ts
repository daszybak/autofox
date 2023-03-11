import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { DateTimeFilter } from '../../prisma/inputs/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/inputs/date-time-nullable-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { UserRelationFilter } from '../../user/inputs/user-relation-filter.input';

@InputType()
export class MessagingWhereInput {

    @Field(() => [MessagingWhereInput], {nullable:true})
    AND?: Array<MessagingWhereInput>;

    @Field(() => [MessagingWhereInput], {nullable:true})
    OR?: Array<MessagingWhereInput>;

    @Field(() => [MessagingWhereInput], {nullable:true})
    NOT?: Array<MessagingWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
