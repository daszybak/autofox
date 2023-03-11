import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingWhereUniqueInput } from '../inputs/messaging-where-unique.input';
import { Type } from 'class-transformer';
import { MessagingCreateInput } from '../inputs/messaging-create.input';
import { MessagingUpdateInput } from '../inputs/messaging-update.input';

@ArgsType()
export class UpsertOneMessagingArgs {

    @Field(() => MessagingWhereUniqueInput, {nullable:false})
    @Type(() => MessagingWhereUniqueInput)
    where!: MessagingWhereUniqueInput;

    @Field(() => MessagingCreateInput, {nullable:false})
    @Type(() => MessagingCreateInput)
    create!: MessagingCreateInput;

    @Field(() => MessagingUpdateInput, {nullable:false})
    @Type(() => MessagingUpdateInput)
    update!: MessagingUpdateInput;
}
