import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingUpdateInput } from '../inputs/messaging-update.input';
import { Type } from 'class-transformer';
import { MessagingWhereUniqueInput } from '../inputs/messaging-where-unique.input';

@ArgsType()
export class UpdateOneMessagingArgs {

    @Field(() => MessagingUpdateInput, {nullable:false})
    @Type(() => MessagingUpdateInput)
    data!: MessagingUpdateInput;

    @Field(() => MessagingWhereUniqueInput, {nullable:false})
    @Type(() => MessagingWhereUniqueInput)
    where!: MessagingWhereUniqueInput;
}
